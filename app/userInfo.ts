import { selector, atom } from 'recoil';
import { GetUserApi } from './Api/Auth.api';

const getUserData = async () => {
  if (typeof window !== 'undefined') {
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
  }
  return {
    userName: "none",
    role: "none",
    profileImage: "null",
  };
};


const userInfoSelector = selector({
  key: 'userInfoSelector',
  get: async () => {
    return await getUserData();
  },
});


export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: userInfoSelector,
});
