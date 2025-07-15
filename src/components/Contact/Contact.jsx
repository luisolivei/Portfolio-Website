import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();
	// eslint-disable-next-line no-unused-vars
	const [isSent, setIsSent] = useState(false);

	const sendEmail = e => {
		e.preventDefault();

		emailjs.sendForm('service_p29m7bn', 'template_kt4uoxc', form.current, 'U6lxgko8QsS2Btrit').then(
			() => {
				setIsSent(true);
				form.current.reset(); // Apaga o formulário após o envio
				toast.success('Message sent successfully! ✅', {
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					theme: 'dark',
				});
			},
			error => {
				console.error('Error sending message:', error);
				toast.error('Failed to send message. Please try again.', {
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					theme: 'dark',
				});
			},
		);
	};

	return (
		<section id='contact' className='flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-contact-gradient'>
			<ToastContainer />
			{/* Titulo */}
			<div className='text-center mb-16'>
				<h2 className='text-4xl font-bold text-white'>CONTACTO</h2>
				<div className='w-32 h-1 bg-[#4571ec] mx-auto mt-4'></div>
				<p className='text-gray-400 mt-4 text-lg font-semibold'>Sinta-se à vontade para entrar em contacto para qualquer oportunidade ou questão.</p>
			</div>
			{/* Formulário */}
			<div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
				<h3 className='text-xl font-semibold text-white text-center'>
					Contacte-me <span className='ml-1'>🚀</span>
				</h3>

				<form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
					<input
						type='email'
						name='user_email'
						placeholder='Email'
						required
						className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
					/>
					<input type='text' name='user_name' placeholder='Nome' required className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />
					<input
						type='text'
						name='subject'
						placeholder='Assunto'
						required
						className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
					/>
					<textarea
						name='message'
						placeholder='Mensagem'
						rows='4'
						required
						className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
					/>

					{/* Botão de enviar */}
					<button type='submit' className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'>
						Enviar
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
