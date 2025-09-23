const { createSlice } = require("@reduxjs/toolkit");
const { login } = require("./authAction");

const authSlice = createSlice({
    name:"autn",
    initialState:{
        user:null,
        loading:false,
        error:null,
    },
    reducers:{
        logout:(state)=>{
            state.user=null;
            localStorage.removeItem("authToken")

        },
    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.user = null;
        }).addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        }).addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user=null;
        })
       
    }
})
export const {logout}= authSlice.actions;
export default authSlice.reducer;

