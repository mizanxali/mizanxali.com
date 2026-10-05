export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  image?: string;
  links: ProjectLink[];
  tech: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description?: string;
  projects: Project[];
}

export interface ContentItem {
  type: "video" | "blog";
  name: string;
  url: string;
  description: string;
  /** Thumbnail, used by blog posts. */
  image?: string;
  /** YouTube embed URL, used by videos that play inline. */
  embedUrl?: string;
  /** Renders a static card instead of an embed. */
  placeholder?: "playlist";
  meta?: string;
}

export interface TechMeta {
  /** Simple Icons slug, resolved via cdn.simpleicons.org. */
  slug?: string;
  /** Full icon URL, for icons Simple Icons doesn't have. */
  iconUrl?: string;
  /** Icon colour override, for icons that are invisible on a dark background. */
  color?: string;
  /** Text shown when there is no icon, or the icon fails to load. */
  fallback?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  /** Simple Icons slug, resolved via Iconify. */
  icon: string;
}

export interface WorkTab {
  id: string;
  label: string;
}
