import { Injectable } from '@angular/core';

export interface educationInfo {
  yearStart: String;
  yearEnd: String;
  institute: String;
  degree: String;
  gpa: Number;
  advisor: String;
  fieldOfStudy: String;
  url: String;
}

export interface publication {
  title: String;
  authors: Array<String>;
  publisher: String;
  link: String;
  status: String;
}

@Injectable({
  providedIn: 'root',
})
export class SkillDataService {
  educationBackground: educationInfo[] = [
    {
      yearStart: 'Aug 2019',
      yearEnd: 'Aug 2021',
      institute: 'The Pennsylvania State University (PSU)',
      degree: 'M.S. in Information Sciences and Technology',
      gpa: 3.96,
      advisor: 'Dr. John M. Carroll',
      fieldOfStudy: 'Human-Computer Interaction',
      url: 'https://www.psu.edu/',
    },
  ];

  publications: publication[] = [
    {
      title:
        'Tailoring your AI friend: Effects of customization on users’ interaction with companion chatbots',
      authors: ['Jin Chen', 'Yuan Sun', 'Yanting Wu', 'S Shyam Sundar'],
      publisher:
        ' 71st Annual International Communication Association Conference',
      link: 'https://www.bellisario.psu.edu/medialab/research-article/tailoring-your-ai-friend-effects-of-customization-on-users-interaction',
      status: 'accepted',
    },
    {
      title: 'Longitudinal Deep Kernel Gaussian Process Regression',
      authors: ['Junjie Liang', 'Yanting Wu', 'Dongkuan Xu', 'Vasant Honavar'],
      publisher: 'AAAI 2021 conference',
      link: 'https://www.researchgate.net/publication/341639239_Longitudinal_Deep_Kernel_Gaussian_Process_Regression',
      status: 'accepted',
    },
    {
      title: 'What Do You Get from Turning on the Video',
      authors: ['Yanting Wu', 'Yuan Sun', 'S Shyam Sundar'],
      publisher: 'CSCW 2022 conference',
      link: '',
      status: 'accepted',
    },
  ];

  techSkills: Array<String> = [
    'JavaScript',
    'TypeScript',
    'SQL',
    'Node.js',
    'Angular',
    'HTML5',
    'CSS3',
    'jQuery',
    'Bootstrap',
    'Angular Material',
    'PrimeNG',
    'MySQL',
    'MongoDB',
    'GIT',
    'Agile (Scrum)',
    'Jasmine',
    'Karma',
    'Postman',
    'Python',
  ];

  uxSkills: Array<String> = [
    'Interview',
    'Heuristic evaluation',
    'Usability testing',
    'Competitor analysis',
    'Content analysis',
    'Think aloud',
    'Task analysis',
    'Figma',
    'Axure',
    'Adobe XD',
    'SPSS',
    'JMP',
  ];

  constructor() {}
}
