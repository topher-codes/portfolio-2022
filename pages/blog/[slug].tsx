import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import path from 'path';
import BlogSEO from '../../components/BlogSEO';
import { postFilePaths, POSTS_PATH } from '../../lib/mdxUtils';
import { useRouter } from 'next/router';

export default function PostPage({ source, frontMatter }: any) {
	const router = useRouter();
	const slug = router.asPath.replace('/blog', '');
	return (
		<div>
			<BlogSEO
				url={`https://chrisandrews.vercel.app/blog/${slug}`}
				{...frontMatter}
			/>

			<MDXRemote {...source} />
		</div>
	);
}

export const getStaticProps = async ({ params }: any) => {
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);

	const mdxSource = await serialize(content, {
		// Optionally pass remark/rehype plugins
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.mdx?$/, ''))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
