import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/" element={<AboutUs />}></Route>
					<Route path="/work" element={<OurWork />}></Route>
					<Route path="/contact" element={<ContactUs />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
