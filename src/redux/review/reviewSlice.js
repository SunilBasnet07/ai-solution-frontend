import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { submitReviewApi } from "@/api/review";

export const submitReview = createAsyncThunk(
	"review/submit",
	async (payload, { rejectWithValue }) => {
		try {
			const data = await submitReviewApi(payload);
			return data;
		} catch (error) {
			return rejectWithValue(error.message || "Failed to submit review");
		}
	}
);

const initialState = {
	submitStatus: "idle",
	submitError: null,
	lastSubmitted: null,
};

const reviewSlice = createSlice({
	name: "review",
	initialState,
	reducers: {
		resetSubmitState(state) {
			state.submitStatus = "idle";
			state.submitError = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(submitReview.pending, (state) => {
				state.submitStatus = "loading";
				state.submitError = null;
			})
			.addCase(submitReview.fulfilled, (state, action) => {
				state.submitStatus = "succeeded";
				state.lastSubmitted = action.payload;
			})
			.addCase(submitReview.rejected, (state, action) => {
				state.submitStatus = "failed";
				state.submitError = action.payload || "Submission failed";
			});
	},
});

export const { resetSubmitState } = reviewSlice.actions;
export default reviewSlice.reducer;


