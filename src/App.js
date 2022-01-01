import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";

//Router
import { Link } from "react-router-dom";
import { About } from "./styles";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
		</div>
	);
}

export default App;
