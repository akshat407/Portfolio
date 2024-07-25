import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'BetaZen InfoTech',
      companyUrl: 'https://betazeninfotech.com/',
      role: 'SOftware Developer Intern',
      started: 'March 2024',
      upto: 'May 2024',
      tasks: [
        'Integrated the Third-part API enhanced functionality of the app which results seamless user interaction',
        'Workedwith POST,GET, PUT methods with request query and Basic Authentication to fetch the response of the API',
        'Redesigned app layout, resulting in a 25% increase in use retention',
        'Stored and managed app data on Firebase Realtime Database for real-time synchronization across devices',
      ],
    },
    {
      company: 'CredResolve',
      companyUrl: 'https://www.credresolve.com/',
      role: 'Flutter Ddeveloper intern',
      started: 'Oct 2023',
      upto: 'Dec 2023',
      tasks: [
        'Designed and implemented the front end of feature-rich modules "Day Planner and Dashboard" combining a user-friendly interface with seamless data integration.',
        'Leveraged Flutter and Dart to create a cross-platform solution, ensuring a consistent and optimal user experience on both Android and iOS platforms',
        'Conducted thorough testing and debugging to ensure the reliability and performance of the application, addressing anyAPI-related issues promptly.',
      ],
    },
    // {
    //   company: 'webnetics',
    //   companyUrl: 'https://webnetic.vercel.app/',
    //   role: 'frontend developer',
    //   started: 'june 2022',
    //   upto: 'january 2023',
    //   tasks: [
    //     'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
    //     'Architected the folder structure and initial setup of the app.',
    //     'Reviewed and approved multiple Pull requests.',
    //     'Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing.',
    //   ],
    // },
  ],
};
