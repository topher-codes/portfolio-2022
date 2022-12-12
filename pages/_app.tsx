import '../globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Navbar>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
			<Analytics />
		</Navbar>
	);
}
