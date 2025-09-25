const { signUp, changePassword, updateProfile, adminLogin, verify2FA } = require("@/api/auth");
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

const changeUserPassword = createAsyncThunk("auth/changePassword",async(data,{rejectWithValue})=>{
try {
    const response = await changePassword(data)
    return response.data

} catch (error) {
    return rejectWithValue(error?.response?.data)
}
})

const updateUserProfile = createAsyncThunk("auth/updateProfile",async(data,{rejectWithValue})=>{
try {
    const response = await updateProfile(data)
    return response.data

} catch (error) {
    return rejectWithValue(error?.response?.data)
}
})

const adminUserLogin = createAsyncThunk("auth/adminLogin",async(data,{rejectWithValue})=>{
try {
    const response = await adminLogin(data)
    if(response?.data?.token){
        localStorage.setItem("authToken",response?.data?.token)
        localStorage.setItem("isAdmin", "true")
    }
    return response.data

} catch (error) {
    return rejectWithValue(error?.response?.data)
}
})

const verifyTwoFactor = createAsyncThunk("auth/verify2FA",async(data,{rejectWithValue})=>{
try {
    const response = await verify2FA(data)
    return response.data

} catch (error) {
    return rejectWithValue(error?.response?.data)
}
})

export {login, changeUserPassword, updateUserProfile, adminUserLogin, verifyTwoFactor}