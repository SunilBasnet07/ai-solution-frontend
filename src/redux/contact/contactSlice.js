const { createSlice } = require("@reduxjs/toolkit");

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        contactStatus: null,
    },
    reducers: {
        setContactStatus: (state, action) => {
            state.contactStatus = action.payload;
        }
    }
})
export default contactSlice.reducer;
export const {setContactStatus}= contactSlice.actions;