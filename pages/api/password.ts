import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	// Only allow POST
	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
		return;
	}

	const { password } = req.body;

	if (password === process.env.SECRET_PASSWORD) {
		res.status(200).json({ message: 'Success' });
	} else {
		res.status(401).json({ message: 'Unauthorized' });
	}
}
