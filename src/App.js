import React from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Components
import Nav from "./components/Nav";

//Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<AboutUs />} />
					<Route path="/work" element={<OurWork />}></Route>
					<Route path="/work/:id" element={<MovieDetail />} />
					<Route path="/contact" element={<ContactUs />} />
				</Routes>
				<Outlet />
			</AnimatePresence>
		</div>
	);
}

export default App;
