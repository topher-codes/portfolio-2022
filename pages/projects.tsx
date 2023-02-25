import Link from 'next/link';
export default function ProjectPage({ repos }: any) {
	return (
		<div>
			{repos.map((p: any) => (
				<div key={p.name}>
					<Link href={`/projects/${p.name}`} key={p.id}>
						<p className="projects">{p.name}</p>
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
