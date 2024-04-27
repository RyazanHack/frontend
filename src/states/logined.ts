import { create } from "zustand";

interface LoginedState {
    logined: boolean,
    setLogined: (logined: boolean) => void
}

export const useLogined = create<LoginedState>((set) => ({
    logined: !!localStorage["token"],
    setLogined: (logined: boolean) => set({
        logined
    })
}))