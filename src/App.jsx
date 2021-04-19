import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import { heroData } from './data/data';

function App() {
	const [hero, setHero] = useState({});
	useEffect(() => {
		setHero({ ...heroData });
	}, []);

	return (
		<PortfolioProvider value={{ hero }}>
			<div className="App">
				<Router>
					<NavBar />
					<div className="App-header">
						<Switch>
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
