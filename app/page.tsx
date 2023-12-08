'use client';
import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import { useEffect } from 'react';
import { Theme, useThemeStore } from '@/context/theme-context';

export default function Home() {
	const setThemeSection = useThemeStore((state) => state.setThemeSection);
	const localTheme = window.localStorage.getItem('theme') as Theme;
	useEffect(() => {
		if (localTheme) {
			setThemeSection(localTheme);
			if (localTheme === 'dark')
				document.documentElement.classList.add('dark');
		} else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
			setThemeSection('dark');
			document.documentElement.classList.add('dark');
		}
	}, [setThemeSection, localTheme]);
	return (
		<main className='flex flex-col items-center px-4'>
			<Intro />
			<SectionDivider />
			<About />
			<Projects />
			<Skills />
			<Experience />
			<Contact />
		</main>
	);
}
