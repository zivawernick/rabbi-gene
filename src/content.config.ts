// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/BlogPosts",
  }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    category: z.enum(["Torah Portions & Holidays", "Commentary"]).optional(),
    topic: z.enum(["Israel & Politics", "Antisemitism", "Peace & Reflection"]).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const teachings = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/Teachings",
  }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    // Present = video teaching ("Watch"); absent = written lesson ("Read")
    youtubeId: z.string().optional(),
    duration: z.string().optional(),
    category: z.enum(["Torah Portions & Holidays", "Commentary"]).optional(),
    topic: z
      .enum(["Israel & Politics", "Antisemitism", "Peace & Reflection"])
      .optional(),
    tags: z.array(z.string()).optional(),
    // Optional card image (path under public/). Without one the card renders a
    // generated "jacket" — most videos share a near-identical Zoom thumbnail,
    // so real stills are not usable as cover art.
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const book2 = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/book2",
  }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    slug: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, teachings, book2 };
