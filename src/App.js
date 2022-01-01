import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";

import Nav from "./components/Nav";

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
