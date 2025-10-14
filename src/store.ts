import { create } from "zustand";

type useStoreState = {
    token: string | null;
    logedIn: boolean;
    logout: () => void;
}

export const useAppStore = create<useStoreState>(() => ({
    token: localStorage.getItem('AUTH_TOKEN') ?? null,
    logedIn: localStorage.getItem('AUTH_TOKEN') ? true : false,
    logout: () => {
        localStorage.removeItem('AUTH_TOKEN');
    },
})) 