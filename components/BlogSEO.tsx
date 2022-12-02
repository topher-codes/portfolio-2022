import { NextSeo, ArticleJsonLd } from 'next-seo';

import React from 'react';

const BlogSEO = ({ title, description, publishedAt, url, image }: any) => {
	const date = new Date(publishedAt).toDateString();
	const featuredImage: any = {
		url: `https://example.io/${image}`,
	};
	return (
		<>
			<NextSeo
				title={`${title} - Chris Andrews`}
				description={description}
				canonical={url}
				openGraph={{
					type: 'article',
					article: {
						publishedTime: date,
					},
					url,
					title,
					description: description,
					images: [featuredImage],
				}}
			/>
			<ArticleJsonLd
				authorName="Chris Andrews"
				dateModified={date}
				datePublished={date}
				description={description}
				images={[featuredImage]}
				publisherName="Chris Andrews"
				title={title}
				url={url}
			/>
		</>
	);
};

export default BlogSEO;
