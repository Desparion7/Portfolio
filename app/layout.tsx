'use client';
import Header from '@/components/header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import { Theme, useThemeStore } from '@/context/theme-context';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Mateusz Woś | Portfolio',
	description: 'Mateusz Woś portfolio page',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
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
		<html lang='en' className='!scroll-smooth'>
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative  pt-28 sm:pt-36
				dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
			>
				<div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
				<div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
				<Header />
				{children}
				<Toaster position='top-right' />
				<Footer />
				<ThemeSwitch />
			</body>
		</html>
	);
}
