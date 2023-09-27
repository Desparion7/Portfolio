'use client';
import { ReactNode, useState, createContext, useContext } from 'react';
import { links } from '@/lib/data';

type SectionName = (typeof links)[number]['name'];
type ActiveSectionContextProviderProps = {
	children: ReactNode;
};
type ActiveSectionContextType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
	null
);

const ActiveSectionContextProvider = ({
	children,
}: ActiveSectionContextProviderProps) => {
	const [activeSection, setActiveSection] = useState<SectionName>('Home');

	return (
		<ActiveSectionContext.Provider
			value={{ activeSection, setActiveSection }}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
};
export const useActiveSectionContext = (): ActiveSectionContextType => {
	const context = useContext(ActiveSectionContext);
	if (!context) {
		throw new Error(
			'useActiveSectionContext must be use in ActiveSectionContextProvider'
		);
	}
	return context;
};

export default ActiveSectionContextProvider;
