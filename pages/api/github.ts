import { NextApiRequest, NextApiResponse } from 'next';

/* eslint-disable import/no-anonymous-default-export */
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const url = 'https://api.github.com/users/halcyon-dayz/repos';
	const response = await fetch(url);
	const json = await response.json();
	const projectsList: any[] = [];

	json.forEach((p: any) => {
		projectsList.push({
			name: p.name,
			stars: p.stargazers_count,
			url: p.html_url,
			description: p.description,
			language: p.language,
		});
	});

	return res.status(200).json({
		repos: projectsList,
	});
};
