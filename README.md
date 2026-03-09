# Rabbi Gene Wernick - Personal & Academic Website

This is the personal academic and professional website for Rabbi Eugene (Gene) Wernick, built with Astro. The site serves as a hub for his blog, research, publications, and professional history.

## Key Features

- **Dual Content Collections:** A standard blog for general updates and a specialized, chapter-based publication for serialized content.
- **Academic CV:** A fully dynamic CV page driven by structured TypeScript data.
- **Modern Tech Stack:** Built with Astro 5, MDX, Tailwind CSS 4, DaisyUI 5, and React.
- **Fast & Responsive:** Optimized for performance and readability across all devices.

## Content Management

### 1. General Blog (`blog`)

The main blog is located in `src/content/BlogPosts/`. Posts are written in Markdown or MDX.

- **Route:** `/blog/[slug]`
- **Adding Posts:** Create a new `.md` or `.mdx` file in the `BlogPosts` directory.

### 2. Specialized Publication (`book2`)

The "Antisemitism and the Tribe" publication functions as a second blog/book collection. It is designed for sequential reading with chapter navigation.

- **Content Location:** `src/content/book2/`
- **Route:** `/antisemitism-and-the-tribe/[slug]`
- **Format:** Supports chapters (e.g., `chapter1.mdx`, `chapter2.mdx`) with metadata like `title`, `date`, and `excerpt`.

### 3. Profile & Global Settings

Site-wide settings such as your name, social links, and theme preferences are managed in `src/settings.ts`.

- **`profile`**: Manage your name, slogan, and research interests.
- **`social`**: Update your email, LinkedIn, and YouTube links.
- **`template`**: Configure the website URL and DaisyUI themes (`lightTheme`, `darkTheme`).

### 4. CV & Professional Data

Your professional history, education, and full list of publications are managed in `src/data/cv.ts`.

- **`experiences`**: Add or update your rabbinical and teaching positions.
- **`education`**: Update your degrees and certifications.
- **`languageskills`**: List the languages you speak and your proficiency levels.
- **`publications`**: Manage the list of your published works, including links and cover images.

## Development

### Prerequisites

- Node.js (Version specified in `.nvmrc`)
- npm

### Local Development

```bash
npm install
npm run dev
```

### Build & Preview

```bash
npm run build
npm run preview
```

## Deployment

The site is configured for deployment via **Cloudflare Workers CI/CD** using Wrangler.

- **Configuration:** Managed in `wrangler.toml`.

_Based on the [Astro Academia](https://github.com/maiobarbero/astro_academia) template._
