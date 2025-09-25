import baseApiUrl from "@/config/apiUrl";
import axios from "axios";
// import token from "./token";

const getAllBlogs = async()=>{
    const response = await axios.get(`${baseApiUrl}/api/blog`)
    return response.data
}
const addBlogPost = async(data)=>{
    const response = await axios.post(`${baseApiUrl}/api/blog`,data)
    return response.data
}
const deleteBlog = async(id)=>{
    const response = await axios.delete(`${baseApiUrl}/api/blog/${id}`)
    return response.data
}
const editBlog = async(id,data)=>{
    const response = await axios.put(`${baseApiUrl}/api/blog/${id}`,data)
    return response.data
}


export {getAllBlogs,addBlogPost,deleteBlog,editBlog}