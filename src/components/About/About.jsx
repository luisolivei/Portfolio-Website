import Tilt from 'react-parallax-tilt';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/pf.png';

const About = () => {
	return (
		<section id='about' className='py-4 px-4 sm:px-8 md:px-[7vw] lg:px-[12vw] xl:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
			<div className='flex flex-col-reverse md:flex-row justify-between items-center'>
				<div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>Olá, sou o </h1>
					<h2 className='text-4xl sm:text-5xl md:text-[2.75rem] lg:text-6xl font-bold text-white mb-4 leading-tight'>Luís Oliveira</h2>
					<h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
						<span className='text-white'>Sou </span>
						<ReactTypingEffect
							text={['Front-end Developer', 'Web/App Developer', 'Fullstack Developer', 'Coder']}
							speed={100}
							eraseSpeed={50}
							typingDelay={500}
							eraseDelay={2000}
							cursorRenderer={cursor => <span className='text-[#8245ec]'>{cursor}</span>}
						/>
					</h3>
					<p className='text-base sm:text-[1.1rem] md:text-[1.15rem] text-gray-400 mb-10 mt-8 leading-relaxed'>
						Sou um programador full-stack com dois anos de experiência no desenvolvimento de aplicações web escaláveis. Possuo competências sólidas tanto em desenvolvimento front-end como back-end,
						com especialização em frameworks JavaScript como React e Node.js. Tenho um forte interesse em criar soluções digitais escaláveis, responsivas, seguras e alinhadas com as melhores práticas
						de desenvolvimento.
					</p>
					<a
						href='/CV-LuísOliveira2025.pdf'
						download
						className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
						style={{
							background: 'linear-gradient(90deg, #4571ec, #a855f7)',
							boxShadow: '0 0 2px #4571ec, 0 0 2px #4571ec, 0 0 40px #4571ec',
						}}
					>
						DOWNLOAD CV
					</a>
				</div>
				<div className='md:w-1/2 flex justify-center md:justify-end -mt-6 md:-mt-12'>
					<Tilt
						className='w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-[#4571ec] rounded-full'
						tiltMaxAngleX={20}
						tiltMaxAngleY={20}
						perspective={1000}
						scale={1.05}
						transitionSpeed={1000}
						gyroscope={true}
					>
						<img src={profileImage} alt='Luís Oliveira' className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(69,141,236,0.5)]' />
					</Tilt>
				</div>
			</div>
		</section>
	);
};
export default About;
