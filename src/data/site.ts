import type { SocialLink, WorkTab } from "../types";

export const site = {
  title: "Mizan Ali",
  description:
    "Fullstack product engineer building consumer apps across web3 and AI.",
  resumeUrl: "/resume.pdf",
  githubUrl: "https://github.com/mizanxali",
};

export const socialLinks: SocialLink[] = [
  { label: "Twitter", url: "https://twitter.com/mizanxali", icon: "x" },
  { label: "GitHub", url: "https://github.com/mizanxali", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/mizanxali", icon: "linkedin" },
  { label: "Telegram", url: "https://t.me/mizanxali", icon: "telegram" },
  { label: "Letterboxd", url: "https://letterboxd.com/mizanxali", icon: "letterboxd" },
];

export const workTabs: WorkTab[] = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "content", label: "Content" },
];

export const testimonial = {
  author: "Ayush Ranjan",
  role: "Founder and CEO, Huddle01",
  avatar: "/ayush-ranjan.webp",
  url: "https://x.com/ranjan3118/status/2028495370154914159",
};
