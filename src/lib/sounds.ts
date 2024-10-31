'use client';
import { useSound } from 'use-sound';
import { useSettingsStore } from './zustand';

import type { ReturnedValue } from 'use-sound/dist/types';

export function useClick(): ReturnedValue | [() => void, null] {
	const { sound } = useSettingsStore();
	const result = useSound('/sounds/click.ogg', {
		volume: 0.05,
	});

	if (!sound) {
		return [
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			(): void => {},
			null,
		];
	}

	return result;
}
