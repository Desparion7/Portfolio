'use client';
import { create } from 'zustand';

export type StateSctions = {
	activeSection: string;
	timeOfLastClick: number;
};
export type ActiveSectionStoreActions = {
	changeActiveSection: (section: string) => void;
	changeTimeOfLastClick: (time: number) => void;
};
export const useSectionStore = create<
	StateSctions & ActiveSectionStoreActions
>()((set) => ({
	activeSection: 'Home',
	timeOfLastClick: 0,
	changeActiveSection: (sectionName) => set({ activeSection: sectionName }),
	changeTimeOfLastClick: (time) => set({ timeOfLastClick: time }),
}));
