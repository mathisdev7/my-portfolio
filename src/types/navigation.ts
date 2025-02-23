import type { ReactNode } from 'react';

export enum NavigationItemType {
	ACTION = 'action',
	DIVIDER = 'divider',
	LINK = 'link',
	CUSTOM = 'custom',
}

export interface NavigationItemBase {
	type: NavigationItemType;
}

export interface NavigationItemAction extends NavigationItemBase {
	type: NavigationItemType.ACTION;
	icon: string | ReactNode;
	text: string;
	endIcon?: string;
	onClick: () => void;
}

export interface NavigationItemLink extends NavigationItemBase {
	type: NavigationItemType.LINK;
	external?: boolean;
	href: string;
	icon: string | ReactNode;
	text: string;
}

export interface NavigationItemDivider extends NavigationItemBase {
	type: NavigationItemType.DIVIDER;
}

export interface NavigationItemCustom extends NavigationItemBase {
	type: NavigationItemType.CUSTOM;
	component: ReactNode;
}

export type NavigationItem =
	| NavigationItemAction
	| NavigationItemLink
	| NavigationItemDivider
	| NavigationItemCustom;

export type NavigationItems = Array<Array<NavigationItem>>;
