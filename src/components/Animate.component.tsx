'use client';
import { isCrawlerUserAgent } from 'is-web-crawler';
import { animate, spring } from 'motion';
import { useEffect, useRef } from 'react';
import { useMedia } from 'react-use';

import { useSettingsStore } from '~/lib/zustand';

import type { AnimationOptionsWithOverrides, MotionKeyframesDefinition } from '@motionone/dom';
import type { ComponentPropsWithRef, ElementType } from 'react';

type AnimateProps<T extends ElementType> = {
	animation: MotionKeyframesDefinition;
	as?: T;
	enabled?: boolean;
	transition?: AnimationOptionsWithOverrides;
} & Omit<ComponentPropsWithRef<T>, 'animation' | 'as' | 'transition'>;

const defaultTransition: AnimationOptionsWithOverrides = {
	delay: 0,
	duration: 1500,
	easing: spring(),
	repeat: 0,
};

export function Animate<T extends ElementType>({
	animation,
	as: Component = 'div' as T,
	children,
	enabled = true,
	transition,
	...rest
}: AnimateProps<T>): JSX.Element {
	const { animations } = useSettingsStore();
	const prefersReducedMotion = useMedia('(prefers-reduced-motion)', true);

	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (
			ref.current &&
			enabled &&
			animations &&
			!(prefersReducedMotion || isCrawlerUserAgent())
		) {
			animate(ref.current, animation, {
				...defaultTransition,
				...transition,
			});
		}
	}, [animation, animations, enabled, prefersReducedMotion, transition]);

	return (
		// @ts-expect-error Valid component
		<Component
			ref={ref}
			style={{ opacity: (enabled && animations && !prefersReducedMotion && !isCrawlerUserAgent()) ? 0 : 1 }}
			{...rest}>
			{children}
		</Component>
	);
}
