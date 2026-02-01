export const profile = {
	fullName: 'Eugene A. Wernick',
	shortName: 'Rabbi Gene Wernick',
	slogan: 'Rabbi, Author, Educator, Speaker',
	title: 'Rabbi',
	institute: '',
	author_name: 'Rabbi Eugene A. Wernick', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'rabbigenew@gmail.com',
	linkedin: 'https://www.linkedin.com/in/eugene-wernick-29132894/',
	scholar: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'corporate', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'forest', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Rabbi Gene Wernick',
	default_description: 'Rabbi Eugene (Gene) Wernick is a Rabbi, Educator and Author.',
	default_image: '/images/profile_pictures.jpg',
}
