import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionName } from './types';
import { useSectionStore } from '@/context/active-section-context';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
	const changeActiveSection = useSectionStore(
		(state) => state.changeActiveSection
	);
	const timeOfLastClick = useSectionStore((state) => state.timeOfLastClick);
	
	const { ref, inView } = useInView({
		threshold,
	});
	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			changeActiveSection(sectionName);
		}
	}, [inView, changeActiveSection, timeOfLastClick, sectionName]);
	return { ref };
}
