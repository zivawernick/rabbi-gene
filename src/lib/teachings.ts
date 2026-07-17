import { getCollection, type CollectionEntry } from "astro:content";

export type Teaching = CollectionEntry<"teachings">;

// Drafts are visible in dev, and in builds run with SHOW_DRAFTS=true
// (the `build:preview` script); production builds hide them.
const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === "true";

export async function getTeachings(): Promise<Teaching[]> {
  const entries = await getCollection("teachings");
  return entries
    .filter((teaching) => showDrafts || !teaching.data.draft)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}
