import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import api from "../api/api";

import Home from "../views/Home";
import Ministry from "../views/Ministry";
import News from "../views/News";
import GovServices from "../views/GovServices";
import Contact from "../views/Contact";
import NotFoundPage from "../views/NotFoundPage";
import Header from "../components/Header";
import Photos from "../views/Photos";
import NewsItem from "../components/NewsItem";
import DynamicComponent from "../components/DynamicComponent";

//example
import OwlCarousel from "../components/OwlCarousel";
import WrapperComponent from "../components/WrapperComponent";

let Routes = [
	{
		link: "/home",
		component: Home,
		isHome: true
	},
	{
		link: "/ministry",
		component: Ministry
	},
	{
		link: "/news",
		component: News
	},
	{
		link: "/gov-services",
		component: GovServices
	},
	{
		link: "/contact",
		component: Contact
	},
	{
		link: "/photos",
		component: Photos
	},
	{
		link: "/news/:alias",
		component: NewsItem
	}
];

const AppRouter = ({ location }) => {
	let [menus, setMenus] = useState([]);

	useEffect(() => {
		api.menus.get().then(res => {
			setMenus(res.data);
		});
	}, []);

	return (
		<div className="wrapper">
			<Header menus={menus} location={location} />
			<Switch>
				{/* <Route location={location} exact path="/" component={Home} />
			<Route location={location} path="/home" component={Home} />
			<Route location={location} path="/ministry" component={Ministry} />
			<Route location={location} path="/news" component={News} />
			<Route location={location} path="/gov-services" component={GovServices} />
			<Route location={location} path="/contact" component={Contact} /> */}
				{/* {Routes.map((route, index) => {
					return <Route path={route.link} component={route.component} />;
				})} */}
				{menus &&
					menus.length &&
					menus.map((menu, index) => {
						let temp = Routes.find(route => {
							{
								/* if (menu.alias == "") {
								if (route.link == "/") {
									console.log(route);
									console.log("route");

									return true;
								} else {
									return false;
								} */
							}
							return route.link.indexOf(menu.alias) !== -1;
						});
						if (temp) {
							{
								/* if (menu.childs) {
								return (
									<WrapperComponent menu={menu}>
										<Route path={temp.link} component={temp.component} />
									</WrapperComponent>
								);
							} */
							}

							if (temp.isHome) {
								console.log("home");
								return (
									<Route path={temp.link} exact component={temp.component} />
								);
							}
							let { component: TempComponent } = temp;
							return (
								<Route
									path={temp.link}
									exact
									component={() => <TempComponent menu={menu} />}
								/>
							);
						}

						return (
							<Route exact component={() => <DynamicComponent menu={menu} />} />
						);
					})}
				<Route location={location} path="/" component={Home} />

				<Route
					path="/news/:alias"
					component={props => <NewsItem props={props} />}
				/>

				<Route
					location={location}
					path="/example"
					component={() => <DynamicComponent />}
				/>
				<Route location={location} component={NotFoundPage} />
			</Switch>
		</div>
	);
};
export default withRouter(AppRouter);
