// Site-wide content. Working titles: edit here, every page updates.
export const site = {
  name: 'Standard Inference',
  youtube: 'https://www.youtube.com/@standardinference',
  email: '[contact@standardinference.co.uk — placeholder]',
};

export const nav = [
  { key: 'videos', label: 'Videos', href: '/#start-here' },
  { key: 'series', label: 'Series', href: '/#series' },
  { key: 'notes', label: 'Technical Notes', href: '/notes/' },
  { key: 'check', label: 'How we check', href: '/#how-we-check' },
  { key: 'yt', label: 'YouTube ↗', href: site.youtube },
] as const;

export type NavKey = (typeof nav)[number]['key'];

export const series = [
  { code: 'S1', name: 'LLM 101', line: 'The foundations.', body: 'What a language model is, how it reads, and why it sometimes gets things wrong. Start here.', soon: false },
  { code: 'S2', name: 'Standard Practice', line: 'How to use what you learned.', body: 'Practical procedure, built on the foundations: asking better questions and checking the answers.', soon: false },
  { code: 'S3', name: 'Standard Deviation', line: 'The maths, for those who want it.', body: 'The same ideas, worked through with the numbers. Optional depth, never required.', soon: true },
  { code: 'S4', name: 'Shorts', line: 'One idea, under a minute.', body: null, soon: false, subs: ['Standard Definitions', 'Can AI actually…?', 'Skill Tested', 'Standard Issue'] },
];
