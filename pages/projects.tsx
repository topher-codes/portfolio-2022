import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
export default function ProjectPage() {
	return (
		<div>
			<h1>Projects</h1>
			<div className="card">
				<div className="card-body">
					<h4>An AI image generator built using Next.js 13</h4>
				</div>
				<Link href="https://ai-images-theta.vercel.app">
					<Image
						src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/314500520_3361677350755088_6241970959365848743_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=liNS2RRljgEAX-fa_X6&_nc_ht=scontent-sea1-1.xx&oh=00_AfCnXMykw6JG8_uQD37scWsWBk9sGqAAUT1oRK0ayDyZIg&oe=636B6814"
						alt=""
						width="600"
						height="400"
					/>
				</Link>
			</div>
			<div className="card">
				<div className="card-body">
					<h4>An older blog built using GatsbyJS</h4>
				</div>
				<Link href="https://thejourney.gtsb.io">
					<Image
						src="https://lh3.googleusercontent.com/pw/AL9nZEXYhzeXArZkMpf29voueVPoSyTnEU41GfeogDJ4g4jYH2aDKLZ-sYFxhm2Oa00aJKz7cxZSiC3jB1UOcugKJuVaQfxHgszYmMfcLTfdCTzUvJe5qEvV7cvl0lheSL5_1Svwqq_OTm0KCj6KM4n-wsg=w2454-h1476-no?authuser=0"
						alt=""
						width="600"
						height="400"
					/>
				</Link>
			</div>
			<div className="card">
				<div className="card-body">
					<h4>A work in progress, Tracker-TS is an inventory manager </h4>
					<p>written in Typescript using Pocketbase for backend</p>
				</div>
				<Link href="#">
					<Image
						src="https://lh3.googleusercontent.com/pw/AL9nZEUbFgYSwTx9y16U6S1JyP7VgKcskMtyzNmMVmEtToMw9R7ezGUwKe63-TkI7sCzB6jIPCG68U5wb9Q7_X4CcI_uQlgWZ8MgoIALaE3wcffYvMpGd4tpUXya4TYnDb84mpL_R0L_c-uKc-JEtp0iQeg=w2252-h1440-no?authuser=0"
						alt=""
						width="600"
						height="400"
					/>
				</Link>
			</div>
		</div>
	);
}
