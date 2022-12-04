import Link from 'next/link';
import { useRouter } from 'next/router';

const Project = () => {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<div>
			<h2>Project: {pid}</h2>
			<div className="card">
				Link to project --- &nbsp;
				<Link href={`https://github.com/halcyon-dayz/${pid}`} target="_blank">
					{pid}
				</Link>{' '}
			</div>
		</div>
	);
};

export default Project;
