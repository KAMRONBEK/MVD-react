import React from "react";
import {
	YMaps,
	Map,
	Placemark,
	FullscreenControl,
	GeolocationControl,
	RulerControl,
	TrafficControl,
	TypeSelector,
	ZoomControl
} from "react-yandex-maps";

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

// assets
import Globe from "../assets/img/home/logo.png";
import Eyes from "../assets/img/home/eyes.png";
import Lang from "../assets/img/home/lang.png";
import Eye from "../assets/img/news/eye.png";

let Contact = ({menu}) => {

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
                          &nbsp;&nbsp;По происшествиям 102
                      </a>
                  </div>
              </div>
              <div class="ban-center">
                  <div class="ban-center-top">
                      <a href="#">
                          <img src={Globe} />
                      </a>
                  </div>
                  <div class="ban-center-bottom">
                      <h3>
                          {/* МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ РЕСПУБЛИКИ УЗБЕКИСТАН */}
                          {menu&&menu.descriptionRu}
              </h3>
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
                              <img src={Eyes} />
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
                              <img src={Lang} />
                              <a class="lang-link" href="#"> &nbsp;Русский</a>
                              <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </div>
                          <ul class="lang-hide">
                              <li><a class="lang-link-hide" href="#">English</a></li>
                              <li><a class="lang-link-hide" href="#">O'zbek</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <section class="full-menu">
              <div class="container">
                  <div class="row full-row">
                      <div class="col-md-3">
                          <ul class="full-menu-ul">
                              <li><a class="full-top-link" href="home.html">Главная</a></li>
                          </ul>
                      </div>
                      <div class="col-md-3">
                          <ul class="full-menu-ul">
                              <li><a class="full-top-link" href="ruko.html">О министерстве</a></li>
                          </ul>
                      </div>
                      <div class="col-md-3">
                          <ul class="full-menu-ul">
                              <li><a class="full-top-link" href="news.html">Пресс-центр</a></li>
                              <li><a href="#!">Международное сотрудничество</a></li>
                              <li><a href="#!">Профилактика правонарушений</a></li>
                              <li><a href="#!">Деятельность органов внутренних дел</a></li>
                              <li><a href="#!">Работа с кадрами</a></li>
                              <li><a href="pro.html">Без вести пропавшие</a></li>
                              <li><a href="#!">Раздел «Внимание розыск!»</a></li>
                              <li><a href="#!">Фотогалерея</a></li>
                              <li><a href="#!">Видеотека</a></li>
                          </ul>
                      </div>
                      <div class="col-md-3">
                          <ul class="full-menu-ul">
                              <li><a class="full-top-link" href="#!">Госуслуги</a></li>
                          </ul>
                      </div>
                      <div class="col-md-3">
                          <ul class="full-menu-ul">
                              <li><a class="full-top-link" href="#!">Обращения</a></li>
                          </ul>
                      </div>
                      <div class="col-md-3">
                          <ul class="full-menu-ul">
                              <li><a class="full-top-link" href="#!">Реестр НПА</a></li>
                          </ul>
                      </div>
                      <div class="col-md-3">
                          <ul class="full-menu-ul">
                              <li><a class="full-top-link" href="#!">Интерактивные услуги</a></li>
                          </ul>
                      </div>
                      <div class="col-md-3">
                          <ul class="full-menu-ul">
                              <li><a class="full-top-link" href="#!">Контакты</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
          <section class="hmobil">
              <ul>
                  <li class="mob-li"><a href="home.html">Главная</a></li>
                  <li class="mob-li">

                      <button class="min-btn m-all">
                          <span>О министерстве</span>
                          <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                      <ul class="min-ul padmenu">
                          <li class=""><a href="#!">История министерства</a></li>
                          <li class=""><a href="ruko.html">Руководство</a></li>
                          <li class=""><a href="#!">Структура</a></li>
                          <li class=""><a href="#!">Задачи, функции и права</a></li>
                          <li class=""><a href="#!">Подразделения министерства</a></li>
                          <li class=""><a href="#!">Подведомственные учреждение министерства</a></li>
                          <li class=""><a href="#!">Прием на службу</a></li>
                          <li class=""><a href="#!">Термины</a></li>
                      </ul>
                  </li>
                  <li class="mob-li">
                      <button class="press-btn m-all">
                          <span>Пресс-центр</span>
                          <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </button>

                      <ul class="press-ul padmenu">
                          <li class="active"><a href="news.html">Международное сотрудничество</a></li>
                          <li class=""><a href="#!">Профилактика правонарушений</a></li>
                          <li class=""><a href="#!">Деятельность органов внутренних дел</a></li>
                          <li class=""><a href="#!">Работа с кадрами</a></li>
                          <li class=""><a href="pro.html">Без вести пропавшие</a></li>
                          <li class=""><a href="#!">Раздел «Внимание розыск!»</a></li>
                          <li class=""><a href="foto.html">Фотогалерея</a></li>
                          <li class=""><a href="video.html">Видеотека</a></li>
                      </ul>
                  </li>
                  <li class="mob-li">
                      <button class="press-btn m-all">
                          <span>Госуслуги</span>
                          <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                      <ul class="padmenu">
                          <li class=""><a href="">Перечень государственных услуг</a></li>
                          <li class=""><a href="gos.html">Организация и безопасность дорожного движения</a></li>
                          <li class=""><a href="">Разрешительно-лицензионная деятельность</a></li>
                          <li class=""><a href="">Информационно-справочная деятельность</a></li>
                          <li class=""><a href="">Паспортно-визовая деятельность</a></li>
                          <li class=""><a href="">Кадровая деятельность</a></li>
                          <li class=""><a href="">Экспертно-криминалистические подразделения</a></li>
                          <li class=""><a href="">Полезная информация</a></li>
                          <li class=""><a href="">Виды используемых бланков</a></li>
                      </ul>
                  </li>
                  <li class="mob-li">
                      <button class="press-btn m-all">
                          <span>Обращения</span>
                          <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                      <ul class="padmenu">
                          <li class=""><a href="">Порядок обращений</a></li>
                          <li class=""><a href="contact.html">Контакты</a></li>
                          <li class=""><a href="#!">График обращений граждан</a></li>
                          <li class=""><a href="#!">Часто задаваемые вопросы</a></li>
                          <li class=""><a href="#!">Обращения граждан</a></li>
                          <li class=""><a href="#!">Политика защиты информации</a></li>
                          <li class=""><a href="#!">Регламент телефона доверия</a></li>
                      </ul>
                  </li>
                  <li class="mob-li"><a href="#">Реестр НПА</a></li>
                  <li class="mob-li"><a href="#">Интерактивные услуги</a></li>
                  <li class="mob-li"><a href="#">Контакты</a></li>
              </ul>
          </section>
          <main class="menu news">
              <div class="mfa-link">
                  <div class="m-left">
                      <a href="#!">
                          <i class="fa fa-phone" aria-hidden="true"></i>
                          По происшествиям 102
              </a>
                  </div>
                  <div class="m-center">
                      <a href="#!">
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="#!">
                          <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="#!">
                          <i class="fa fa-telegram" aria-hidden="true"></i>
                      </a>
                  </div>
                  <div class="m-right">
                      <form class="search-form">
                          <button>
                              <i class="fa fa-search" aria-hidden="true"></i>
                          </button>
                          <input type="text" name="search" placeholder="Поиск" />
                      </form>
                  </div>
              </div>
              <div class="m-lang-div">
                  <a href="#!">Русский</a>
                  <a href="#!">O'zbekcha</a>
                  <a href="#!">English</a>
              </div>
              <div class="m-logo">
                  <a href="#!">
                      <img src="image/home/logo.png" />
                  </a>
              </div>
              <div class="menu-ul-div">
                  <ul class="menu-ul">
                      <li class="m-row-li"><a href="home.html">Главная</a></li>
                      <li class="m-row-li"><a href="ruko.html">О министерстве</a></li>
                      <li class="m-row-li"><a href="news.html">Пресс-центр</a></li>
                      <li class="m-row-li"><a href="#">Госуслуги</a></li>
                      <li class="m-row-li"><a href="#">Обращения</a></li>
                      <li class="m-row-li"><a href="#">Реестр НПА</a></li>
                      <li class="m-row-li"><a href="#">Интерактивные услуги</a></li>
                      <li class="m-row-li"><a href="#">Контакты</a></li>
                  </ul>
              </div>
          </main>
          <section class="news-banner nb">
              <div class="nb-image-div"></div>
          </section>
          <section class="ns">
              <div class="container con-left">
                  <div class="news-heading">
                      <h3 class="news-head">
                          {/* title */}
                      </h3>
                  </div>
              </div>

              <div class="container con-pad">
                  <div class="ns-left">
                      <div class="news-right-div">
                          <h5>Пресс-центр</h5>
                          <ul class="news-right-ul">
                              <li class="active"><a href="news.html">Международное сотрудничество</a></li>
                              <li class=""><a href="#!">Профилактика правонарушений</a></li>
                              <li class=""><a href="#!">Деятельность органов внутренних дел</a></li>
                              <li class=""><a href="#!">Работа с кадрами</a></li>
                              <li class=""><a href="pro.html">Без вести пропавшие</a></li>
                              <li class=""><a href="#!">Раздел «Внимание розыск!»</a></li>
                              <li class=""><a href="foto.html">Фотогалерея</a></li>
                              <li class=""><a href="video.html">Видеотека</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-xl-9 col-md-8 col-sm-6 ns-col-left">
                          <div class="container">
                              <div class="row">
                              <div class="col-xl-12">
          <aside class="as-all contact-as">
              <div class="container">
                  <div class="row">
                      <div class="col-xl-6 contact-left">
                          <h6>Адрес</h6>
                          <p>
                              100029, Республика Узбекистан, город Ташкент,улица Юнус Ражабий,
                              1
                          </p>
                          <h6>Ориентир</h6>
                          <p>
                              Станция метро «Космонавтлар», супермаркет «Корзинка»
                              (бывш.Туркменский рынок)
                          </p>
                          <h6>Время работы</h6>
                          <p>Понедельник - Пятница с 9:00 до 18:00,</p>
                          <p>обеденный перерыв с 13:00 до 14:00</p>
                          <h6>Телефоны</h6>
                          <p>Канцелярия +998 (71) 231-33-36</p>
                          <p>Телефон: +998 (71) 231-36-50</p>
                          <p>Факс +998 (71) 233-38-82</p>
                          <h6>Е-mail</h6>
                          <p>info@mvd.uz</p>
                      </div>
                      <div class="col-xl-6">
                          <YMaps>
                              <div
                                  className="map-contact"
                                  style={{
                                      display: "flex",
                                      flex: 1,
                                      flexGrow: 1
                                  }}
                              >
                                  <Map
                                      defaultState={{ center: [41, 69], zoom: 10 }}
                                      height={400}
                                      width={480}
                                  >
                                      <FullscreenControl />
                                      <GeolocationControl />
                                      <RulerControl />
                                      <TrafficControl />
                                      <Placemark
                                          geometry={[41, 69]}
                                          // options={(iconColor = "islands#icon")}
                                      />
                                      <TypeSelector options={{ float: "right" }} />
                                      <ZoomControl />
                                  </Map>
                              </div>
                          </YMaps>
                          {/* <div class="map-contact">
                              <script
                                  type="text/javascript"
                                  charset="utf-8"
                                  async
                                  src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A830fdb01ee74cd5b99dc0bde22c2c199aff23c7795f5df04f3323f099934de2f&amp;width=100%25&amp;height=400&amp;lang=en_FR&amp;scroll=false"
                              ></script>
                          </div> */}
                      </div>
                  </div>
              </div>
          </aside>
      </div>
                              </div>
                          </div>
                         {/* pagination */}
                          {/* <div class="ns-pagination">
                              <nav aria-label="Page navigation example">
                                  <ul class="pagination">
                                      <li class="page-item">
                                          <a class="page-link next-prev" href="#" aria-label="Previous">
                                              <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                                              <span class="sr-only">Previous</span>
                                          </a>
                                      </li>
                                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                                      <li class="page-item active"><a class="page-link" href="#">4</a></li>
                                      <li class="page-item"><a class="page-link" href="#">5</a></li>
                                      <li class="page-item"><a class="page-link" href="#">6</a></li>
                                      <li class="page-item">
                                          <a class="page-link next-prev" href="#" aria-label="Next">
                                              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                              <span class="sr-only">Next</span>
                                          </a>
                                      </li>
                                  </ul>
                              </nav>
                          </div> */}
                      </div>
                      <div class="col-xl-3 col-md-4 col-sm-6 ns-right">
                          <div class="news-right-div">
                              <h5>Пресс-центр</h5>
                              <ul class="news-right-ul">
                                  <li class="active"><a href="news.html">Международное сотрудничество</a></li>
                                  <li class=""><a href="#!">Профилактика правонарушений</a></li>
                                  <li class=""><a href="#!">Деятельность органов внутренних дел</a></li>
                                  <li class=""><a href="#!">Работа с кадрами</a></li>
                                  <li class=""><a href="pro.html">Без вести пропавшие</a></li>
                                  <li class=""><a href="#!">Раздел «Внимание розыск!»</a></li>
                                  <li class=""><a href="foto.html">Фотогалерея</a></li>
                                  <li class=""><a href="video.html">Видеотека</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <Footer />
          <section class="section-hide">
              <div class="ctrl-enter">
                  <form>
                      <p>Muallifga xatolar bo'yicha xabar berish:</p>
                      <hr />
                      <div class="form-group">
                          <label for="formGroupExampleInput">Matn xato bilan:</label>
                          <textarea id="text-area-xato" class="form-control" rows="4" cols="36"></textarea>
                      </div>
                      <div class="form-group">
                          <label for="formGroupExampleInput2">Sizning izoxingiz yoki to`g`ri versiya:</label>
                          <textarea id="text-area-right" class="form-control" rows="4" cols="36"></textarea>
                      </div>
                      <div class="ctrl-btn">
                          <button class="btn-bekor" type="button">Bekor qilish</button>
                          <button type="submit">Jo'natish</button>
                      </div>
                  </form>
              </div>
          </section>
  </React.Fragment>
	);
};

export default Contact;
