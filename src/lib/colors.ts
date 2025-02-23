import defaultTheme from 'windicss/defaultTheme';

export const colorThemes = {
	blue: {
		50: '#32a4ff',
		100: '#289aff',
		200: '#1e90ff',
		300: '#1486ff',
		400: '#0a7cff',
		500: '#0072ff',
		600: '#0068f5',
		700: '#005eeb',
		800: '#0054e1',
		900: '#004ad7',
	},
	green: {
		50: '#4ade80',
		100: '#22c55e',
		200: '#16a34a',
		300: '#15803d',
		400: '#166534',
		500: '#22c55e',
		600: '#16a34a',
		700: '#15803d',
		800: '#166534',
		900: '#14532d',
	},
	purple: {
		50: '#a855f7',
		100: '#9333ea',
		200: '#7e22ce',
		300: '#6b21a8',
		400: '#581c87',
		500: '#9333ea',
		600: '#7e22ce',
		700: '#6b21a8',
		800: '#581c87',
		900: '#3b0764',
	},
	red: {
		50: '#ef4444',
		100: '#dc2626',
		200: '#b91c1c',
		300: '#991b1b',
		400: '#7f1d1d',
		500: '#dc2626',
		600: '#b91c1c',
		700: '#991b1b',
		800: '#7f1d1d',
		900: '#450a0a',
	},
};

export const colors: Record<string, Record<number, string>> = {
	...defaultTheme.colors,
	gray: {
		50: '#f9fafb',
		100: '#eaeaeb',
		200: '#cacbcd',
		300: '#a7a9ac',
		400: '#696c71',
		500: '#282d34',
		600: '#24292f',
		700: '#181b20',
		800: '#121518',
		900: '#0c0e10',
	},
	primary: colorThemes.blue
};
