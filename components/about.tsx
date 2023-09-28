'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
	const { ref } = useSectionInView('About');

	return (
		<motion.section
			ref={ref}
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'
		>
			<SectionHeading>About me</SectionHeading>
			<p className='mb-3'>
				Many hours spent on learning and projects allowed me to gain{' '}
				<span className='font-medium'>good knowledge</span> in the field
				of{' '}
				<span className='font-medium'>
					Java Script, React (Redux, Router), CSS, HTML.
				</span>{' '}
				I am constantly developing and expanding my experience. I focus
				mainly on the <span className='italic'>frontend</span> , but I
				can prepare a basic backend in{' '}
				<span className='underline'>Node.js or NestJS</span> for
				database integration and preparation of a more advanced project.
				I would like to take my first job to be{' '}
				<span className='font-medium'>
					able to fully engage in programming.
				</span>
			</p>
			<p></p>
		</motion.section>
	);
};

export default About;
