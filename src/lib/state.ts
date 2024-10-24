'use client';
import { State, useState } from '@hookstate/core';
import { Persistence } from '@hookstate/persistence';
import { useEffect } from 'react';
import { useMedia } from 'react-use';

import type { Settings } from '~/types';

// Note: Directly using `State` to manage the state.
const DEFAULT_STATE: Settings = {
	animations: null,
	sound: true,
};

export const STATE_KEY = 'settings';

export function usePersistantState(): State<Settings> {
	const noMotionPreference = useMedia('(prefers-reduced-motion: no-preference)', true);

	const persistance = Persistence(STATE_KEY);
	const state = useState<Settings>(DEFAULT_STATE);

	useEffect(() => {
		state.attach(persistance);

		if (state.get().animations === null)
			state.set((state) => ({
				...state,
				animations: noMotionPreference,
			}));
	}, [noMotionPreference, persistance, state]);

	return state;
}
