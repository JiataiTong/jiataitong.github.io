import type { Lang } from "@i18n/ui";

export type I18nString = { en: string; zh: string };

export function pickLang(value: I18nString, lang: Lang) {
  return value[lang];
}
