import type { SocialLink, WorkTab } from "../types";

export const site = {
  title: "Mizan Ali",
  description:
    "Fullstack product engineer building at the intersection of complex frontend engineering and onchain realtime systems.",
  resumeUrl: "/resume.pdf",
  githubUrl: "https://github.com/mizanxali",
};

export const socialLinks: SocialLink[] = [
  { label: "Twitter", url: "https://twitter.com/mizanxali" },
  { label: "GitHub", url: "https://github.com/mizanxali" },
  { label: "LinkedIn", url: "https://linkedin.com/in/mizanxali" },
  { label: "Telegram", url: "https://t.me/mizanxali" },
];

export const workTabs: WorkTab[] = [
  { id: "huddle01", label: "Huddle01" },
  { id: "projects", label: "Projects" },
  { id: "content", label: "Content" },
];

export const testimonial = {
  author: "Ayush Ranjan",
  role: "Founder and CEO, Huddle01",
  avatar: "/ayush-ranjan.webp",
  url: "https://x.com/ranjan3118/status/2028495370154914159",
};
