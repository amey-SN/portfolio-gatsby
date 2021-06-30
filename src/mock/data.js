import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Amey Nagmode | Web Dev', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Amey Nagmode',
  subtitle: 'I am a Web Developer',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  bgimg:'project.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '',
   // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Covid Tracker',
    info: 'A website that tracks the real time number of covid-19 patients .',
    info2: 'This site is built using HTML , CSS , JS ',
    url: '',
    repo: 'https://github.com/amey-SN/covidtimes.xyz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Basic Banking System',
    info: 'A banking system site in which user can carry out transactions view information .',
    info2: 'This site is developed using HTML , BOOTSTRAP , PHP , MYSQL ',
    url: '',
    repo: 'https://github.com/amey-SN/tsfbankingsite.github.io', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ameynagmode@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/amey_nagmode/',
    },
    {
      id: nanoid(),
      name: 'code',
      url: 'https://www.codechef.com/users/ameysn',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/amey-nagmode/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/amey-SN',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
