import React from 'react';

// assets
import FooterImage from "../assets/img/home/footer.png";
import FooPhone from "../assets/img/home/foo-phone.png";

let Footer = (props) => {
    return (
        <div>
            <footer className="footer-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 foo-one-col">
                            <div className="menu-foo">
                                <a href="#!">О министерстве</a>
                                <a href="#!">Пресс-центр</a>
                                <a href="#!">Госуслуги</a>
                                <a href="#!">Обрашения</a>
                                <a href="#!">Реестр НПА</a>
                                <a href="#!">Интерактивные услуги</a>
                                <a href="#!">Контакты</a>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <span className="foo-top-span">Мы в соц.сетях:</span>
                            <a className="foo-top-icon" href="#!"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a className="foo-top-icon" href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a className="foo-top-icon" href="#!"><i className="fa fa-telegram" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer-two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <aside className="foo-two-in">
                                <a href="#!">
                                    <img src={FooterImage} />
                                </a>
                                <a href="#!">
                                    <span>МИНИСТЕРСТВО ВНУТРЕННИХ<br /> ДЕЛ РЕСПУБЛИКИ УЗБЕКИСТАН</span>
                                </a>
                            </aside>
                        </div>
                        <div className="col-lg-2 col-md-6 foo-two-col">
                            <a href="#!"><img src={FooPhone} /></a>
                            <div>
                                <a className="footer-tel" href="tel:102">
                                    <p>По происшествиям</p>
                                    <h6>102</h6>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 foo-two-col">
                            <a href="#!"><img src={FooPhone} /></a>
                            <div>
                                <a className="footer-tel" href="tel:1102">
                                    <p>Телефон доверия</p>
                                    <h6>1102</h6>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 footer-ctrl">
                            <p>Внимание! Если Вы нашли ошибку в тексте, выделите ее и нажмите<br /> Ctrl + Enter для уведомлениия администрации </p>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer-three">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 foo-three-col">
                            <span>&copy; 2006-2019. Все права защищены</span>
                        </div>
                        <div className="col-lg-5 foo-three-col">
                            <span>При использовании материалов ссылка на<a href="#!"> www.mvd.uz </a>обязательна</span>
                        </div>
                        <div className="col-lg-3 foo-three-col">
                            <span>Разработка сайта: <a href="#!">Online Service Group</a></span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;  