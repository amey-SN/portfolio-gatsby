import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
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
    title: 'Covid -19 Tracker',
    info: 'A Covid - 19 patients number tracker site created using HTML , CSS , JS . ',
    info2: 'This site gets data from an API and displays it in district wise , state wise sections .',
    url: '',
    repo: 'https://github.com/amey-SN/covidtimes.xyz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Basic Banking Site',
    info: 'A basic banking system built using HTML , CSS , PHP , MySql which lets user transfer money from customer to customer ',
    info2: 'This was done as an internship project during summer internship at TSF ',
    url: 'https://tsbsite.000webhostapp.com/',
    repo: 'https://github.com/amey-SN/tsfbankingsystem.github.io', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to collaborate ? Sounds great !',
  btn: 'Connect',
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
