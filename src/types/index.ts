export * from './common';
export * from './events';
export * from './list';
export * from './navigation';
export * from './projects';
export * from './state';
export * from './theme';
export * from './timeline';

export interface Project {
	description?: string;
	icon?: string;
	image?: string;
	name: string;
	homepage?: string;
	color?: string;
	url: string;
	template: boolean;
	updatedAt?: string;
	post?: string;
}
