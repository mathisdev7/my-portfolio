'use client';
import { useTheme } from 'next-themes';
import { ColorPicker } from '~/components/ColorPicker.component';
import { useSettingsStore } from '~/lib/zustand';
import { ColorTheme, NavigationItemType, Theme } from '~/types';

import type { NavigationItem, NavigationItems } from '~/types';

const staticMenuItems: Array<Array<NavigationItem>> = [
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:home',
			text: 'Home',
			href: '/',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:copy',
			text: 'Projects',
			href: '/projects',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:clock',
			text: 'Timeline',
			href: '/timeline',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:code',
			text: 'Skills',
			href: '/skills',
		},
	],
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:linkedin',
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/mathis-zeghouani-11869a2a3/',
			external: true,
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:github',
			text: 'GitHub',
			href: 'https://github.com/mathisdev7',
			external: true,
		},
	],
];

export function useNavigation(): {
	menu: NavigationItems;
	settings: NavigationItems;
} {
	const { theme, setTheme } = useTheme();
	const { animations, sound, colorTheme, toggleAnimations, toggleSound, setColorTheme } = useSettingsStore();

	const menuItems: NavigationItems = [...staticMenuItems];

	const settingsItems: NavigationItems = [
		[
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:image',
				endIcon: animations ? 'feather:check-circle' : 'feather:circle',
				text: `Animations`,
				onClick: toggleAnimations,
			},
			{
				type: NavigationItemType.ACTION,
				icon: sound ? 'feather:volume-2' : 'feather:volume-x',
				endIcon: sound ? 'feather:check-circle' : 'feather:circle',
				text: `Sounds`,
				onClick: toggleSound,
			},
			{
				type: NavigationItemType.DIVIDER,
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:monitor',
				endIcon: theme === Theme.SYSTEM ? 'feather:check-circle' : undefined,
				text: 'System Theme',
				onClick: () => setTheme(Theme.SYSTEM),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:sun',
				endIcon: theme === Theme.LIGHT ? 'feather:check-circle' : undefined,
				text: 'Light Theme',
				onClick: () => setTheme(Theme.LIGHT),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:moon',
				endIcon: theme === Theme.DARK ? 'feather:check-circle' : undefined,
				text: 'Dark Theme',
				onClick: () => setTheme(Theme.DARK),
			},
			{
				type: NavigationItemType.DIVIDER,
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:circle',
				text: 'Red Theme',
				endIcon: colorTheme === ColorTheme.RED ? 'feather:check-circle' : undefined,
				onClick: () => setColorTheme(ColorTheme.RED),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:circle',
				text: 'Blue Theme',
				endIcon: colorTheme === ColorTheme.BLUE ? 'feather:check-circle' : undefined,
				onClick: () => setColorTheme(ColorTheme.BLUE),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:circle',
				text: 'Green Theme',
				endIcon: colorTheme === ColorTheme.GREEN ? 'feather:check-circle' : undefined,
				onClick: () => setColorTheme(ColorTheme.GREEN),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:circle',
				text: 'Purple Theme',
				endIcon: colorTheme === ColorTheme.PURPLE ? 'feather:check-circle' : undefined,
				onClick: () => setColorTheme(ColorTheme.PURPLE),
			},
			{
				type: NavigationItemType.DIVIDER,
			},
			{
				type: NavigationItemType.CUSTOM,
				component: (
					<div className="px-4 py-3">
						<div className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400 mb-2">
							Custom Color
						</div>
						<ColorPicker />
					</div>
				),
			},
		],
	];

	return {
		menu: menuItems,
		settings: settingsItems,
	};
}
