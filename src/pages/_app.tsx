import splitbee from '@splitbee/web';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffectOnce, useEvent } from 'react-use';

import 'inter-ui/inter.css';
import 'nprogress/nprogress.css';
import 'windi.css';

import { colorThemes, useClick, useSettingsStore } from '~/lib';
import { ColorTheme, Theme } from '~/types';

NProgress.configure({
	easing: 'ease',
	minimum: 0.3,
	showSpinner: false,
	speed: 800,
});

export { reportWebVitals } from 'next-axiom';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	const [play] = useClick();
	const { colorTheme = ColorTheme.RED, customColor } = useSettingsStore();

	useEvent('mousedown', () => play());
	useEvent('mouseup', () => play());

	useEffectOnce(() => {
		router.events.on('routeChangeStart', () => NProgress.start());
		router.events.on('routeChangeComplete', () => NProgress.done());
		router.events.on('routeChangeError', () => NProgress.done());

		if (process.env.NODE_ENV === 'production')
			splitbee.init({
				disableCookie: true,
			});
	});

	const getColorValues = () => {
		if (colorTheme === ColorTheme.CUSTOM) {
			const { r, g, b } = customColor.rgb;
			const adjustBrightness = (factor: number) => ({
				r: Math.min(255, Math.round(r * factor)),
				g: Math.min(255, Math.round(g * factor)),
				b: Math.min(255, Math.round(b * factor))
			});

			const toHex = (rgb: { r: number, g: number, b: number }) =>
				'#' + [rgb.r, rgb.g, rgb.b]
					.map(x => x.toString(16).padStart(2, '0'))
					.join('');

			return {
				50: toHex(adjustBrightness(1.3)),
				100: toHex(adjustBrightness(1.2)),
				200: toHex(adjustBrightness(1.1)),
				300: toHex(adjustBrightness(1.05)),
				400: toHex(adjustBrightness(1.025)),
				500: customColor.hex,
				600: toHex(adjustBrightness(0.9)),
				700: toHex(adjustBrightness(0.8)),
				800: toHex(adjustBrightness(0.7)),
				900: toHex(adjustBrightness(0.6))
			};
		}

		return colorThemes[colorTheme];
	};

	const colors = getColorValues();

	return (
		<ThemeProvider attribute="class" defaultTheme={Theme.SYSTEM} themes={Object.values(Theme)}>
			<Analytics />
			<Component {...pageProps} />
			<style jsx global>{`
				:root {
					--primary-50: ${colors[50]};
					--primary-100: ${colors[100]};
					--primary-200: ${colors[200]};
					--primary-300: ${colors[300]};
					--primary-400: ${colors[400]};
					--primary-500: ${colors[500]};
					--primary-600: ${colors[600]};
					--primary-700: ${colors[700]};
					--primary-800: ${colors[800]};
					--primary-900: ${colors[900]};
				}
				#nprogress .bar {
					height: 0.25rem;
					background-color: var(--primary-500);
				}
			`}</style>
		</ThemeProvider>
	);
}
