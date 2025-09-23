import baseApiUrl from "@/config/apiUrl";
import axios from "axios";



const signUp = async (data)=>{
    const response = await axios.post(`${baseApiUrl}/api/auth/login`,data)
    return response;
}

export{signUp}