import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact, FaTruck } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';


export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Company Owner',
		location: 'Rzeszów, Poland',
		description:
			'Running an online store, including a comprehensive offer preparation process, order fulfillment and after-sales service.',
		icon: React.createElement(CgWorkAlt),
		date: '2016-present',
	},
	{
		title: 'Company Owner',
		location: '182-184 High Street North London United Kingdom E6 2JA',
		description:
			'Running an online store, including a comprehensive offer preparation process, order fulfillment and after-sales service.',
		icon: React.createElement(CgWorkAlt),
		date: '2019 - 2021',
	},
	{
		title: 'Company Owner TROPIK S.C',
		location: 'Rzeszów, Poland',
		description:
			'Management and control of drivers work. Preparing documentation for completed orders. Cooperation with external forwarding.',
		icon: React.createElement(FaTruck),
		date: '2021 - present',
	},
] as const;

export const projectsData = [
	{
		title: 'CorpComment',
		description:
			'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
		tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
		imageUrl: corpcommentImg,
	},
	{
		title: 'rmtDev',
		description:
			'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
		tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
		imageUrl: rmtdevImg,
	},
	{
		title: 'Word Analytics',
		description:
			'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	'Prisma',
	'MongoDB',
	'Redux',
	'GraphQL',
	'Apollo',
	'Express',
	'PostgreSQL',
	'Python',
	'Django',
	'Framer Motion',
] as const;
