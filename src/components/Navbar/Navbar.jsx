import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');
	const [isScrolled, setIsScrolled] = useState(false);

	// Scroll efeito
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Clique no menu => scroll para secção
	const handleMenuItemClick = sectionId => {
		setActiveSection(sectionId);
		setIsOpen(false);

		const section = document.getElementById(sectionId);
		if (section) {
			if (sectionId === 'about') {
				// Aplica offset personalizado só para a secção "About"
				const yOffset = -208; // ajusta conforme a altura da navbar
				const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
				window.scrollTo({ top: y, behavior: 'smooth' });
			} else {
				// Para outras secções, scroll normal
				section.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

	const menuItems = [
		{ id: 'about', label: 'Sobre' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'education', label: 'Educação' },
		{ id: 'work', label: 'Projetos' },
		{ id: 'experience', label: 'Experiência' },
		{ id: 'contact', label: 'Contacto' },
	];

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition duration-300 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] xl:px-[20vw] ${
				isScrolled ? 'bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md' : 'bg-transparent'
			}`}
		>
			<div className='text-white py-5 flex justify-between items-center'>
				{/* Logotipo */}
				<div className='text-lg font-semibold cursor-pointer'>
					<span className='text-[#4571ec]'>&lt;</span>
					<span className='text-white'>Luís</span>
					<span className='text-[#4571ec]'>/</span>
					<span className='text-white'>Oliveira</span>
					<span className='text-[#4571ec]'>&gt;</span>
				</div>

				{/* Menu Desktop */}
				<ul className='hidden md:flex space-x-6 lg:space-x-8 text-gray-300'>
					{menuItems.map(item => (
						<li key={item.id} className={`cursor-pointer hover:text-[#4571ec] ${activeSection === item.id ? 'text-[#4571ec]' : ''}`}>
							<button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
						</li>
					))}
				</ul>

				{/* Icons Redes Sociais */}
				<div className='hidden md:flex space-x-3 lg:space-x-4'>
					<a href='https://github.com/luisolivei' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#898a8b]'>
						<FaGithub size={24} />
					</a>
					<a href='https://www.linkedin.com/in/lu%C3%ADs-oliveira-a79424304/' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#4571ec]'>
						<FaLinkedin size={24} />
					</a>
				</div>

				{/* Icon Menu Mobile */}
				<div className='md:hidden'>
					{isOpen ? (
						<FiX className='text-3xl text-[#4571ec] cursor-pointer' onClick={() => setIsOpen(false)} />
					) : (
						<FiMenu className='text-3xl text-[#4571ec] cursor-pointer' onClick={() => setIsOpen(true)} />
					)}
				</div>
			</div>

			{/* Menu Telefone */}
			{isOpen && (
				<div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[85%] bg-[#4b3c86f3] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden'>
					<ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
						{menuItems.map(item => (
							<li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id ? 'text-[#4571ec]' : ''}`}>
								<button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
							</li>
						))}
						<div className='flex space-x-4'>
							<a href='https://github.com/luisolivei' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-white'>
								<FaGithub size={24} />
							</a>
							<a href='https://www.linkedin.com/in/lu%C3%ADs-oliveira-a79424304/' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-white'>
								<FaLinkedin size={24} />
							</a>
						</div>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
