import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "../views/Home";
import Ministry from '../views/Ministry';
import News from '../views/News';
import GovServices from '../views/GovServices';
import Contact from '../views/Contact';
import NotFoundPage from '../views/NotFoundPage';

//example
import OwlCarousel from "../components/OwlCarousel";


const AppRouter = ({ location }) => (
	<div className="wrapper">
		<Switch>
			<Route location={location} exact path="/" component={Home} />
			<Route location={location} path="/home" component={Home} />
			<Route location={location} path="/ministry" component={Ministry} />
			<Route location={location} path="/news" component={News} />
			<Route location={location} path="/gov-services" component={GovServices} />
			<Route location={location} path="/contact" component={Contact} />

			<Route location={location} path="/example" component={OwlCarousel} />
			<Route location={location} component={NotFoundPage} />
		</Switch>
	</div>
);
export default withRouter(AppRouter);
