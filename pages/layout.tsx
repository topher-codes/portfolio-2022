import Link from 'next/link';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body>
				<main>
					<nav>
						<Link href="/">Home</Link>
						<Link href="/blog">Blog</Link>
						<Link href="/projects">Projects</Link>
						<Link href="/contact">Contact</Link>
						<Link href="/special">Special ❤️</Link>
					</nav>
					<div className="container">{children}</div>
					<div className="footer">
						<p>Made with ❤️ from Portland, OR</p>
					</div>
				</main>
			</body>
		</html>
	);
}
