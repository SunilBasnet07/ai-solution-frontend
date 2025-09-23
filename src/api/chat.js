import baseApiUrl from "@/config/apiUrl";
import axios from "axios";

const createChat = async(question)=>{
    const response = await axios.post(`${baseApiUrl}/api/chatbox`,question)
    return response.data
}
export {createChat}