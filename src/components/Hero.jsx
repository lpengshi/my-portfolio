import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';

const Hero = () => {
	const { hero } = useContext(PortfolioContext);
	const { title, name, subtitle, button } = hero;

	const [isDesktop, setIsDesktop] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 769) {
			setIsDesktop(true);
			setIsMobile(false);
		} else {
			setIsMobile(true);
			setIsDesktop(false);
		}
	}, []);

	return (
		<div className="container jumbotron">
			<Fade
				left={isDesktop}
				bottom={isMobile}
				duration={1000}
				delay={500}
				distance="30px"
			>
				<h1 className="hero-title">
					{title} <span style={{ color: '#02aab0' }}>{name}</span>
					<br />
					{subtitle}
				</h1>
			</Fade>
			<Fade
				left={isDesktop}
				bottom={isMobile}
				duration={1000}
				delay={1000}
				distance="30px"
			>
				<p>
					<Link to="aboutme" duration={1000}>
						{button}
					</Link>
				</p>
			</Fade>
		</div>
	);
};

export default Hero;
