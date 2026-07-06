export const CATEGORY_SLUGS: Record<string, string> = {
  "Torah Portions & Holidays": "torah-portions-holidays",
  Commentary: "commentary",
};

export const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([label, slug]) => [slug, label]),
);
