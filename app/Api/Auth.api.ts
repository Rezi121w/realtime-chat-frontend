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