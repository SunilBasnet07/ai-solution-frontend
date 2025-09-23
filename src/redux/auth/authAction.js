const { signUp } = require("@/api/auth");
const { createAsyncThunk } = require("@reduxjs/toolkit");

const login = createAsyncThunk("auth/login",async(data,{rejectWithValue})=>{
try {
    const response = await signUp(data)
    if(response?.data?.token){
        localStorage.setItem("authToken",response?.data?.token)
    }
    return response.data

} catch (error) {
    return rejectWithValue(error?.response?.data)
}
})
export {login}