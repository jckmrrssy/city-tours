import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import TourList from "./components/TourList";
import "./App.scss";

class App extends Component {
	render() {
		return (
			<main>
				<NavBar />
				<TourList />
			</main>
		);
	}
}

export default App;
