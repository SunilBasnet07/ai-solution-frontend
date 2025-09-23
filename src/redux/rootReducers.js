const { combineReducers } = require("@reduxjs/toolkit");
import authReducer from "@/redux/auth/authSlice"
import blogReducer from "@/redux/blog/blogSlice"
const rootReducer= combineReducers({
    auth:authReducer,
    blog:blogReducer,
})
export default rootReducer