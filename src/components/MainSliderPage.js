import React from "react";
    
function MainSliderPage({ sliderImage }) {
	return (
		<div className="carousel-item active">
			<img src={sliderImage} className="d-block w-100" alt="..." />
			<div className="banner-praz"></div>
			<div className="banner-text">
				<h4>
					Подведены итоги совершенствования деятельности служб миграции и
					оформления гражданства
				</h4>
				<a className="abs" href="#!">
					<button className="button-slide">Подробнее</button>
				</a>
			</div>
		</div>
	);
}

export default MainSliderPage;
