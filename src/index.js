import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
import House from './pages/House';
import About from './pages/About';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/house/:houseId" element={<House />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);
