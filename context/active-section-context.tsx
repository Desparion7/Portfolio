'use client';
import type { SectionName } from '@/lib/types';
import { ReactNode, useState, createContext, useContext } from 'react';



type ActiveSectionContextProviderProps = {
	children: ReactNode;
};
type ActiveSectionContextType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
	timeOfLastClick: number;
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
	null
);

const ActiveSectionContextProvider = ({
	children,
}: ActiveSectionContextProviderProps) => {
	const [activeSection, setActiveSection] = useState<SectionName>('Home');
	const [timeOfLastClick, setTimeOfLastClick] = useState(0);

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastClick,
			}}
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
