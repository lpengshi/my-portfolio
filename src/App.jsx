import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import { contactData, heroData } from './data/data';

function App() {
	const [contact, setContact] = useState({});
	const [hero, setHero] = useState({});
	useEffect(() => {
		setContact({ ...contactData });
		setHero({ ...heroData });
	}, []);

	return (
		<PortfolioProvider value={{ contact, hero }}>
			<div className="App">
				<Router>
					<NavBar />
					<div className="App-header">
						<Switch>
							<Route path="/aboutme">
								<About />
							</Route>
							<Route path="/skills">
								<Skills />
							</Route>
							<Route path="/projects">
								<Projects />
							</Route>
							<Route path="/contact">
								<Contact />
							</Route>
							<Route path="/">
								<Hero />
							</Route>
						</Switch>
					</div>
					<Footer />
				</Router>
			</div>
		</PortfolioProvider>
	);
}

export default App;
