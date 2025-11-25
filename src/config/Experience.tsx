import AWS from '@/components/technologies/AWS';
import Azure from '@/components/technologies/Azure';
import Figma from '@/components/technologies/Figma';
import FirebaseIcon from '@/components/technologies/FirebaseIcon';
import FlutterIcon from '@/components/technologies/FlutterIcon';
import GitIcon from '@/components/technologies/GitIcon';
import JavaIcon from '@/components/technologies/JavaIcon';
import JetpackComposeIcon from '@/components/technologies/JetpackComposeIcon';
import KmmIcon from '@/components/technologies/KmmIcon';
import KotlinIcon from '@/components/technologies/KotlinIcon';
import MysqlIcon from '@/components/technologies/MysqlIcon';
import NodeJs from '@/components/technologies/NodeJs';
import Ovh from '@/components/technologies/Ovh';
import PhpIcon from '@/components/technologies/PhpIcon';
import Photoshop from '@/components/technologies/Photoshop';
import NextJs from '@/components/technologies/NextJs';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    company: 'AppPulse',
    position: 'Founder & CEO',
    location: '',
    image: '/company/apppulse.webp',
    description: [

      'Design, develop and publish mobile & web applications.',

'Built several apps on Google Play with a combined user-base of over 1 million+ users.',

'We strive to deliver intuitive UI/UX, efficient performance, and meaningful features.',
    ],
    startDate: 'December 2022',
    endDate: 'Present',
    technologies: [
      {
        name: 'Java',
        href: 'https://www.java.com/',
        icon: <JavaIcon />,
      },
      {
        name: 'Kotlin',
        href: 'https://kotlinlang.org/',
        icon: <KotlinIcon />,
      },
      {
        name: 'Flutter',
        href: 'https://flutter.dev/',
        icon: <FlutterIcon />,
      },
      {
        name: 'Jetpack Compose',
        href: 'https://developer.android.com/jetpack/compose',
        icon: <JetpackComposeIcon />,
      },
      {
        name: 'Kotlin Multiplatform',
        href: 'https://kotlinlang.org/lp/multiplatform/',
        icon: <KmmIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
    
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'PHP',
        href: 'https://www.php.net/',
        icon: <PhpIcon />,
      },
      {
        name: 'MySQL',
        href: 'https://www.mysql.com/',
        icon: <MysqlIcon />,
      },
      {
        name: 'Firebase',
        href: 'https://firebase.google.com/',
        icon: <FirebaseIcon />,
      },
      {
        name: 'Git',
        href: 'https://git-scm.com/',
        icon: <GitIcon />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'Adobe Photoshop',
        href: 'https://www.adobe.com/products/photoshop.html',
        icon: <Photoshop />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Azure',
        href: 'https://azure.microsoft.com/',
        icon: <Azure />,
      },
      {
        name: 'OVH Cloud',
        href: 'https://www.ovhcloud.com/',
        icon: <Ovh />,
      },
    ],
    website: '#',
    github: '#',
    x: '#',
  },
  
];
