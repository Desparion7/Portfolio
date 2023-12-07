'use client';
import { create } from 'zustand';

type StateSctions = {
	activeSection: string;
	timeOfLastClick: number;
};
type ActiveSectionStoreActions = {
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
