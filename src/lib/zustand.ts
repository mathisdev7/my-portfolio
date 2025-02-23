import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ColorTheme, CustomColor } from '~/types';

interface Settings {
	animations: boolean | null;
	sound: boolean;
	colorTheme: ColorTheme;
	customColor: CustomColor;
	toggleSound: () => void;
	toggleAnimations: () => void;
	setColorTheme: (theme: ColorTheme) => void;
	setCustomColor: (color: CustomColor) => void;
}

export const useSettingsStore = create<Settings>()(
	persist(
		(set) => ({
			animations: null,
			sound: true,
			colorTheme: ColorTheme.RED,
			customColor: {
				hex: '#dc2626',
				rgb: { r: 220, g: 38, b: 38 }
			},
			toggleSound: (): void => set((state) => ({ sound: !state.sound })),
			toggleAnimations: (): void => set((state) => ({ animations: !state.animations })),
			setColorTheme: (theme: ColorTheme): void => set({ colorTheme: theme }),
			setCustomColor: (color: CustomColor): void => set({ customColor: color, colorTheme: ColorTheme.CUSTOM }),
		}),
		{
			name: 'settings-storage',
		},
	),
);
