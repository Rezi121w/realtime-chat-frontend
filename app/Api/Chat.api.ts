import axios from "axios";

const BASEURL = process.env.Base_URL;
let accessToken = "";
if(typeof window !== "undefined") {
    accessToken = localStorage.getItem("user") || "";
}

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

export const clearChatApi = async (id: string) => {
    try {
        const response = await axios.delete(`${BASEURL}/chats/clear/${id}`, {
            headers: {
                'Authorization': accessToken,
            }
        });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const deleteChatApi = async (id: string) => {
    try {
        const response = await axios.delete(`${BASEURL}/chats/${id}`, {
            headers: {
                'Authorization': accessToken,
            }
        });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};