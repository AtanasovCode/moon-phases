import { create } from 'zustand'

export const useMoonStore = create((set) => ({
    key: "N98UUEZWJCFKVHRPUJNY28T7R",

    //hero text
    hideText: false,
    toggleHideText: () => set((state) => ({ hideText: !state.hideText })),

    loading: false,
    setLoading: (loading) => set({ loading }),

    moonPhase: 0,
    setMoonPhase: (moonPhase) => set({ moonPhase }),
}))