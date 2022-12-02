const title = "A Software Engineer's Site;";
const description =
	'The website of Chris Andrews, a Software Engineer from Portland, OR. He writes about web development, design, and Typescript 🔥';

const SEO = {
	title,
	description,
	canonical: 'https://chrisandrews.vercel.app',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://chrisandrews.vercel.app',
		title,
		description,
		images: [
			{
				url: 'https://example.io/favicon.ico',
				alt: title,
			},
		],
	},
	twitter: {
		handle: '@503dev',
		site: '@503dev',
		cardType: 'summary_large_image',
	},
};

export default SEO;
