/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Facebook from '@/components/svgs/Facebook';
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  // Personal Information
  name: 'Jubair Moaj',
  subtitle: 'Software engineer skilled in Android, iOS, and web development. Currently a 4th-year B.Sc. CSE student at Southeast University, building clean, high-performance apps and modern digital solutions.',
  avatar: '/assets/jubair.jpg',

  // Affiliations/Roles Configuration


  // Skills Configuration (kept for potential future use)
  skills: [
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Bun',
      href: 'https://bun.sh/',
      component: 'Bun',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],

  // Buttons Configuration
  buttons: [
    // {
    //   variant: 'outline',
    //   text: 'Resume / CV',
    //   href: '/resume',
    //   icon: 'CV',
    // },
    // {
    //   variant: 'default',
    //   text: 'Get in touch',
    //   href: '/contact',
    //   icon: 'Chat',
    // },
  ],
  
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jubairmoaj',
    icon: 'LinkedIn',
  },
  {
    name: 'Github',
    href: 'https://github.com/jubairmoaj',
    icon: 'Github',
  },
  {
    name: 'X',
    href: 'https://x.com/J_Moaj',
    icon: 'X',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Jubair.XD/',
    icon: 'Facebook',
  },
  {
    name: 'Email',
    href: 'mailto:jubairmoaj71@gmail.com',
    icon: 'Mail',
  },
];

// Icon component mapping
export const socialIconComponents = {
  LinkedIn,
  Github,
  X,
  Facebook,
  Mail,
};
