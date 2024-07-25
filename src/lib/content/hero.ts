import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Akshat Srivastava',
  tagline: 'I create visually pleasing interfaces for the apps.',
  description:
    "I'm a passionate Front-End web developer with hands-on experience in building web applications using Flutter, React.js, Next.js",
  specialText: 'Currently available for internships',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
