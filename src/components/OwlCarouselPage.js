import React from "react";

function OwlCarouselPage({ spanClass, text, img }) {
	return (
		<div className="item">
			{spanClass ? (
				<aside className="uslugi-in">
					<div className="us-icon-div">
						<span className={spanClass}></span>
					</div>
					<p>{text}</p>
				</aside>
			) : (
					<aside className="polez-inner">
						<a className="polez-link-top" href="#!">
							<img src={img} />
						</a>
						{/* <a className="polez-link-bottom" href="#!">Официальный веб-сайт <br /> Президента Республики <br />Узбекистан</a> */}
						<a className='polez-link-bottom' href="#!">{text}</a>
					</aside>
				)}
		</div>
	);
}

export default OwlCarouselPage;
