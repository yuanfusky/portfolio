import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    projectCode: z.string(),
    slug: z.string(),
    status: z.string(),
    domain: z.string(),
    dataType: z.string(),
    tools: z.array(z.string()),
    methods: z.array(z.string()),
    oneLineProblem: z.string(),
    problemSummary: z.string(),
    methodsOutcome: z.string(),
    interactionIdea: z.string(),
    highlightValue: z.string().optional(),
    highlightLabel: z.string().optional(),
    featured: z.boolean().default(false),
    priority: z.number().default(99),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

export const collections = { projects };
