import React from "react";
import OwlCarouselPage from "../components/OwlCarouselPage";

import Carousel from "react-owl-carousel";

import NextUs from "../assets/img/home/next.png";
import PrevUs from "../assets/img/home/prev.png";

let ThisCarousel;

function OwlCarousel({ list }) {
	// alert(list);

	return (
		// <div className="container uslugi-con con-row">
		<Carousel
			ref={ref => {
				ThisCarousel = ref;
			}}
			className="owl-theme"
			loop
			center
			navClass={["owl-prev", "owl-next"]}
			nav
			navContainerClass="owl-nav disabled"
			margin={15}
			items={5}
			autoplayTimeout={3000}
			autoplay
			autoplaySpeed={500}
			navText={[
				"<img src='assets/img/home/prev.png' />",
				"<img src='assets/img/home/next.png' />"
			]}
		>
			{list && list.map(({ imageUrl,titleRu,link,type	 }) => <OwlCarouselPage {...{ imageUrl,titleRu,link,type }} />)}
		</Carousel>
		// </div>
	);
}

export default OwlCarousel;
