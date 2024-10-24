import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'mathis ─ developer';
	const description = "Hey 👋 I'm Mathis, a developer";

	return {
		title,
		description,
		canonical: `https://mathisdev.pro/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'mathis',
			url: `hhttps://mathisdev.pro/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://mathisdev.pro/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@mathisdev7',
			site: '@mathisdev7',
		},
		...props,
	};
}
