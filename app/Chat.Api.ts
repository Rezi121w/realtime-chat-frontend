import axios from "axios";

const API_BASE_URL = "https://realtime-chat-backend-xoik.onrender.com";

export const getChat = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/chat`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

export const postApiMessage = async (data: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/chat`, {
            message: data.message,
            authorName: data.author,
            profileImg: data.profile
        });
        return response.data;
    } catch (error) {
        console.error('Error add Task:', error);
        throw error;
    }
};