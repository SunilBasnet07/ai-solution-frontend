const { combineReducers } = require("@reduxjs/toolkit");
import authReducer from "@/redux/auth/authSlice"
import blogReducer from "@/redux/blog/blogSlice"
import contactReducer from "@/redux/contact/contactSlice"
import reviewReducer from "@/redux/review/reviewSlice"
const rootReducer= combineReducers({
    auth:authReducer,
    blog:blogReducer,
    contact:contactReducer,
    review:reviewReducer,
})
export default rootReducer