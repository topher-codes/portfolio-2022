import Link from 'next/link';
export default function ProjectPage({ repos }: any) {
	return (
		<div>
			{repos.map((p: any) => (
				<div className="blog-post-card" key={p.name}>
					<Link href={`/projects/${p.name}`} key={p.id}>
						<p>{p.name}</p>
						<p>{p.description}</p>
						<p>Stars: {p.stargazers_count}</p>
						<p>Language: {p.language}</p>
					</Link>
				</div>
			))}
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch('https://api.github.com/users/halcyon-dayz/repos');
	const repos = await res.json();
	return {
		props: {
			repos,
		},
	};
}
