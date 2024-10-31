'use client';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '~/components';
import { useSeoProps, useSettingsStore } from '~/lib';

import type { WithChildren, WithProps } from '~/types';

const Background = dynamic(() =>
	import('~/components/Background/Standard.component').then(({ Standard }) => Standard),
);

interface DefaultLayoutProps extends WithChildren {
	background?: boolean;
	seo?: Partial<WithProps<typeof NextSeo>>;
}

export function DefaultLayout({
	background: overrideBackground,
	children,
	seo: customSeo,
}: DefaultLayoutProps): JSX.Element {
	const { animations } = useSettingsStore();
	const showBackground = overrideBackground ?? animations;

	const seo = useSeoProps(customSeo);

	return (
		<>
			<NextSeo {...seo} />
			<Navbar.Standard />
			<Analytics />
			<main className="flex flex-col justify-center px-8">
				{showBackground && <Background />}
				{children}
			</main>
		</>
	);
}
