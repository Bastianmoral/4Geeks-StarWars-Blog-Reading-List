import '../App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home  from "./views/Home";
import People from "./views/People";
import Planets from "./views/Planets";
import injectContext from "./store/appContext";

import  Navbar  from "./component/Navbar";
import { Footer } from "./component/footer";
import Vehicles from "./views/Vehicles";
import Favorites from "./views/Favorites";
import Details from "./views/details";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
 						<Route exact path="/favorites">
							<Favorites />
						</Route>
						<Route exact path="/details">
							<Details />
						</Route> 
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
