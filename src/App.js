import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import { headerData } from './data/data';

function App() {
	const [header, setHeader] = useState({});
	useEffect(() => {
		setHeader({ ...headerData });
	}, []);

	return (
		<PortfolioProvider value={{ header }}>
			<div className="App">
				<Router>
					<NavBar />
					<div className="App-header">
						<Switch>
							<Route path="/contact">
								<Contact />
							</Route>
							<Route path="/">
								<Header />
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
