import React from "react";
import { Provider } from "react-redux";
import "./style.css";
import store from "./store";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

const App: React.FC = () => {
	return (
		// <Provider store={store}>
		<>
			<Router>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</nav>
				<Switch>
					<Route component={Home} exact path="/" />
					<Route component={About} path="/about" />
				</Switch>
			</Router>
		</>
		// </Provider>
	);
};

export default App;
