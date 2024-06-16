import { selector, atom } from 'recoil';
import { GetUserApi } from './Api/Auth.api';

const userInfoSelector = selector({
    key: 'userInfoSelector',
    get: async () => {
        try {
            const userData = await GetUserApi(localStorage.getItem('user') || "null");
            return userData;
        } catch (error) {
            console.error('Error fetching user data:', error);
            return {
                userName: "none",
                role: "none",
                profileImage: "null",
            };
        }
    },
});

export const userInfoAtom = atom({
    key: 'userInfoAtom',
    default: userInfoSelector,
});
