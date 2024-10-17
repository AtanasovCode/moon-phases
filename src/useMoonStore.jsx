import { create } from 'zustand'

export const useMoonStore = create((set) => ({
    key: "N98UUEZWJCFKVHRPUJNY28T7R",

    //hero text
    hideText: false,
    toggleHideText: () => set((state) => ({ hideText: !state.hideText })),


    location: "",
    setLocation: (location) => set({ location }),

    moonPhase: 0,
    setMoonPhase: (moonPhase) => set({ moonPhase }),
}))