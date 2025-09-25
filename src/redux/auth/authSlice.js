const { createSlice } = require("@reduxjs/toolkit");
const { login, changeUserPassword, updateUserProfile, adminUserLogin, verifyTwoFactor } = require("./authAction");

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        loading:false,
        error:null,
        passwordChangeLoading: false,
        passwordChangeError: null,
        profileUpdateLoading: false,
        profileUpdateError: null,
        isAdmin: false,
        adminLoginLoading: false,
        adminLoginError: null,
        twoFactorRequired: false,
        twoFactorLoading: false,
        twoFactorError: null,
    },
    reducers:{
        logout:(state)=>{
            state.user=null;
            localStorage.removeItem("authToken")
        },
        clearPasswordChangeError:(state)=>{
            state.passwordChangeError = null;
        },
        clearProfileUpdateError:(state)=>{
            state.profileUpdateError = null;
        },
        clearAdminLoginError:(state)=>{
            state.adminLoginError = null;
        },
        clearTwoFactorError:(state)=>{
            state.twoFactorError = null;
        },
        setTwoFactorRequired:(state, action)=>{
            state.twoFactorRequired = action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder
        // Login cases
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.user = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user=null;
        })
        // Password change cases
        .addCase(changeUserPassword.pending, (state) => {
            state.passwordChangeLoading = true;
            state.passwordChangeError = null;
        })
        .addCase(changeUserPassword.fulfilled, (state, action) => {
            state.passwordChangeLoading = false;
            state.passwordChangeError = null;
        })
        .addCase(changeUserPassword.rejected, (state, action) => {
            state.passwordChangeLoading = false;
            state.passwordChangeError = action.payload;
        })
        // Profile update cases
        .addCase(updateUserProfile.pending, (state) => {
            state.profileUpdateLoading = true;
            state.profileUpdateError = null;
        })
        .addCase(updateUserProfile.fulfilled, (state, action) => {
            state.profileUpdateLoading = false;
            state.profileUpdateError = null;
            state.user = { ...state.user, ...action.payload };
        })
        .addCase(updateUserProfile.rejected, (state, action) => {
            state.profileUpdateLoading = false;
            state.profileUpdateError = action.payload;
        })
        // Admin login cases
        .addCase(adminUserLogin.pending, (state) => {
            state.adminLoginLoading = true;
            state.adminLoginError = null;
        })
        .addCase(adminUserLogin.fulfilled, (state, action) => {
            state.adminLoginLoading = false;
            state.user = action.payload;
            state.isAdmin = true;
            state.adminLoginError = null;
            state.twoFactorRequired = action.payload.requires2FA || false;
        })
        .addCase(adminUserLogin.rejected, (state, action) => {
            state.adminLoginLoading = false;
            state.adminLoginError = action.payload;
            state.isAdmin = false;
        })
        // 2FA verification cases
        .addCase(verifyTwoFactor.pending, (state) => {
            state.twoFactorLoading = true;
            state.twoFactorError = null;
        })
        .addCase(verifyTwoFactor.fulfilled, (state, action) => {
            state.twoFactorLoading = false;
            state.twoFactorRequired = false;
            state.twoFactorError = null;
        })
        .addCase(verifyTwoFactor.rejected, (state, action) => {
            state.twoFactorLoading = false;
            state.twoFactorError = action.payload;
        })
    }
})
export const {logout, clearPasswordChangeError, clearProfileUpdateError, clearAdminLoginError, clearTwoFactorError, setTwoFactorRequired}= authSlice.actions;
export default authSlice.reducer;

