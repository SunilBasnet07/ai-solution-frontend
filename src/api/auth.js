import baseApiUrl from "@/config/apiUrl";
import axios from "axios";
import token from "./token";

const signUp = async (data) => {
    const response = await axios.post(`${baseApiUrl}/api/auth/login`, data)
    return response;
}

const changePassword = async (id, data) => {
    console.log(id, data)
    console.log(token)
    // const token = localStorage.getItem("authToken");
    const response = await axios.put(`${baseApiUrl}/api/users/password/${id}`,data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
}

const updateProfile = async (data) => {
    const token = localStorage.getItem("authToken");
    const response = await axios.put(`${baseApiUrl}/api/auth/profile`, data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    return response;
}

const adminLogin = async (data) => {
    const response = await axios.post(`${baseApiUrl}/api/auth/admin-login`, {
        ...data,
        userAgent: data.userAgent,
        ipAddress: data.ipAddress,
        timestamp: new Date().toISOString()
    });
    return response;
}

const verify2FA = async (data) => {
    const token = localStorage.getItem("authToken");
    const response = await axios.post(`${baseApiUrl}/api/auth/verify-2fa`, data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    return response;
}

export { signUp, changePassword, updateProfile, adminLogin, verify2FA }