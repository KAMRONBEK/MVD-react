import React from "react";
import Slider from "react-slick";

import sliderImage1 from "../assets/img/home/slide1.jpg";
import sliderImage2 from "../assets/img/home/slide6.jpg";
import sliderImage3 from "../assets/img/home/slide8.jpg";

import MainSliderPage from "./MainSliderPage";

function Prev() {
	return (
		<a
			className="sliderPrev"
			onClick={() => {
				ThisSlider.slickPrev();
			}}
		></a>
	);
}

function Next() {
	return (
		<a
			className="sliderNext"
			onClick={() => {
				ThisSlider.slickNext();
			}}
		></a>
	);
}

let ThisSlider;

function MainSlider({ slider }) {
	return (
		<div className="carousel slide carousel-fade">
			<div className="carousel-inner">
				<Slider
					ref={ref => {
						ThisSlider = ref;
					}}
					speed={500}
					slidesToShow={1}
					slidesToScroll={1}
					infinite={true}
					accessibility={false}
					prevArrow={<Prev />}
					nextArrow={<Next />}
					vertical={true}
					fade={true}
					autoplay={true}
					autoplaySpeed={5000}
					cssEase="ease"
				>
					{slider &&
						slider.map((slider, index) => {
							return (
								<MainSliderPage
									key={index}
									sliderImage={slider && slider.imageUrl}
									text={slider.titleRu}
									link={slider.link}
								/>
							);
						})}
					{/* <MainSliderPage sliderImage={sliderImage1} />
					<MainSliderPage sliderImage={sliderImage2} />
					<MainSliderPage sliderImage={sliderImage3} /> */}
				</Slider>
			</div>
		</div>
	);
}

export default MainSlider;
