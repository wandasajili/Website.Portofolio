import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  fullName: "Wanda Sajili",
  jobTitle: "Senior Datacenter",
  tagline: "Crafting digital experiences with precision, performance, and purpose.",
  about: "I am an IT enthusiast with a strong interest in computer networking and web development. I enjoy building websites, learning new technologies, and creating practical digital solutions. I am motivated, adaptable, and always eager to improve my skills.",
  email: "sajili.wanda@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  discord: "https://discord.com",
  projects: [
    {
      id: 1,
      title: "Fintech Dashboard",
      description: "A high-performance financial analytics platform with real-time data visualization.",
      image: "https://picsum.photos/800/600?random=1",
      tags: ["React", "TypeScript", "D3.js", "Tailwind"],
      link: "#"
    },
    {
      id: 2,
      title: "Nexus Commerce",
      description: "A headless e-commerce solution with focus on core web vitals and SEO.",
      image: "https://picsum.photos/800/600?random=2",
      tags: ["Next.js", "Shopify API", "Framer Motion"],
      link: "#"
    },
    {
      id: 3,
      title: "Aura Design System",
      description: "An enterprise-grade component library used by 50+ internal product teams.",
      image: "https://picsum.photos/800/600?random=3",
      tags: ["Storybook", "PostCSS", "React"],
      link: "#"
    }
  ],
  skills: [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "UI/UX Design", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Three.js / Canvas", level: 70 }
  ],
  timeline: [
    {
      id: 1,
      type: 'experience',
      title: 'Staff Frontend Engineer',
      organization: 'Innovate AI',
      period: '2021 — Present',
      description: 'Leading the UI engineering team in developing generative AI interfaces and design tokens systems.'
    },
    {
      id: 2,
      type: 'experience',
      title: 'Senior Web Developer',
      organization: 'Starlight Agency',
      period: '2018 — 2021',
      description: 'Built high-end marketing sites and complex web applications for Fortune 500 clients.'
    },
    {
      id: 3,
      type: 'education',
      title: 'M.Sc in Computer Science',
      organization: 'Tech University',
      period: '2016 — 2018',
      description: 'Focused on Human-Computer Interaction and Advanced Algorithm Design.'
    },
    {
      id: 4,
      type: 'education',
      title: 'B.Sc in Software Engineering',
      organization: 'State College',
      period: '2012 — 2016',
      description: 'Graduated with Honors. Specialized in Software Architecture.'
    }
  ],
  certificates: [
    {
      id: 1,
      title: "Google Cloud Professional Architect",
      issuer: "Google",
      year: "2023",
      thumbnail: "https://picsum.photos/800/600?random=10",
      link: "#"
    },
    {
      id: 2,
      title: "Meta Frontend Developer Professional",
      issuer: "Coursera",
      year: "2022",
      thumbnail: "https://picsum.photos/800/600?random=11",
      link: "#"
    },

    {
      id: 3,
      title: "Advanced React Patterns",
      issuer: "Frontend Masters",
      year: "2021",
      thumbnail: "https://picsum.photos/800/600?random=12",
      link: "#"
    },
    {
      id: 4,
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      year: "2023",
      thumbnail: "https://picsum.photos/800/600?random=13",
      link: "#"
    },
    {
      id: 5,
      title: "UI Design Specialization",
      issuer: "CalArts",
      year: "2020",
      thumbnail: "https://picsum.photos/800/600?random=14",
      link: "#"
    },
    {
      id: 6,
      title: "TypeScript Mastery",
      issuer: "Microsoft Tech",
      year: "2022",
      thumbnail: "https://picsum.photos/800/600?random=15",
      link: "#"
    }
  ]
};