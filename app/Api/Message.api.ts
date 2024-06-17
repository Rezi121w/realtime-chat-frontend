import axios from "axios";

const BASEURL = process.env.Base_URL;

export const createMessageApi = async (chatId: string, message: string, accessToken: string) => {
    try {
        const response = await axios.post(`${BASEURL}/messages`, {
            chatId: Number(chatId),
            content: message,
        }, {
            headers: {
                'Authorization': accessToken,
            }
        });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const changeMessageApi = async (messageId: string, newMessage: string, accessToken: string) => {
    try {
        const response = await axios.put(`${BASEURL}/messages/${messageId}`, {
            content: newMessage,
        }, {
            headers: {
                'Authorization': accessToken,
            }
        });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const deleteMessageApi = async (messageId: string, accessToken: string) => {
    try {
        const response = await axios.delete(`${BASEURL}/messages/${messageId}`, {
            headers: {
                'Authorization': accessToken,
            }
        });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};
