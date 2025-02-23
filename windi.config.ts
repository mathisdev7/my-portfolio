import defaultTheme from 'windicss/defaultTheme';
import { defineConfig } from 'windicss/helpers';

import { colors } from './src/lib/colors';

export default defineConfig({
	darkMode: 'class',
	extract: {
		include: ['**/*.{jsx,tsx,css}'],
		exclude: ['node_modules', '.git', '.next'],
	},
	plugins: [
		require('windicss/plugin/line-clamp'),
		require('windicss/plugin/typography'),
	],
	shortcuts: {
		'default-focus':
			'focus:(outline-none ring-4 ring-offset-4 dark:ring-offset-gray-900 ring-primary-500)',
		'default-transition': 'transition ease-in-out duration-300',
	},
	theme: {
		extend: {
			animation: {
				wave: 'wave 2.25s ease-in-out infinite',
				fadeIn: 'fadeIn 0.5s ease-in forwards',
			},
			backgroundOpacity: {
				15: '0.15',
			},
			colors: {
				...colors,
				primary: {
					50: 'var(--primary-50)',
					100: 'var(--primary-100)',
					200: 'var(--primary-200)',
					300: 'var(--primary-300)',
					400: 'var(--primary-400)',
					500: 'var(--primary-500)',
					600: 'var(--primary-600)',
					700: 'var(--primary-700)',
					800: 'var(--primary-800)',
					900: 'var(--primary-900)',
				}
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				wave: {
					'0%': { transform: 'rotate(0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10deg)' },
					'60%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			saturate: {
				DEFAULT: {
					200: 'saturate(2)',
				},
			},
			transformOrigin: {
				70: '70% 70%',
			},
			typography: {
				DEFAULT: {
					css: {
						img: {
							maxWidth: '100%',
						},
					},
				},
			},
		},
		typography: {
			DEFAULT: {
				css: {
					pre: {
						marginTop: '0 !important',
						borderTopLeftRadius: '0 !important',
						borderTopRightRadius: '0 !important',
					},
				},
			},
		},
	},
});
