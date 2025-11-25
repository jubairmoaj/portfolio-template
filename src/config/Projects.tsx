// src/data/projects.ts
import JavaIcon from '@/components/technologies/JavaIcon';
import KotlinIcon from '@/components/technologies/KotlinIcon';
import FlutterIcon from '@/components/technologies/FlutterIcon';
import JetpackComposeIcon from '@/components/technologies/JetpackComposeIcon';
import KmmIcon from '@/components/technologies/KmmIcon';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import MysqlIcon from '@/components/technologies/MysqlIcon';
import PhpIcon from '@/components/technologies/PhpIcon';
import FirebaseIcon from '@/components/technologies/FirebaseIcon';
import Github from '@/components/technologies/Github';
import Figma from '@/components/technologies/Figma';
import Photoshop from '@/components/technologies/Photoshop';
import GitIcon from '@/components/technologies/GitIcon';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Singapore Plus VPN',
    description:
      'A lightweight, fast VPN client focused on delivering secure high-speed connections with easy one-tap access and Singapore-optimized servers.',
    image: '/project/icon/sgplus.webp',

    video: '',
    link: 'https://play.google.com/store/apps/details?id=com.redoy.myapplication',
    technologies: [
      { name: 'Kotlin', icon: <KotlinIcon key="kotlin" /> },
      { name: 'Jetpack Compose', icon: <JetpackComposeIcon key="jetpackcompose" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Firebase', icon: <FirebaseIcon key="firebase" /> },
      { name: 'Git', icon: <GitIcon key="git" /> },
      { name: 'Figma', icon: <Figma key="figma" /> },
    ],
    github: '', // add repo URL if public
    live: '', // not applicable (Play Store link provided above)
    details: true,
    projectDetailsPageSlug: '/projects/singapore-plus-vpn',
    isWorking: true,
  },
  {
    title: 'FlashMail (Disposable Email)',
    description:
      'A mobile app that creates and manages disposable email addresses instantly, protecting user privacy and preventing spam.',
    image: '/project/icon/flashmail.webp',
    video: '',
    link: 'https://play.google.com/store/apps/details?id=com.yourcompany.flashmail',
    technologies: [
      { name: 'Java', icon: <JavaIcon key="java" /> },
      { name: 'Kotlin', icon: <KotlinIcon key="kotlin" /> },
      { name: 'Firebase', icon: <FirebaseIcon key="firebase" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MySQL', icon: <MysqlIcon key="mysql" /> },
      { name: 'GitHub', icon: <Github key="github" /> },
      { name: 'Photoshop', icon: <Photoshop key="photoshop" /> },
    ],
    github: '',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/flashmail',
    isWorking: true,
  },
  {
    title: 'SEU CampusMate',
    description:
      'An all-in-one campus companion app for Southeast University students — attendance, fee calculators, CGPA calculator, campus news, clubs and resources.',
    image: '/project/icon/seu.webp',
    video: '',
    link: 'https://play.google.com/store/apps/details?id=com.yourcompany.seucampusmate',
    technologies: [
      { name: 'Java', icon: <JavaIcon key="java" /> },
      { name: 'Kotlin', icon: <KotlinIcon key="kotlin" /> },
      { name: 'MySQL', icon: <MysqlIcon key="mysql" /> },
      { name: 'PHP', icon: <PhpIcon key="php" /> },
      { name: 'Firebase', icon: <FirebaseIcon key="firebase" /> },
      { name: 'Git', icon: <GitIcon key="git" /> },
      { name: 'Figma', icon: <Figma key="figma" /> },
    ],
    github: '',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/seu-campusmate',
    isWorking: true,
  },
  {
    title: 'Quick Math Challenge',
    description:
      'A fast, addictive math quiz app offering timed challenges, multiple difficulty levels, progress tracking, and offline play.',
    image: '/project/icon/quiz.webp',
    video: '',
    link: 'https://play.google.com/store/apps/details?id=com.yourcompany.quickmathchallenge',
    technologies: [
      { name: 'Flutter', icon: <FlutterIcon key="flutter" /> },
      { name: 'Kotlin Multiplatform', icon: <KmmIcon key="kmp" /> },
      { name: 'Firebase', icon: <FirebaseIcon key="firebase" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'GitHub', icon: <Github key="github" /> },
      { name: 'Figma', icon: <Figma key="figma" /> },
    ],
    github: '',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/quick-math-challenge',
    isWorking: true,
  },
];
