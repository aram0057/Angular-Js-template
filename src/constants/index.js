export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Frontend Dev',
    position: '3 years experience ',
    img: 'assets/review1.png',
    review:
      'Specialized in creating dynamic and visually appealing user interfaces using React, Three.js, and Tailwind CSS. Skilled in building responsive, interactive web applications with an emphasis on performance and seamless user experience..',
  },
  {
    id: 2,
    name: 'UI/UX Designer',
    position: '5 years design experience ',
    img: 'assets/review2.png',
    review:
      'Expert in crafting intuitive and visually engaging user interfaces. Proficient in creating wireframes, low and high-fidelity prototypes, and user-centered designs for both mobile and web applications. Skilled in tools like Figma, Adobe XD, and Sketch to bring ideas to life with precision and creativity.',
  },
  {
    id: 3,
    name: 'Backend developer',
    position: '2 years experience  ',
    img: 'assets/review3.png',
    review:
      'Backend development with expertise in Django and Node.js. Skilled in building robust APIs, integrating with databases, and developing scalable, server-side applications. Proficient in frameworks like Next.js for seamless server-side rendering and efficient data handling.',
  },
  {
    id: 4,
    name: 'Project Management',
    position: '1 year IT project management',
    img: 'assets/review4.png',
    review:
      'Proficient in Agile and Scrum methodologies with hands-on experience using tools like Jira, LeanKit, and Trello for efficient project tracking and collaboration. Skilled in coordinating cross-functional teams, managing timelines, and ensuring seamless project execution from inception to delivery.',
  },
];

export const myProjects = [
  {
    title: 'GreenMelb.com',
    desc: 'GreenMelb.com is a web platform focused on residential waste management in Melbourne, providing users with tools to learn about waste disposal and reduce landfill impact. It integrates interactive features like maps and educational content to promote sustainable waste practices.',
    subdesc:
      'GreenMelb.com uses a React front-end and a Django back-end, with Mapbox API for map integration. It also connects to a MySQL database for managing waste data and user information.',
    href: 'https://www.greenmelb.com/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'MelbCycle',
    desc: 'MelbCycle is a web platform designed to promote cycling in Melbourne by providing users with cycling routes, safety tips, and real-time tracking features. It aims to encourage sustainable transportation and improve the cycling experience across the city',
    subdesc:
      'MelbCycle is built using HTML, CSS, and JavaScript, and it integrates the Mapbox API for interactive mapping and navigation features.',
    href: 'https://github.com/aram0057/Personal-Projects/tree/main/melb%20cycle',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Glora diamonds,Chennai-India',
    desc: 'Glora Diamonds is a retail website specializing in high-quality diamond jewelry, offering a range of products with secure online payment options. The platform aims to provide an exceptional shopping experience by combining elegant design with user-friendly features.',
    subdesc:
      'Glora Diamonds is developed using HTML, CSS, and JavaScript, with integration of payment gateways for secure transactions. It focuses on delivering a responsive and visually appealing interface for customers.',
    href: 'https://gloradiamonds.com/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Monash University',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "• Key Coursework: Advanced Programming (Java, Python, Kotlin), Web Development (Django, ASP.NET), Database Management, Machine Learning, Cybersecurity Principles. ",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Software web developer ',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: " Designed and implemented a scalable e-commerce platform to streamline retail sales and automate tax filing, increasing monthly tax report generation speed by 40% using JSON data formats. • Enhanced RESTful API functionality to integrate third-party services, reducing data processing times by 25% and improving overall system efficiency through optimized API endpoints and error handling. •  Developed a cloud-based, distributed database architecture using MongoDB, ensuring 99.9% uptime, flexible schema design, and horizontal scalability to handle 30,000+ product records. ",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Software tester (internship)',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: " Developed and executed Python test cases, enhancing software reliability and performance through comprehensive validation. • Collaborated with developers to align testing with requirements, ensuring adherence to quality standards.• Documented and tracked bugs using JIRA, facilitating effective communication and resolution",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
