import baseApiUrl from "@/config/apiUrl";
import axios from "axios";
import token from "./token";

const createContact =async(data)=>{
    const response = await axios.post(`${baseApiUrl}/api/contact`,data)
    
    return response.data;
}
const getAllContacts =async()=>{
    const response = await axios.get(`${baseApiUrl}/api/contact`)
    return response.data;
}
const deleteContact =async(id)=>{
    const response = await axios.delete(`${baseApiUrl}/api/contact/${id}`)
    return response.data;
}
export {createContact,getAllContacts,deleteContact}