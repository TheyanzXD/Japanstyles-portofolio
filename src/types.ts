export interface EducationItem {
  id: string;
  level: string;
  kanji: string;
  school: string;
  subtitle: string;
  isCurrent?: boolean;
}

export interface SocialItem {
  id: string;
  platform: string;
  handle: string;
  href: string;
  isEmail?: boolean;
}
