import axios from "axios";

const BASEURL = process.env.Base_URL;

export const LoginApi = async (username: string, pass: string) => {
    try {
        const response = await axios.post(`${BASEURL}/auth`, {
            username,
            pass,
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Login failed. Please check your credentials.');
        }
    } catch (error) {
        throw new Error('Login failed. Please check your credentials.');
    }
};