'use client';
import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

const Projects = () => {
	const { setActiveSection } = useActiveSectionContext();
	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView) {
			setActiveSection('Projects');
		}
	}, [inView, setActiveSection]);
	return (
		<section ref={ref} id='projects' className='scroll-mt-28'>
			<SectionHeading>My projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

export default Projects;
