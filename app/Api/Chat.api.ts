import axios from "axios";

const BASEURL = process.env.Base_URL;

export const getChatsApi = async (accessToken: string) => {
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

