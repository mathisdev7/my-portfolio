import type { WithChildren } from '~/types';

interface ContainerProps extends WithChildren {}

export function Container({ children }: ContainerProps): JSX.Element {
	return (
		<ul
			className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr"
			role="list"
		>
			{children}
		</ul>
	);
}
