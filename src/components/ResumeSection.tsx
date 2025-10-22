import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Briefcase, GraduationCap, Code, Terminal, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [isDownloading, setIsDownloading] = useState(false);
  const [showLinkedInBadge, setShowLinkedInBadge] = useState(false);

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
  ];

  // Load LinkedIn badge script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Ltd',
      period: '2022 - Present',
      location: 'Nairobi, Kenya',
      description: 'Leading development of modern web and mobile applications using React and React Native.',
      achievements: [
        'Built and deployed multiple production React Native mobile apps',
        'Implemented responsive web designs with React and TailwindCSS',
        'Collaborated with cross-functional teams using Agile methodologies',
        'Mentored junior developers on React best practices and Git workflows'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Kenya',
      period: '2020 - 2022',
      location: 'Nairobi, Kenya',
      description: 'Specialized in building user-centric web applications with modern JavaScript frameworks.',
      achievements: [
        'Developed 10+ responsive web applications using React',
        'Integrated React Query for efficient data fetching and state management',
        'Implemented pixel-perfect UI designs with NativeBase and TailwindCSS',
        'Maintained clean codebases with Git version control'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Hub Nairobi',
      period: '2019 - 2020',
      location: 'Nairobi, Kenya',
      description: 'Created responsive websites and learned modern frontend development practices.',
      achievements: [
        'Built responsive websites using HTML5, CSS3, and JavaScript',
        'Learned React fundamentals and component-based architecture',
        'Collaborated with designers to implement user-friendly interfaces',
        'Participated in daily standups and sprint planning sessions'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Muranga University of Technology',
      period: '2015 - 2019',
      honors: 'Second Class Honors',
      relevant: [
        'Web Development',
        'Mobile App Development',
        'Software Engineering',
        'Data Structures & Algorithms'
      ]
    },
    {
      degree: 'React Native Certification',
      institution: 'Meta (Facebook)',
      period: '2021',
      honors: 'Professional Certificate',
      relevant: [
        'React Native Fundamentals',
        'Mobile UI/UX',
        'Cross-Platform Development',
        'Performance Optimization'
      ]
    }
  ];

  const frontendStack = [
    {
      name: 'React',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.70.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.70.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z"/>
        </svg>
      ),
      color: '#06b6d4',
      category: 'frontend'
    },
    {
      name: 'React Native',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.70.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.70.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z"/>
        </svg>
      ),
      color: '#06b6d4',
      category: 'frontend'
    },
    {
      name: 'JavaScript',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z"/>
        </svg>
      ),
      color: '#F7DF1E',
      category: 'frontend'
    },
    {
      name: 'HTML5',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M12 17.56l4.07-1.13.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58-2.22.6-2.22-.6-.14-1.66h-2l.29 3.19L12 17.56M4.07 3h15.86L18.5 19.2 12 21l-6.5-1.8L4.07 3z"/>
        </svg>
      ),
      color: '#E34F26',
      category: 'frontend'
    },
    {
      name: 'CSS3',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3H5z"/>
        </svg>
      ),
      color: '#1572B6',
      category: 'frontend'
    },
    {
      name: 'Tailwind CSS',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
        </svg>
      ),
      color: '#06B6D4',
      category: 'frontend'
    },
    {
      name: 'React Query',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M12 12c-.8 0-1.5.7-1.5 1.5S11.2 15 12 15s1.5-.7 1.5-1.5S12.8 12 12 12m-4.5 1.5c0-.6-.1-1.2-.3-1.8l2.4-1.4c.5.8 1.4 1.3 2.4 1.3s1.9-.5 2.4-1.3l2.4 1.4c-.2.6-.3 1.2-.3 1.8 0 .6.1 1.2.3 1.8l-2.4 1.4c-.5-.8-1.4-1.3-2.4-1.3s-1.9.5-2.4 1.3l-2.4-1.4c.2-.6.3-1.2.3-1.8M12 6.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5S12.8 6.5 12 6.5m0 10c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5m5.8-9.3c-.4-.7-1.1-1.2-1.9-1.2s-1.5.5-1.9 1.2c-.8.1-1.4.6-1.9 1.2H9.9c-.5-.6-1.1-1.1-1.9-1.2-.4-.7-1.1-1.2-1.9-1.2S4.6 7.5 4.2 8.2C2.9 9 2 10.4 2 12s.9 3 2.2 3.8c.4.7 1.1 1.2 1.9 1.2s1.5-.5 1.9-1.2c.8-.1 1.4-.6 1.9-1.2h2.2c.5.6 1.1 1.1 1.9 1.2.4.7 1.1 1.2 1.9 1.2s1.5-.5 1.9-1.2c1.3-.8 2.2-2.2 2.2-3.8s-.9-3-2.2-3.8M18 13.5c0 .8-.2 1.5-.5 2.2-.3.2-.6.3-1 .3-.8 0-1.5-.7-1.5-1.5 0-1.3.5-2.4 1.4-3.2.3-.2.7-.3 1.1-.3.2 0 .4 0 .5.1v2.4M6 13.5v-2.4c.2-.1.3-.1.5-.1.4 0 .8.1 1.1.3.9.8 1.4 1.9 1.4 3.2 0 .8-.7 1.5-1.5 1.5-.4 0-.7-.1-1-.3-.3-.7-.5-1.4-.5-2.2m9.5-5.5c.8 0 1.5.7 1.5 1.5 0 .6-.4 1.1-.9 1.4-.9-.8-2-1.4-3.3-1.7.3-.7 1-1.2 1.7-1.2m-7 0c.7 0 1.4.5 1.7 1.2-1.3.3-2.4.9-3.3 1.7-.5-.3-.9-.8-.9-1.4 0-.8.7-1.5 1.5-1.5m3.5 8c-1.3-.3-2.4-.9-3.3-1.7.5-.3.9-.8.9-1.4 0-.8-.7-1.5-1.5-1.5-.7 0-1.4.5-1.7 1.2-.3.7-.5 1.5-.5 2.3 0 .8.2 1.6.5 2.3.3.7 1 1.2 1.7 1.2.8 0 1.5-.7 1.5-1.5 0-.6.4-1.1.9-1.4.9.8 2 1.4 3.3 1.7-.3.7-1 1.2-1.7 1.2-.8 0-1.5-.7-1.5-1.5 0-.6-.4-1.1-.9-1.4m3.5 0c-.7 0-1.4-.5-1.7-1.2 1.3-.3 2.4-.9 3.3-1.7-.5.3-.9.8-.9 1.4 0 .8.7 1.5 1.5 1.5z"/>
        </svg>
      ),
      color: '#FF4154',
      category: 'frontend'
    },
    {
      name: 'NativeBase',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5m0 2.18l7.5 3.75v8.07c0 4.15-2.88 8.06-7.5 9.32-4.62-1.26-7.5-5.17-7.5-9.32V7.93L12 4.18m2.5 6.32L12 13l-2.5-2.5L8 12l4 4 4-4-1.5-1.5z"/>
        </svg>
      ),
      color: '#06b6d4',
      category: 'frontend'
    },
  ];

  const backendStack = [
    {
      name: 'Node.js',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.22 0L10 19.65c-.07-.03-.14-.04-.17-.01-.58.31-.69.37-1.23.54-.14.05-.35.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8z"/>
        </svg>
      ),
      color: '#339933',
      category: 'backend'
    },
    {
      name: 'Express.js',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/>
        </svg>
      ),
      color: '#FFFFFF',
      category: 'backend'
    },
    {
      name: 'MongoDB',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.604-3.254 4.292-11.375zM12 19.313c-.095-.108-.172-.204-.254-.306-.293-.368-.595-.753-.886-1.146-1.345-1.815-2.533-3.785-2.533-5.498 0-2.873 1.16-5.023 2.886-6.363.206.398.42.801.648 1.206.524 1.004 1.02 2.05 1.466 3.118.652 1.554 1.2 3.16 1.6 4.782.348 1.408.6 2.844.754 4.284-.294.337-.6.664-.918.981l-.035.033a9.167 9.167 0 01-1.728-1.09z"/>
        </svg>
      ),
      color: '#47A248',
      category: 'backend'
    },
    {
      name: 'PostgreSQL',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M23.5594 14.7228a.5269.5269 0 00-.0563-.1191c-.139-.2632-.4768-.3418-.7399-.2044l-2.1786 1.1262.562-1.6972c.0616-.1814.0394-.3777-.0619-.5432-.117-.1885-.3096-.2995-.5157-.2995H17.25a.5583.5583 0 00-.3677.1384 11.5378 11.5378 0 00-1.2762.9815c-.2777-.3302-.5905-.6262-.9244-.8837l.3292-.9937a.9347.9347 0 00-.8928-1.1966h-1.8261c-.1832 0-.3664.0563-.5189.1644a6.3792 6.3792 0 00-1.0405.8174c-.2552-.2185-.5316-.4017-.8267-.5492-.396-.1977-.8174-.2989-1.2537-.2989h-1.8261a.5583.5583 0 00-.3677.1384c-.2832.2185-.5492.4624-.7949.7143-.561-.0394-1.1348-.0619-1.6972-.0619-1.6972 0-3.3437.2126-4.8971.6318-.5773.1533-1.033.5097-1.2875 1.0045-.2466.4817-.2857.9815-.1097 1.4004.1533.3566.5097.5886.8174.5886.0844 0 .1689-.0169.2532-.0563.1221-.0563.2185-.1314.3096-.2185.5097-.5097 1.1686-.7705 1.8544-.7705.2307 0 .4624.0281.6942.0844.2466.0619.5097.1689.7949.3302.117.0619.1814.1221.1814.1221.0394.0394.0732.0732.0732.0732a.5583.5583 0 00.3677.1384h1.8261c.2185 0 .3984-.1221.4624-.3415.0844-.2989.1689-.6035.3415-.8837.0844-.1384.1689-.2185.2532-.2185h1.8261c.1384 0 .2774.0619.3677.1689.0394.0563.0732.0994.1097.1533.0394.0619.0563.0994.0563.0994.0394.0619.0732.0994.0732.0994.0394.0619.0732.0994.0732.0994.0619.0994.1533.1533.2466.1533h1.8261c.2185 0 .3984-.1221.4624-.3415.0394-.1533.0844-.3096.139-.4624.0394-.1221.0844-.2307.139-.3302.0844-.1533.1689-.2466.2774-.2466h1.8261c.2185 0 .3984-.1221.4624-.3415.0394-.1533.0844-.3096.139-.4624.0394-.1221.0844-.2307.139-.3302.0844-.1533.1689-.2466.2774-.2466h1.8261c.2185 0 .3984-.1221.4624-.3415.0394-.1533.0844-.3096.139-.4624.0394-.1221.0844-.2307.139-.3302.0844-.1533.1689-.2466.2774-.2466h1.8261c.2185 0 .3984-.1221.4624-.3415.0394-.1533.0844-.3096.139-.4624.0394-.1221.0844-.2307.139-.3302.0844-.1533.1689-.2466.2774-.2466h1.8261c.2632 0 .4768.2044.4768.4624v.5097c0 .2632.2044.4768.4768.4768h1.0405c.2632 0 .4768-.2044.4768-.4768v-.5097c0-.7143-.5773-1.2916-1.2916-1.2916h-1.8261c-.5773 0-1.0918.3302-1.3465.8174-.0394.0844-.0732.1689-.1097.2532-.1533-.0394-.3096-.0563-.4768-.0563H17.25c-.5773 0-1.0918.3302-1.3465.8174-.0394.0844-.0732.1689-.1097.2532-.1533-.0394-.3096-.0563-.4768-.0563h-1.8261c-.5773 0-1.0918.3302-1.3465.8174-.0394.0844-.0732.1689-.1097.2532-.1533-.0394-.3096-.0563-.4768-.0563h-1.8261c-.2632 0-.5097.0844-.7143.2185a3.8284 3.8284 0 00-.9244-.7949 6.2567 6.2567 0 00-1.4635-.6599 5.0434 5.0434 0 00-.8837-.0844c-.9244 0-1.8005.3415-2.4732.9244a1.4453 1.4453 0 01-.2185.1689c-.0394-.1533-.139-.2774-.2774-.3415-.3989-.1533-.8837-.2632-1.4004-.3096-.6599-.0563-1.3184-.0844-1.955-.0844-1.7817 0-3.5072.2185-5.1375.6542-.6599.1814-1.2031.6542-1.5338 1.3184-.3096.6318-.3415 1.3184-.0844 1.955.2185.5492.6542.9244 1.1829.9244.1221 0 .2466-.0169.3677-.0563.2307-.0844.4624-.2307.6318-.3989.6599-.6599 1.5113-1.0045 2.3996-1.0045.3096 0 .6318.0394.9244.1221.3677.0994.7143.2774 1.0405.5097.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221l.1221.1221c.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221.0394.0394.0844.0844.1221.1221a.5583.5583 0 00.3677.1384h1.8261c.2632 0 .4768-.2044.4768-.4768 0-.0394-.0169-.0844-.0169-.1221-.0394-.1814-.0844-.3677-.139-.5492-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158-.0394-.1384-.0844-.2774-.1221-.4158z"/>
        </svg>
      ),
      color: '#336791',
      category: 'backend'
    },
    {
      name: 'Firebase',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
        </svg>
      ),
      color: '#FFCA28',
      category: 'backend'
    },
    {
      name: 'Supabase',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M13.629 21.075c-.54.9-1.87.62-2-.42l-1.61-12.63h8.97c1.52 0 2.45 1.68 1.62 2.94l-6.98 10.11zM10.371 2.925c.54-.9 1.87-.62 2 .42l1.61 12.63H5.01c-1.52 0-2.45-1.68-1.62-2.94l6.98-10.11z"/>
        </svg>
      ),
      color: '#3ECF8E',
      category: 'backend'
    },
    {
      name: 'REST APIs',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-2-6V4l6 6h-6z"/>
        </svg>
      ),
      color: '#06b6d4',
      category: 'backend'
    },
    {
      name: 'Git',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M21.62 11.11l-8.73-8.73c-.49-.49-1.28-.49-1.77 0L9.5 3.99l2.22 2.22c.52-.18 1.12-.07 1.53.34.41.42.52 1.03.33 1.56l2.14 2.14c.53-.19 1.14-.08 1.56.34.59.59.59 1.54 0 2.12-.59.59-1.54.59-2.12 0-.44-.44-.55-1.08-.33-1.62L13.1 9.36v5.59c.14.07.28.16.4.28.59.59.59 1.54 0 2.12-.59.59-1.54.59-2.12 0-.59-.59-.59-1.54 0-2.12.15-.15.33-.26.52-.34V9.33c-.19-.08-.37-.19-.52-.34-.44-.44-.55-1.09-.32-1.64L8.85 5.14 2.38 11.6c-.49.49-.49 1.28 0 1.77l8.73 8.73c.49.49 1.28.49 1.77 0l8.74-8.73c.48-.48.48-1.28 0-1.77z"/>
        </svg>
      ),
      color: '#F05032',
      category: 'backend'
    },
    {
      name: 'Agile/Scrum',
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M21.17 3.25Q21.5 3.25 21.76 3.5 22 3.74 22 4.08V19.92Q22 20.26 21.76 20.5 21.5 20.75 21.17 20.75H7.83Q7.5 20.75 7.24 20.5 7 20.26 7 19.92V17H2.83Q2.5 17 2.24 16.76 2 16.5 2 16.17V7.83Q2 7.5 2.24 7.24 2.5 7 2.83 7H7V4.08Q7 3.74 7.24 3.5 7.5 3.25 7.83 3.25M7 13.06L8.18 15.28H9.97L8 12.06L9.93 8.89H8.22L7.13 10.9L7.09 10.96L7.06 11.03Q6.8 10.5 6.5 9.96 6.25 9.43 5.97 8.89H4.16L6.05 12.08L4 15.28H5.78M13.88 19.5V17H8.25V19.5M13.88 15.75V12.63H12V15.75M13.88 11.38V8.25H12V11.38M13.88 7V4.5H8.25V7M20.75 19.5V17H15.13V19.5M20.75 15.75V12.63H15.13V15.75M20.75 11.38V8.25H15.13V11.38M20.75 7V4.5H15.13V7Z"/>
        </svg>
      ),
      color: '#06b6d4',
      category: 'backend'
    },
  ];

  const handleDownload = async () => {
    setIsDownloading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsDownloading(false);
  };

  const renderExperience = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {experience.map((job, index) => (
        <motion.div
          key={job.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-lg">{job.title}</h3>
                  <p className="text-primary">{job.company}</p>
                </div>
                <div className="text-sm text-muted-foreground text-left md:text-right">
                  <div>{job.period}</div>
                  <div>{job.location}</div>
                </div>
              </div>
              
              <p className="text-muted-foreground">{job.description}</p>
              
              <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderEducation = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {education.map((edu, index) => (
        <motion.div
          key={edu.degree}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-lg">{edu.degree}</h3>
                  <p className="text-primary">{edu.institution}</p>
                </div>
                <div className="text-sm text-muted-foreground text-left md:text-right">
                  <div>{edu.period}</div>
                  <div className="text-primary">{edu.honors}</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {edu.relevant.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 text-xs rounded-md bg-muted text-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderSkills = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-12"
    >
      {/* Frontend Stack */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-lg text-primary mb-2">Frontend Technologies</h3>
          <p className="text-sm text-muted-foreground">Building beautiful, responsive user interfaces</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {frontendStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-5 flex flex-col items-center justify-center space-y-3">
                  <motion.div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ color: tech.color }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {tech.logo}
                  </motion.div>
                  <span className="text-xs text-center font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Backend Stack */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-lg text-primary mb-2">Backend Technologies</h3>
          <p className="text-sm text-muted-foreground">Creating robust server-side solutions</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {backendStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.4 + index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-5 flex flex-col items-center justify-center space-y-3">
                  <motion.div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ color: tech.color }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {tech.logo}
                  </motion.div>
                  <span className="text-xs text-center font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Skills */}
      <div className="mt-12 p-6 rounded-lg border border-border bg-muted/20">
        <h3 className="text-lg text-primary mb-4">Additional Skills & Tools</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Responsive Design',
            'UI/UX Principles',
            'API Integration',
            'State Management',
            'Performance Optimization',
            'Version Control',
            'Team Collaboration',
            'Code Review',
            'Testing & Debugging',
            'CI/CD',
            'Figma',
            'VS Code',
            'Docker',
            'AWS',
            'Authentication',
            'WebSockets'
          ].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1 + index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 text-xs rounded-md bg-card border border-border text-foreground hover:border-primary/50 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="resume" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -100, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ margin: "-150px" }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">Background</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl mb-4">
                Resume
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Professional experience and technical expertise
              </p>
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Download className={`w-4 h-4 mr-2 ${isDownloading ? 'animate-bounce' : ''}`} />
                {isDownloading ? 'Downloading...' : 'Download PDF'}
              </Button>
            </div>
            
            {/* LinkedIn Badge - Shows on hover/press */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ margin: "-150px" }}
              className="flex justify-center lg:justify-end relative"
              onMouseEnter={() => setShowLinkedInBadge(true)}
              onMouseLeave={() => setShowLinkedInBadge(false)}
            >
              {/* LinkedIn Button */}
              <motion.button
                onClick={() => setShowLinkedInBadge(!showLinkedInBadge)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <svg 
                  className="w-5 h-5 text-primary" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  LinkedIn Profile
                </span>
                <motion.svg
                  className="w-4 h-4 text-muted-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ rotate: showLinkedInBadge ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </motion.svg>
              </motion.button>

              {/* Badge Popover */}
              <AnimatePresence>
                {showLinkedInBadge && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 z-50"
                  >
                    <Card className="border-border shadow-xl shadow-primary/10 overflow-hidden">
                      <CardContent className="p-4">
                        <div 
                          className="badge-base LI-profile-badge" 
                          data-locale="en_US" 
                          data-size="medium" 
                          data-theme="dark" 
                          data-type="VERTICAL" 
                          data-vanity="fabian-louis-35b809198" 
                          data-version="v1"
                        >
                          <a 
                            className="badge-base__link LI-simple-link" 
                            href="https://ke.linkedin.com/in/fabian-louis-35b809198?trk=profile-badge"
                          >
                            Fabian Louis
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{}}
          className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4"
        >
          {tabs.map(({ id, label, icon: Icon }, index) => (
            <motion.button
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              viewport={{}}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' && renderExperience()}
          {activeTab === 'education' && renderEducation()}
          {activeTab === 'skills' && renderSkills()}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ResumeSection;
