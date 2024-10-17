import { create } from 'zustand'

export const useMoonStore = create((set) => ({
    key: "N98UUEZWJCFKVHRPUJNY28T7R",

    location: "",
    setLocation: (location) => set({ location }),

    moonPhase: 0,
    setMoonPhase: (moonPhase) => set({ moonPhase }),
    
    //pop up
    showPopUp: false,
    togglePopUp: () => set((state) => ({ showPopUp: state.showPopUp === true ? false : true })),
}))