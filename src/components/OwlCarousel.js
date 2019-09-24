import React from "react";
import OwlCarouselPage from "../components/OwlCarouselPage";

import Carousel from "react-owl-carousel";

import NextUs from "../assets/img/home/next.png";
import PrevUs from "../assets/img/home/prev.png";

function Page({ props }) {
	return (
		<div
			style={{
				display: "inline-block",
				height: 150,
				width: 200,
				backgroundColor: "black",
				zIndex: -999
			}}
		>
			<p
				style={{
					color: "white",
					fontSize: 40,
					padding: 40
				}}
			>
				{props}
			</p>
		</div>
	);
}

function Prev() {
	return (
		<button
			className="owl-prev"
			onClick={() => {
				ThisCarousel.next(100);
				console.alert(NextUs);
			}}
		>
			<img src={PrevUs} />
		</button>
	);
}

function Next() {
	return (
		<button
			className="owl-next"
			onClick={() => {
				ThisCarousel.next(100);
			}}
		>
			<img src={NextUs} />
		</button>
	);
}

let ThisCarousel;

function OwlCarousel() {
	return (
		// <div className="container uslugi-con con-row">
		<Carousel
			ref={ref => {
				ThisCarousel = ref;
			}}
			className="owl-theme"
			loop
			center
			navClass={["owl-prev owler", "owl-next owler"]}
			nav
			navContainerClass="owl-nav"
			margin={15}
			items={5}
			autoplayTimeout={3000}
			autoplay
			autoplaySpeed={500}
			navText={[
				"<a className='owl-next'><img src='assets/img/home/prev.png' /></a>",
				"<a className='owl-next'><img src='assets/img/home/next.png' /></a>"
			]}
		>
			<OwlCarouselPage spanClass text img />
			<OwlCarouselPage />
			<OwlCarouselPage />
			<OwlCarouselPage />
			<OwlCarouselPage />
		</Carousel>
		// </div>
	);
}

export default OwlCarousel;
