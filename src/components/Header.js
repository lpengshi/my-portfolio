import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';

const Header = () => {
	const { header } = useContext(PortfolioContext);
	const { title, lang, description } = header;

	return (
		<div className="container">
			<h1>
				{title}
				<span>({lang})</span>
			</h1>
			<p>{description}</p>
		</div>
	);
};

export default Header;
