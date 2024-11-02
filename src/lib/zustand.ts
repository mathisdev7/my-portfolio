import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Settings {
	animations: boolean | null;
	sound: boolean;
	toggleSound: () => void;
	toggleAnimations: () => void;
}

export const useSettingsStore = create<Settings>()(
	persist(
		(set) => ({
			animations: true,
			sound: true,
			toggleSound: (): void => set((state) => ({ sound: !state.sound })),
			toggleAnimations: (): void => set((state) => ({ animations: !state.animations })),
		}),
		{
			name: 'settings-storage',
		},
	),
);
