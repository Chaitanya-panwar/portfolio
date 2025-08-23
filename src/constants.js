// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';                 
import freelancerLogo from './assets/company_logo/freelancer_logo.webp'
import mssquareLogo from './assets/company_logo/mssquare_logo.jpeg'

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import homentor from './assets/work_logo/homentor.png';
import chahatcafe from './assets/work_logo/chahatcafe.png';
import Millionaireclub from './assets/work_logo/millionaireclub.png';



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
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
  
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: freelancerLogo,
      role: "Fullstack Developer",
      company: "Freelancer",
      date: "March 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "React Native",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: mssquareLogo,
      role: "Fullstack Developer",
      company: "MSSQUARE India",
      date: "August 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
         "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "React Native",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
  
  ];
  
  export const education = [
    {
      id: 0,
      img: bsaLogo,
      school: "ICS College, Ujjain",
      date: "Sept 2020 - Aug 2023",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (BCA) from Institute of Computer Science , Ujjain. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at ICS College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - BCA ",
    },
    {
      id: 1,
      img: vpsLogo,
      school: "Adarsh English Higher Secondary School, Budha",
      date: "Apr 2019 - March 2020",
      grade: "72%",
      desc: "I completed my class 12 education from Adarsh English Higher Secondary School, Budha, under the MP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "MP BOARD(XII) - PCM",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Arya Bal Mandir, Budha",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my class 10 education from Arya Bal Mandir School, Budha, under the MP board.",
      degree: "MP BOARD(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Homentor",
      description:
        "A powerful and user-friendly MERN Stack application where student can find there tutors online.",
      image: homentor,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Express JS", "MongoDB" ,"API"],
      webapp: "https://homentor.in/",
    },
    {
      id: 1,
      title: "Chahat Cafe",
      description:
        "A portfolio website of the Chahat Cafe chain.",
      image: chahatcafe,
      tags: ["React JS","HTML", "CSS", "JavaScript"],
      webapp: "https://chahatcafe.onrender.com/",
    },
    {
      id: 2,
      title: "Millionaire Club",
      description:
        "A MERN Stack web application that provides functionalities like referral earning system.",
      image: Millionaireclub,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript","Node JS","Express JS","MongoDB"],
      webapp: "",
    },
    
  ];  
