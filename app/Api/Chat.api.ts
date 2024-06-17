import axios from "axios";

const BASEURL = process.env.Base_URL;
const accessToken = localStorage.getItem("user") || "";

export const getChatsApi = async () => {
    try {
        const response = await axios.get(`${BASEURL}/chats`, {
            headers: {
                'Authorization': accessToken,
            }
        });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const getChatByIdApi = async (id: string) => {
    try {
        const response = await axios.get(`${BASEURL}/chats/${id}`, {
            headers: {
                'Authorization': accessToken,
            }
        });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};
