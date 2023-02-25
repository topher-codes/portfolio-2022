import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import BlogSEO from '../../components/BlogSEO';
import { postFilePaths, POSTS_PATH } from '../../lib/mdxUtils';
import { useRouter } from 'next/router';
import Image from '../../components/Image';

const components = {
	img: Image,
};
export default function PostPage({ source, frontMatter }: any) {
	const router = useRouter();
	const slug = router.asPath.replace('/blog', '');
	return (
		<div className="blog-container">
			<BlogSEO url={`https://topher.codes/blog/${slug}`} {...frontMatter} />

			<MDXRemote {...source} components={components} />
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
