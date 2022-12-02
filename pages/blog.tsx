import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import NextLink from 'next/link';
import path from 'path';
import { postFilePaths, POSTS_PATH } from '../lib/mdxUtils';
import { NextSeo } from 'next-seo';

const url = 'https://chrisandrews.vercel.app/blog';
const title = 'Blog 🔥';
const description = 'Software Engineer blog page';

export default function Blog({ posts }: any) {
	return (
		<div>
			<NextSeo
				title={title}
				description={description}
				canonical={url}
				openGraph={{ url, title, description }}
			/>
			<h1>Posts</h1>
			<ul>
				{posts.map((post: any) => (
					<li key={post.filePath}>
						<NextLink
							as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
							href={`/blog/[slug]`}
						>
							<div className="blog-post-card">
								{post.data.title} - {post.data.description}
							</div>
						</NextLink>
					</li>
				))}
			</ul>
		</div>
	);
}

export function getStaticProps() {
	const posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
		const { content, data } = matter(source);

		return {
			content,
			data,
			filePath,
		};
	});

	return { props: { posts } };
}
