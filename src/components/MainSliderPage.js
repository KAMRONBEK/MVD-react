import React from "react";

function MainSliderPage({ key, sliderImage, text, link }) {
	return (
		<div key={key} className="carousel-item active">
			<img src={sliderImage} className="d-block w-100" alt="..." />
			<div className="banner-praz"></div>
			<div className="banner-text">
				<h4>{text}</h4>
				<a className="abs" href={link}>
					<button className="button-slide">Подробнее</button>
				</a>
			</div>
		</div>
	);
}

export default MainSliderPage;
