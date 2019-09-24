import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "../views/Home";
import OwlCarousel from "../components/OwlCarousel";

const AppRouter = ({ location }) => (
	<div className="wrapper">
		<Switch>
			<Route location={location} exact path="/" component={Home} />
			<Route location={location} path="/home" component={Home} />
			<Route location={location} path="/slider" component={OwlCarousel} />
			{/* <Route location={location} component={NotFoundPage} /> */}
		</Switch>
	</div>
);
export default withRouter(AppRouter);
