import { string } from "astro:schema";

export const Experiences = [
	{
		company: 'Or Olam',
		time: '2015-2025',
		title: 'Senior Rabbi',
		location: 'E 55th St NYC',
		description: '',
	},
	{
		company: 'Congregation Beth Ohr',
		time: '2003-2012',	 
		title: 'Senior Rabbi',
		location: 'Old Bridge, New Jersey',
		description: 'Instituted a Shabbat Lunch and Learn in which on a variety of topics have attracted double the amount of congregants who attend.  Many who have attended who were not members have since joined our congregation.'
	},
	{
		company: 'Oxford Circle Jewish Community Center ',
		time: '2000-2003',	 
		title: 'Senior Rabbi',
		location: 'Philadelphia, Pennsylvania',
		description: ''
	},
	{
		company: 'Temple Beth El',
		time: '1987-2000',	 
		title: 'Senior Rabbi',
		location: 'Allentown, Pennslyvania',
		description: ''
	},
	{	
		company: 'Gratz Hebrew College',
		location: 'Philadelphia, Pennsylvania',
	},
	{
		company: 'St. Joseph University',
		location: 'Philadelphia, Pennsylvania'
	},
    {
       	company: 'Arcadia College',
		location: 'Philadelphia, Pennsylvania'
	},
	{
       	company: 'Muhlenberg College',
		location: 'Allentown, Pennsylvania'
	},
	{
		company: 'University of Manitoba',
		location: 'Winnipeg, Manitoba, Canada'
	},
	{
		company: 'Patten Bible College',
		location: 'Oakland, California'
	},
	{
		company: 'The Lehrhaus UC Berkely',
		location: 'Oakland, California'
	},	

];

export const education = [
	{
		degree: 'Rabbinic Smicha',
		school: 'Jewish Theological Seminary',
		time: '1965',
		location: 'New York, NY',
		description: 'Talmud Honors Program',
	},
	{
		degree: "Masters in Hebrew Literature",
		school: "The Jewish Theological Seminary",
		time: "1965",
	},
	{
		school: 'City College of New York',
		degree: 'Bachelor of Arts with Honors',
      	time: "1960",
		location: 'New York, NY',
		description: 'Magna Cum Laude: Phi Beta Kappa, Phi Alpha Theta',
	},
];

export const skills = [

	/** Gratz Hebrew College Philadelphia, Pennsylvania
        St. Joseph University Philadelphia, Pennsylvania
       	Arcadia College Philadelphia, Pennsylvania
		Muhlenberg College Allentown Pennsylvania
		University of Manitoba, Winnipeg, Manitoba, Canada
		Patten Bible College Oakland, California
		The Lehrhaus UC Berkely, California**/
                  

	{
		title: '', 
		description: '',
	},
	{
		title: '', 
		description: '',
	},
	{	
		title: '',
		description: '',
	},
	{
		title: '',
		description: '',
	},
	{
		title: '',
		description: '',
	},
		{
		title: '',
		description: '',
	},
	{
		title: '',
		description: '',
	}

];

export const languageskills = [
	
	{
		title: 'Hebrew', 
		description: 'Fluent',
	},
	{
		title: 'Aramaic', 
		description: 'Fluent',
	},
	{	
		title: 'Yiddish',
		description: 'Fluent',
	},
	{
		title: 'German',
		description: 'Strong working knowledge',
	},
	{
		title: 'French',
		description: 'Strong working knowledge',
	},
		{
		title: 'Greek',
		description: 'Knowledgeable',
	},
	{
		title: 'Latin',
		description: 'Knowledgeable',
	}

	// {
	// 	title: 'Experimental Techniques',
	// 	description: 'Spectroscopy, Isolation of Radioactive Elements, Radiation Measurement',
	// },
];
export const publications = [
	{
	 	title: 'Antisemitism and the Tribe',
	 	authors: 'Rabbi Eugene A. Wernick',
	 	journal: '',
	 	time: '2026',
	 	link: '/antisemitism-and-the-tribe/1',
	 	abstract: 'A historical examination of what it means to be a Jew.  Not just a religion or a nation but a familial relationship going back to its origins in the land of Israel. An extended family with feelings of kinship that does not obviate differences of opinions but celebrates them. An easy target for those who wish to hate someone or something because you will always be able to find some Jew who believes or does something you do not believe or hate.',
		coverImage: ''
	},
	{
		title: 'A Gateway to the Kabbalah',
		authors: 'Rabbi Eugene A. Wernick',
		journal: '',
		time: '2015',
		link: 'https://www.bloomsbury.com/us/gateway-to-the-kabbalah-9780838100738/',
		abstract: 'This publication offers the reader an accessible and chronological presentation of the history and development of this most unique of philosophies. What were the political influences on its development? How much impact did other cultures have? Learn and explore as you go along on this historical journey. Perfect for adult education sessions or Hebrew high school discussions.',
		coverImage: '/src/assets/a-gateway-to-the-kabbalah-cover.png'
	},
];
