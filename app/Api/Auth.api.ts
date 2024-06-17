import axios from "axios";

const BASEURL = process.env.Base_URL;
const accessToken = localStorage.getItem("user") || "";

export const LoginApi = async (username: string, pass: string) => {
    try {
        const response = await axios.post(`${BASEURL}/auth`, {
            username,
            pass,
        });
        
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const ChangeProfileApi = async (accessToken: string, imageLink: string) => {
    try {
        const response = await axios.post(`${BASEURL}/auth/me`, {
            profileImage: imageLink,

            headers: {
                'Authorization': accessToken,
            }
        });

        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const ChangePassApi = async (accessToken: string, lastPass: string, newPass: string) => {
    try {
        const response = await axios.post(`${BASEURL}/auth/me`, {
            pass: lastPass,
            newpass: newPass,

            headers: {
                'Authorization': accessToken,
            }
        });
        
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const GetUserApi = async () => {
    try {
        const response = await axios.get(`${BASEURL}/auth/me`, {
            headers: {
                'Authorization': accessToken,
            }
        });
        return response.data;

    } catch (error: any) {
        return error.response.data;
    }
};

