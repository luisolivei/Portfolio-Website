// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's

// Education Section Logo's
import flaglogo from './assets/education_logo/flag.png';
import iefplogo from './assets/education_logo/Iefp_logo.png';

// Project Section Logo's
import ptnewsLogo from './assets/work_logo/PTNews.png';
import medicalclinic from './assets/work_logo/Medicclinic.png';
import gokuInvaders from './assets/work_logo/GokuInvaders.png';

export const SkillsInfo = [
	{
		title: 'Frontend',
		skills: [
			{ name: 'HTML', logo: htmlLogo },
			{ name: 'CSS', logo: cssLogo },
			{ name: 'SASS', logo: sassLogo },
			{ name: 'JavaScript', logo: javascriptLogo },
			{ name: 'React JS', logo: reactjsLogo },
			{ name: 'Redux', logo: reduxLogo },
			{ name: 'Tailwind CSS', logo: tailwindcssLogo },
			{ name: 'Material UI', logo: materialuiLogo },
			{ name: 'Bootstrap', logo: bootstrapLogo },
		],
	},
	{
		title: 'Backend',
		skills: [
			{ name: 'Node JS', logo: nodejsLogo },
			{ name: 'Express JS', logo: expressjsLogo },
			{ name: 'MySQL', logo: mysqlLogo },
			{ name: 'MongoDB', logo: mongodbLogo },
			{ name: 'Firebase', logo: firebaseLogo },
		],
	},
	{
		title: 'Linguagens',
		skills: [
			{ name: 'C', logo: cLogo },
			{ name: 'C++', logo: cppLogo },
			{ name: 'Python', logo: pythonLogo },
			{ name: 'JavaScript', logo: javascriptLogo },
			{ name: 'TypeScript', logo: typescriptLogo },
		],
	},
	{
		title: 'Ferramentas',
		skills: [
			{ name: 'Git', logo: gitLogo },
			{ name: 'GitHub', logo: githubLogo },
			{ name: 'VS Code', logo: vscodeLogo },
			{ name: 'Postman', logo: postmanLogo },
			{ name: 'Vercel', logo: vercelLogo },
			{ name: 'Figma', logo: figmaLogo },
		],
	},
];

export const experiences = [];

export const education = [
	{
		id: 0,
		img: iefplogo,
		school: 'CYBERSEGURANÇA - IEFP',
		date: 'Janeiro 2025 - Junho 2025 300h HORAS',
		grade: 'Passed',
		desc: 'Formação mais teórica com foco em hardware, redes de computadores, legislação, segurança e privacidade da informação. Segurança no ciclo de vida desenvolvimento de software e fundamentos de cibersegurança. Aprofundei temas como programação aplicada à cibersegurança, análise de vulnerabilidades (ex.: SQL injection, tipos de malware) e criação/leitura de logs com Ruby. Incluiu também uma iniciação ao Kali Linux. O curso foi complementado com formações da NAU e da Cisco, bem como vários trabalhos de pesquisa.',
	},
	{
		id: 1,
		img: iefplogo,
		school: 'LINGUAGENS DE PROGRAMAÇÃO DE PYTHON - IEFP',
		date: 'Junho 2024 - Janeiro 2025 350h HORAS',
		grade: 'Passed',
		desc: 'No curso de Python, adquiri competências em manipulação de ficheiros (incluindo CSV), uso de bibliotecas como pandas, numpy, matplotlib, requests e princípios Pythonic (DRY, KISS, YAGNI). Trabalhei com DataFrames, SQL, programação orientada a objetos, Flask e práticas de desenvolvimento seguro. Utilizei o Anaconda para gestão de ambientes. O curso incluiu ainda algoritmia, C/C++ onde fiz um jogo de Tetris, e como projeto final um jogo em pygame.',
	},
	{
		id: 2,
		img: flaglogo,
		school: 'Academia FLAG Professional FULL STACK WEB DEVELOPMENT',
		date: 'FEVEREIRO 2023 - MARÇO 2024 366 HORAS',
		grade: '17/20',
		desc: `Front-End:
Introdução à programação, metodologias ágeis para gestão de projetos (Scrum e Agile), e fundamentos de UX/UI.
HTML5, CSS3 e Bootstrap.
Linguagens: JavaScript e TypeScript.
Workshops: Sass, Responsive Web Design, Git.
Framework: React.
Projeto prático de desenvolvimento Front-End Landing Page site de noticias de tecnologia e desporto.
Back-End:
Fundamentos de desenvolvimento Back-End, estruturação de dados e bases de dados MySQL.
Linguagens: PHP, JavaScript(Node.js).
Frameworks: Laravel (PHP).
Criação de REST APIs.
Projeto prático de desenvolvimento de uma api para uma clinica medica RESTful a responder em formato json e testes com o Postman.`,
	},
];

export const projects = [
	{
		id: 0,
		title: 'PTNews - Front-End Landing Page',
		description:
			'Uma landing page desenvolvida com HTML, CSS e JavaScript, que apresenta notícias de tecnologia e desporto. O projeto destaca-se pela sua responsividade e design intuitivo, proporcionando uma experiência de usuário agradável.',
		image: ptnewsLogo,
		tags: ['HTML', 'CSS', 'JavaScript (React.js)', 'Firebase'],
		github: 'https://github.com/luisolivei/news_site',
		webapp: 'https://news-site-sepia.vercel.app/',
	},
	{
		id: 1,
		title: 'Api Medical-Clinic - Back-End RESTful API',
		description: 'Um CRUD feito em PHP, utilização da Framework Laravel , com a utilização do banco de dados MySQL e o Postman para testes a responder em formato JSON.',
		image: medicalclinic,
		tags: ['PHP(Laravel)', 'MySQL', 'Postman'],
		github: 'https://github.com/luisolivei/Clinica-Medica',
		webapp: '',
	},
	{
		id: 2,
		title: 'Goku-Invaders - Python (pygame)',
		description:
			'Uma versão modificada do clássico Space Invaders. O Goku desloca-se verticalmente com o objetivo de destruir os inimigos para salvar a sua amada Kika. O jogo conta com progressão por níveis, sons, historia entre níveis e um sistema de pontuação.',
		image: gokuInvaders,
		tags: ['Pygame', 'open.cv', 'numpy', 'random', 'os'],
		github: 'https://github.com/luisolivei/Goku-Invaders',
		webapp: '',
	},
];
