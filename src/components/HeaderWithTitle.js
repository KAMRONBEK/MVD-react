import React from "react";

let HeaderWithTitle = ({ withSlider }) => {
	if (withSlider) {
		return (
			<React.Fragment>
				<div className="banner-top">
					<div className="ban-left">
						<div>
							<a href="#">
								<i className="fa fa-facebook" aria-hidden="true"></i>
							</a>
							<a href="#">
								<i className="fa fa-twitter" aria-hidden="true"></i>
							</a>
							<a href="#">
								<i className="fa fa-telegram" aria-hidden="true"></i>
							</a>
							<a className="link-phone" href="http://tel:102">
								<i className="fa fa-phone" aria-hidden="true"></i>
								По происшествиям 102
							</a>
						</div>
					</div>
					<div className="ban-center">
						<div className="ban-center-top">
							<a href="#">
								<img src={Globe} />
							</a>
						</div>
						<div className="ban-center-bottom">
							<h3>МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ РЕСПУБЛИКИ УЗБЕКИСТАН</h3>
						</div>
					</div>
					<div className="ban-right">
						<div className="ban-right-inner">
							<div>
								<button className="dinamik ban-btn">
									<i className="fa fa-volume-up" aria-hidden="true"></i>
								</button>
								<button className="mobile ban-btn">
									<i className="fa fa-mobile" aria-hidden="true"></i>
								</button>
								<button className="eyes ban-btn">
									<img src={Eyes} />
								</button>
							</div>
							<form className="search-form">
								<button>
									<i className="fa fa-search" aria-hidden="true"></i>
								</button>
								<input type="text" name="search" placeholder="Поиск" />
							</form>
							<div className="lang">
								<div className="lang-show">
									<img src={Lang} />
									<a className="lang-link" href="#">
										Русский
									</a>
									<i className="fa fa-angle-down" aria-hidden="true"></i>
								</div>
								<ul className="lang-hide">
									<li>
										<a className="lang-link-hide" href="#">
											English
										</a>
									</li>
									<li>
										<a className="lang-link-hide" href="#">
											O'zbek
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}

	return (
		<React.Fragment>
			<div class="banner-top">
				<div class="ban-left">
					<div>
						<a href="#">
							<i class="fa fa-facebook" aria-hidden="true"></i>
						</a>
						<a href="#">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
						<a href="#">
							<i class="fa fa-telegram" aria-hidden="true"></i>
						</a>
						<a class="link-phone" href="#">
							<i class="fa fa-phone" aria-hidden="true"></i>
							По происшествиям 102
						</a>
					</div>
				</div>
				<div class="ban-center">
					<div class="ban-center-top">
						<a href="#">
							<img src="image/home/logo.png" />
						</a>
					</div>
					<div class="ban-center-bottom">
						<h3>МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ РЕСПУБЛИКИ УЗБЕКИСТАН</h3>
					</div>
				</div>
				<div class="ban-right">
					<div class="ban-right-inner">
						<div>
							<button class="dinamik ban-btn">
								<i class="fa fa-volume-up" aria-hidden="true"></i>
							</button>
							<button class="mobile ban-btn">
								<i class="fa fa-mobile" aria-hidden="true"></i>
							</button>
							<button class="eyes ban-btn">
								<img src="image/home/eyes.png" />
							</button>
						</div>
						<form class="search-form">
							<button>
								<i class="fa fa-search" aria-hidden="true"></i>
							</button>
							<input type="text" name="search" placeholder="Поиск" />
						</form>
						<div class="lang">
							<div class="lang-show">
								<img src="image/home/lang.png" />
								<a class="lang-link" href="#">
									Русский
								</a>
								<i class="fa fa-angle-down" aria-hidden="true"></i>
							</div>
							<ul class="lang-hide">
								<li>
									<a class="lang-link-hide" href="#">
										English
									</a>
								</li>
								<li>
									<a class="lang-link-hide" href="#">
										O'zbek
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default HeaderWithTitle;
