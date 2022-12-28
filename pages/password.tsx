import { useRouter } from 'next/router';
import { useState } from 'react';

const Password = () => {
	const [password, setPassword] = useState('');
	const handleChange = (e) => {
		setPassword(e.target.value);
	};
	const router = useRouter();
	const handleSubmit = async () => {
		// Send the password to the API

		const res = await fetch('/api/password', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				password: password,
			}),
		});

		if (res.status === 200) {
			// Redirect to the special page\
			router.push('/special');
			console.log('success');
		}

		if (res.status === 401) {
			// Show an error message
			console.log('error');
		}
	};
	return (
		<div className="card">
			<div className="card-body">
				<h1>Special Page</h1>
				<div className="form">
					<label htmlFor="secret">Password</label>
					<input type="password" onChange={handleChange} />
					<button type="submit" className="special-btn" onClick={handleSubmit}>
						Enter
					</button>
				</div>
			</div>
		</div>
	);
};

export default Password;
