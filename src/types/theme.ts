export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system',
}

export enum ColorTheme {
	RED = 'red',
	BLUE = 'blue',
	GREEN = 'green',
	PURPLE = 'purple',
	CUSTOM = 'custom',
}

export interface CustomColor {
	hex: string;
	rgb: {
		r: number;
		g: number;
		b: number;
	};
}
