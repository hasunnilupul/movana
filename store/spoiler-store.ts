import {create} from "zustand"
import {persist} from "zustand/middleware"

interface SpoilerStore {
    spoilerFreeMode: boolean
    toggleSpoilerFreeMode: () => void
    setSpoilerFreeMode: (enabled: boolean) => void
}

export const useSpoilerStore = create<SpoilerStore>()(
    persist(
        (set) => ({
            spoilerFreeMode: true, // Default to spoiler-free mode
            toggleSpoilerFreeMode: () => set((state) => ({spoilerFreeMode: !state.spoilerFreeMode})),
            setSpoilerFreeMode: (enabled: boolean) => set({spoilerFreeMode: enabled}),
        }),
        {
            name: "spoiler-settings",
            skipHydration: true,
        },
    ),
)
