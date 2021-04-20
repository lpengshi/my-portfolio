import './Contact.css';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithubSquare,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';

const Contact = () => {
	const { contact } = useContext(PortfolioContext);
	const { email, githubUrl, linkedInUrl } = contact;
	return (
		<div className="container">
			<h1>Contact Me</h1>
			<p>Email: {email} </p>
			<div>
				<a href={githubUrl}>
					<FontAwesomeIcon className="fa-2x icon" icon={faGithubSquare} />
				</a>
				<a href={linkedInUrl}>
					<FontAwesomeIcon className="fa-2x icon" icon={faLinkedinIn} />
				</a>
			</div>
		</div>
	);
};

export default Contact;
