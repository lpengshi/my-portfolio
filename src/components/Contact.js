import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
	return (
		<div className="container">
			<h1>Contact Me</h1>
			<p>Email: pengshi.lai@gmail.com</p>
			<a href="https://github.com/lpengshi">
				<FontAwesomeIcon className="fa-2x" icon={faGithubSquare} />
			</a>
		</div>
	);
};

export default Contact;
