'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

const Contact = () => {
	const { ref } = useSectionInView('Contact');

	return (
		<motion.section
			ref={ref}
			id='contact'
			className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Contact Me</SectionHeading>
			<p className='text-gray-700 -mt-6'>
				Please contact me directly at{' '}
				<a href='mailto:wosmateusz2@gmail.com' className='underline'>
					wosmateusz2@gmail.com
				</a>{' '}
				or through this form
			</p>
			<form
				className='mt-10 flex flex-col'
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success('Email sent successfully');
				}}
			>
				<input
					className='h-14 px-4 rounded-lg borderBlack'
					name='senderEmail'
					type='email'
					placeholder='Your email'
					required
					maxLength={500}
				/>
				<textarea
					className='h-52 my-3 rounded-lg borderBlack p-4'
					name='message'
					placeholder='Your message'
					required
					maxLength={5000}
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
};

export default Contact;
