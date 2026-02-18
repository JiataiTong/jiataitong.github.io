export const LANGUAGES = {
  en: "English",
  zh: "中文",
} as const;

export type Lang = keyof typeof LANGUAGES;

const KEYS = [
  "home",
  "education",
  "research",
  "entrepreneurship",
  "projects",
  "cv",
  "blog",
] as const;

export type UIKey = (typeof KEYS)[number];

export const UI: Record<Lang, Record<UIKey, string>> = {
  en: {
    home: "Home",
    education: "Education",
    research: "Research",
    entrepreneurship: "Entrepreneurship",
    projects: "Projects",
    cv: "CV",
    blog: "Blog",
  },
  zh: {
    home: "主页",
    education: "教育背景",
    research: "科研",
    entrepreneurship: "创业",
    projects: "项目",
    cv: "简历",
    blog: "博客",
  },
};
export function t(lang: Lang, key: UIKey) {
  return UI[lang][key];
}
