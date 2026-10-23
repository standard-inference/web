import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const corrections = z.array(z.object({ date: z.string(), was: z.string(), now: z.string() })).default([]);

const notes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes' }),
  schema: z.object({
    code: z.string(), // e.g. TN-03
    title: z.string(),
    summary: z.string(),
    inShort: z.string(),
    date: z.string(), // display string while dates are placeholders
    checked: z.string(),
    mins: z.number(),
    level: z.string(),
    series: z.string(),
    episode: z.string(),
    sheet: z.string().optional(),
    specTitle: z.string().optional(),
    sources: z.array(z.object({ label: z.string(), href: z.string().default('#') })).default([]),
    corrections,
    watch: z.object({ code: z.string(), series: z.string(), title: z.string(), href: z.string(), status: z.string() }).optional(),
  }),
});

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/episodes' }),
  schema: z.object({
    n: z.number(), // running order across the channel
    id: z.string(), // EP 01
    code: z.string(), // Ep1
    series: z.string(),
    form: z.string(),
    title: z.string(),
    question: z.string(),
    summary: z.string(),
    bridge: z.string().optional(), // sentence leading into the next episode
    claims: z.array(z.object({ claim: z.string(), source: z.string(), status: z.string(), checked: z.boolean().default(false), model: z.string().default('—') })).default([]),
    corrections,
  }),
});

export const collections = { notes, episodes };
