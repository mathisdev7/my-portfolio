import { useState } from 'react';
import { Layout } from '~/layouts';

export default function ContactPage(): JSX.Element {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, message }),
		});
		if (!response.ok) {
			setSubmitted(false);
			alert('Failed to send message');
			console.error('Failed to send message');
			return;
		}
		alert('Message sent!');
		setSubmitted(true);
	};

	return (
		<Layout.Default seo={{ title: 'mathis ─ contact' }}>
			<div className="flex flex-grow min-h-screen pt-16 pb-12">
				<div className="flex-grow flex flex-col justify-center max-w-sm sm:max-w-2xl w-full mx-auto px-0 sm:px-16">
					<h1 className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8">
						Get in touch with me
					</h1>
					{submitted ? (
						<p className="text-lg text-gray-500 dark:text-gray-300 text-center">
							Thank you for your message!
						</p>
					) : (
						<form onSubmit={handleSubmit} className="flex flex-col space-y-4 z-50">
							<input
								type="text"
								placeholder="Your Name"
								value={name}
								onChange={(e): void => setName(e.target.value)}
								required
								className="px-4 py-2 border dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
							/>
							<input
								type="email"
								placeholder="Your Email"
								value={email}
								onChange={(e): void => setEmail(e.target.value)}
								required
								className="px-4 py-2 border dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
							/>
							<textarea
								placeholder="Your Message"
								value={message}
								onChange={(e): void => setMessage(e.target.value)}
								required
								className="px-4 py-2 border dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 h-32"
							/>
							<button
								type="submit"
								className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
								Send Message
							</button>
						</form>
					)}
				</div>
			</div>
		</Layout.Default>
	);
}
