const { createSlice } = require("@reduxjs/toolkit");

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        status: null,
    },
    reducers: {
        setBlogStatus: (state, action) => {
           
            state.status = action.payload;
        }
    }
})
export default blogSlice.reducer;
export const {setBlogStatus}= blogSlice.actions;