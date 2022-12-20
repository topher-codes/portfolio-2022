import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const url = 'https://topher.codes';
const title = 'Chris ';
const description = 'Topher the Dev!';

const HomePage: NextPage = () => {
	return (
		<div>
			<NextSeo
				title={title}
				description={description}
				canonical={url}
				openGraph={{ url, title, description }}
			/>
			<div className="card" id="card-photo">
				<div className="card-img">
					<Image
						src="https://avatars.githubusercontent.com/u/82462768?v=4"
						width="300"
						height="300"
						alt="nothing"
					/>
				</div>
				<div className="card-body">
					<p>Chris Andrews</p>
					<p>Software Engineer</p>
					<div className="card-links">
						<Link href="https://github.com/halcyon-dayz">
							<AiFillGithub />
						</Link>
						<Link
							href="https://www.linkedin.com/in/chris-andrews-185356259/"
							target="_blank"
						>
							<AiFillLinkedin />
						</Link>
						<a href="mailto:andrewsc33@icloud.com">
							<AiOutlineMail />
						</a>
					</div>
				</div>
			</div>
			<div className="card" id="card-about-stats">
				<p>Stats</p>
				<p>
					<strong>Javascript</strong>: 5 years
				</p>
				<p>
					<strong>React</strong>: 3 years
				</p>
				<p>
					<strong>Typescript</strong>: 3 years
				</p>
				<p></p>
			</div>
			<div className="card" id="card-about">
				<ul>
					<li>I can build REST API</li>
					<li>I can build 100% typesafe React apps</li>
					<li>I use SQL backend as well as noSQL / GraphQL</li>
					<li>I use frameworks such as NextJS</li>
					<li>
						Check out my <Link href="/projects">projects</Link>!
					</li>
				</ul>
			</div>
		</div>
	);
};
export default HomePage;
