import { atom } from 'recoil';

export const usernameState = atom({
    key: 'usernameState',
    default: '',
});

export const passwordState = atom({
    key: 'passwordState',
    default: '',
});

export const errorState = atom({
    key: 'errorState',
    default: null as string | null,
});
