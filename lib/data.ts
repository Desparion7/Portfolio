import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaTruck } from 'react-icons/fa';
import wickerlandImg from '@/public/wickerland.png';
import carentImg from '@/public/carent.png';
import gymAppImg from '@/public/gymapp.png';

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
		title: 'Wickerland',
		description:
			'Ecommerce written by myself use RTK Query, router etc. MERN.The shop have a lot functionally. Backend on NestJS.',
		tags: ['React', 'RTK Query', 'MongoDB', 'NestJS', 'TypeScript'],
		imageUrl: wickerlandImg,
	},
	{
		title: 'Carent',
		description:
			'Car rental company website with options to make reservation. Simple animation made in Blender',
		tags: ['React', 'RTK Query', 'MongoDB', 'NestJS', 'TypeScript', 'SCSS'],
		imageUrl: carentImg,
	},
	{
		title: 'Gym App',
		description:
			'The gym workout management project is designed to help you manage your workouts effectively. You can use the application to plan and organize your gym routines. ',
		tags: ['React', 'RTK Query', 'MongoDB', 'Node.js', 'TypeScript'],
		imageUrl: gymAppImg,
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
	'NestJS',
	'Git',
	'Tailwind',
	'MongoDB',
	'Redux',
	'Express',
	'Framer Motion',
] as const;
