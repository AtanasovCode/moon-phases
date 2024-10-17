import { create } from 'zustand'

export const useMoonStore = create((set) => ({
    key: "",
    location: "",
    setLocation: (location) => set({ location }),
    moonPhase: 0,
    setMoonPhase = (moonPhase) => set({ moonPhase }),
}))