import { create } from 'zustand'

export const useMoonStore = create((set) => ({
    key: "N98UUEZWJCFKVHRPUJNY28T7R",

    dataHasBeenFetched: false,
    setDataHasBeenFetched: (dataHasBeenFetched) => set({ dataHasBeenFetched }),

    //hero text
    hideText: false,
    toggleHideText: () => set((state) => ({ hideText: !state.hideText })),

    loading: false,
    setLoading: (loading) => set({ loading }),

    moonPhase: 0,
    setMoonPhase: (moonPhase) => set({ moonPhase }),
    days: [],
    setDays: (days) => set({ days }),
    moonPhasesInfoSource: "https://www.planetary.org/articles/the-phases-of-the-moon-explained"
}))