import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const i18nString = z.object({
  en: z.string(),
  zh: z.string(),
});

const education = defineCollection({
  loader: file("src/data/education.yml"),
  schema: z.object({
    id: z.string(),
    logo: z.string().optional(),
    degree: i18nString,
    school: i18nString,
    location: i18nString.optional(),
    periods: z.array(
      z.object({
        start: z.string(),
        end: z.string(),
      })
    ),
    details: z.array(i18nString).optional(),
  }),
});

const coursework = defineCollection({
  loader: file("src/data/coursework.yml"),
  schema: z.object({
    id: z.string(),
    educationId: z.string(),          // <- link field
    label: i18nString,
    items: z.array(i18nString),
  }),
});

export const collections = {
  education,
  coursework,
};


