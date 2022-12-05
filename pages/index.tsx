import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const url = 'https://chrisandrews.vercel.app';
const title = 'Chris 🔥';
const description = 'Software Engineer home page';

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
						src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/295039461_3274098816179609_5255628418250824421_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4k-mhZ1SlnYAX8rCcCH&_nc_ht=scontent-sea1-1.xx&oh=00_AfAmFohl7GJ2O8KLpi0yaS43g2wK6vEtWcf8PgIEmkqTng&oe=638A6279"
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
						<a href="https://www.linkedin.com/in/chris-andrews-185356259/">
							<AiFillLinkedin />
						</a>
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
