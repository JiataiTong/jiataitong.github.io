export const LANGUAGES = {
  en: "English",
  zh: "中文",
} as const;

export type Lang = keyof typeof LANGUAGES;

const KEYS = ["home", "projects", "services", "store", "blog", "cv"] as const;
export type UIKey = (typeof KEYS)[number];

export const UI: Record<Lang, Record<UIKey, string>> = {
  en: {
    home: "Home",
    projects: "Projects",
    services: "Services",
    store: "Store",
    blog: "Blog",
    cv: "CV",
  },
  zh: {
    home: "主页",
    projects: "项目",
    services: "服务",
    store: "商店",
    blog: "博客",
    cv: "简历",
  },
};

export function t(lang: Lang, key: UIKey) {
  return UI[lang][key];
}
