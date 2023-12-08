'use client';
import { create } from 'zustand';

export type Theme = 'light' | 'dark';

type StateTheme = {
	theme: Theme;
};
type ThemeStoreActions = {
	setThemeSection: (newTheme: Theme) => void;
	toggleThemeSection: () => void;
};

export const useThemeStore = create<StateTheme & ThemeStoreActions>()(
	(set) => ({
		theme: 'light',
		setThemeSection: (newTheme) => set({ theme: newTheme }),
		toggleThemeSection: () =>
			set((state) => {
				if (state.theme === 'light') {
					window.localStorage.setItem('theme', 'dark');
					document.documentElement.classList.add('dark');
					return {
						theme: 'dark',
					};
				} else {
					window.localStorage.setItem('theme', 'light');
					document.documentElement.classList.remove('dark');
					return {
						theme: 'light',
					};
				}
			}),
	})
);
