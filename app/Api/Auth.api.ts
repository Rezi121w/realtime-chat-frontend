import axios from "axios";


const BASEURL = process.env.Base_URL;

export const LoginApi = async (username: string, pass: string) => {
    try {
        const response = await axios.post(`${BASEURL}/auth`, {
            username: username,
            pass: pass,
        });
        if(response.status === 201){
            return response.data;
        }
    } catch(error) {
        return error;
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
        if(response.status === 201){
            return response.data;
        }
    } catch(error) {
        return error;
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
        if(response.status === 201){
            return response.data;
        }
    } catch(error) {
        return error;
    }
};

export const GetUserApi = async (accessToken: string) => {
    try {
        const response = await axios.get(`${BASEURL}/auth/me`, {
            headers: {
                'Authorization': accessToken,
            }
        });
        if(response.status === 200){
            return response.data;
        }
    } catch(error) {
        return error;
    }
};

