import React from "react";

function OwlCarouselPage({ imageUrl, titleRu, link, type }) {
	return (
		<div className="item">
			{type == "link" ? (
				<aside className="uslugi-in">
					<div className="us-icon-div">
						<img src={imageUrl} />
					</div>
					<a className="polez-link-bottom" href={link}>
						{titleRu}
					</a>
				</aside>
			) : (
				<aside className="polez-inner">
					<a className="polez-link-top" href="#!">
						<img src={imageUrl} />
					</a>
					{/* <a className="polez-link-bottom" href="#!">Официальный веб-сайт <br /> Президента Республики <br />Узбекистан</a> */}
					<a className="polez-link-bottom" href={link}>
						{titleRu}
					</a>
				</aside>
			)}
		</div>
	);
}

export default OwlCarouselPage;
