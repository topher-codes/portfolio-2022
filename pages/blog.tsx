import fs from 'fs';
import matter from 'gray-matter';
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
			{posts.map((post: any) => (
				<div key={post.filePath}>
					<NextLink
						as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
						href={`/blog/[slug]`}
					>
						<div className="blog-post-card">
							<h2>
								<b>{post.data.title}</b>
							</h2>

							<p>{post.data.description}</p>
							<p className="text-small">
								Date Published:{' '}
								{new Date(post.data.publishedAt).toLocaleDateString()}
							</p>
						</div>
					</NextLink>
				</div>
			))}
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
