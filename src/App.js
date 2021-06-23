import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import "./components/Fontawsomicons"

class App extends Component {
	renderRouter() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		);
	}

	render() {
		return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
	}

}

export default App;
