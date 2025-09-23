import baseApiUrl from "@/config/apiUrl";
import axios from "axios";
import token from "./token";

const createContact =async(data)=>{
    console.log(data);
    console.log(token);
    const response = await axios.post(`${baseApiUrl}/api/contact`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return response.data;
}

export {createContact}