import axios from "axios";

const BASEURL = process.env.Base_URL;
let accessToken = "";
if(typeof window !== "undefined") {
    accessToken = localStorage.getItem("user") || "";
}

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

export const ChangeProfileApi = async (imageLink: string) => {
    try {
        const response = await axios.post(`${BASEURL}/auth/profile`, {
        profileImage: imageLink,
        },{ headers: {
            'Authorization': accessToken,
        }
        });

        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const ChangePassApi = async (lastPass: string, newPass: string) => {
    try {
        const response = await axios.post(`${BASEURL}/auth/change`, {
            pass: lastPass,
            newpass: newPass,
            },
            {
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

