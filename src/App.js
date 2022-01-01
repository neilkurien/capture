import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
//Global Style
import GlobalStyle from "./components/GlobalStyle";

import Nav from "./components/Nav";

//Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

import { About } from "./styles";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Routes>
				<Route path="/" element={<AboutUs />} />
				<Route path="/work" element={<OurWork />} />
				<Route path="/contact" element={<ContactUs />} />
			</Routes>
			<Outlet />
		</div>
	);
}

export default App;
