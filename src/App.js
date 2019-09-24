import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppRouter from "./routers/AppRouter";

import "owl.carousel/dist/assets/owl.carousel.css";
import "./assets/lib/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/media.css";
import "./assets/lib/font-awesome/css/font-awesome.min.css";
import "./assets/lib/fancybox/dist/jquery.fancybox.min.css";
import "./assets/img/icon/uslugi/icomoon/style.css";

function App() {
	return (
		<Router>
			<Route component={AppRouter} />
		</Router>
	);
}

export default App;
