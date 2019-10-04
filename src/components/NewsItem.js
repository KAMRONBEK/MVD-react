import React from "react";

let NewsItem = ({ alias }) => {

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
			<section class="full-menu">
				<div class="container">
					<div class="row full-row">
						<div class="col-md-3">
							<ul class="full-menu-ul">
								<li>
									<a class="full-top-link" href="home.html">
										Главная
									</a>
								</li>
							</ul>
						</div>
						<div class="col-md-3">
							<ul class="full-menu-ul">
								<li>
									<a class="full-top-link" href="ruko.html">
										О министерстве
									</a>
								</li>
							</ul>
						</div>
						<div class="col-md-3">
							<ul class="full-menu-ul">
								<li>
									<a class="full-top-link" href="news.html">
										Пресс-центр
									</a>
								</li>
								<li>
									<a href="news.html">Международное сотрудничество</a>
								</li>
								<li>
									<a href="#!">Профилактика правонарушений</a>
								</li>
								<li>
									<a href="#!">Деятельность органов внутренних дел</a>
								</li>
								<li>
									<a href="#!">Работа с кадрами</a>
								</li>
								<li>
									<a href="pro.html">Без вести пропавшие</a>
								</li>
								<li>
									<a href="#!">Раздел «Внимание розыск!»</a>
								</li>
								<li>
									<a href="foto.html">Фотогалерея</a>
								</li>
								<li>
									<a href="#!">Видеотека</a>
								</li>
							</ul>
						</div>
						<div class="col-md-3">
							<ul class="full-menu-ul">
								<li>
									<a class="full-top-link" href="#!">
										Госуслуги
									</a>
								</li>
							</ul>
						</div>
						<div class="col-md-3">
							<ul class="full-menu-ul">
								<li>
									<a class="full-top-link" href="#!">
										Обращения
									</a>
								</li>
							</ul>
						</div>
						<div class="col-md-3">
							<ul class="full-menu-ul">
								<li>
									<a class="full-top-link" href="#!">
										Реестр НПА
									</a>
								</li>
							</ul>
						</div>
						<div class="col-md-3">
							<ul class="full-menu-ul">
								<li>
									<a class="full-top-link" href="#!">
										Интерактивные услуги
									</a>
								</li>
							</ul>
						</div>
						<div class="col-md-3">
							<ul class="full-menu-ul">
								<li>
									<a class="full-top-link" href="#!">
										Контакты
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section class="hmobil">
				<ul>
					<li class="mob-li">
						<a href="home.html">Главная</a>
					</li>
					<li class="mob-li">
						<button class="min-btn m-all">
							<span>О министерстве</span>
							<i class="fa fa-angle-down" aria-hidden="true"></i>
						</button>
						<ul class="min-ul padmenu">
							<li class="">
								<a href="#!">История министерства</a>
							</li>
							<li class="">
								<a href="ruko.html">Руководство</a>
							</li>
							<li class="">
								<a href="#!">Структура</a>
							</li>
							<li class="">
								<a href="#!">Задачи, функции и права</a>
							</li>
							<li class="">
								<a href="#!">Подразделения министерства</a>
							</li>
							<li class="">
								<a href="#!">Подведомственные учреждение министерства</a>
							</li>
							<li class="">
								<a href="#!">Прием на службу</a>
							</li>
							<li class="">
								<a href="#!">Термины</a>
							</li>
						</ul>
					</li>
					<li class="mob-li">
						<button class="press-btn m-all">
							<span>Пресс-центр</span>
							<i class="fa fa-angle-down" aria-hidden="true"></i>
						</button>

						<ul class="press-ul padmenu">
							<li class="active">
								<a href="news.html">Международное сотрудничество</a>
							</li>
							<li class="">
								<a href="#!">Профилактика правонарушений</a>
							</li>
							<li class="">
								<a href="#!">Деятельность органов внутренних дел</a>
							</li>
							<li class="">
								<a href="#!">Работа с кадрами</a>
							</li>
							<li class="">
								<a href="pro.html">Без вести пропавшие</a>
							</li>
							<li class="">
								<a href="#!">Раздел «Внимание розыск!»</a>
							</li>
							<li class="">
								<a href="foto.html">Фотогалерея</a>
							</li>
							<li class="">
								<a href="video.html">Видеотека</a>
							</li>
						</ul>
					</li>
					<li class="mob-li">
						<button class="press-btn m-all">
							<span>Госуслуги</span>
							<i class="fa fa-angle-down" aria-hidden="true"></i>
						</button>
						<ul class="padmenu">
							<li class="">
								<a href="#!">Перечень государственных услуг</a>
							</li>
							<li class="">
								<a href="gos.html">
									Организация и безопасность дорожного движения
								</a>
							</li>
							<li class="">
								<a href="#!">Разрешительно-лицензионная деятельность</a>
							</li>
							<li class="">
								<a href="#!">Информационно-справочная деятельность</a>
							</li>
							<li class="">
								<a href="#!">Паспортно-визовая деятельность</a>
							</li>
							<li class="">
								<a href="#!">Кадровая деятельность</a>
							</li>
							<li class="">
								<a href="#!">Экспертно-криминалистические подразделения</a>
							</li>
							<li class="">
								<a href="#!">Полезная информация</a>
							</li>
							<li class="">
								<a href="#!">Виды используемых бланков</a>
							</li>
						</ul>
					</li>
					<li class="mob-li">
						<button class="press-btn m-all">
							<span>Обращения</span>
							<i class="fa fa-angle-down" aria-hidden="true"></i>
						</button>
						<ul class="padmenu">
							<li class="">
								<a href="">Порядок обращений</a>
							</li>
							<li class="">
								<a href="contact.html">Контакты</a>
							</li>
							<li class="">
								<a href="#!">График обращений граждан</a>
							</li>
							<li class="">
								<a href="#!">Часто задаваемые вопросы</a>
							</li>
							<li class="">
								<a href="#!">Обращения граждан</a>
							</li>
							<li class="">
								<a href="#!">Политика защиты информации</a>
							</li>
							<li class="">
								<a href="#!">Регламент телефона доверия</a>
							</li>
						</ul>
					</li>
					<li class="mob-li">
						<a href="#">Реестр НПА</a>
					</li>
					<li class="mob-li">
						<a href="#">Интерактивные услуги</a>
					</li>
					<li class="mob-li">
						<a href="#">Контакты</a>
					</li>
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
						<li class="m-row-li">
							<a href="home.html">Главная</a>
						</li>
						<li class="m-row-li">
							<a href="ruko.html">О министерстве</a>
						</li>
						<li class="m-row-li">
							<a href="news.html">Пресс-центр</a>
						</li>
						<li class="m-row-li">
							<a href="#">Госуслуги</a>
						</li>
						<li class="m-row-li">
							<a href="#">Обращения</a>
						</li>
						<li class="m-row-li">
							<a href="#">Реестр НПА</a>
						</li>
						<li class="m-row-li">
							<a href="#">Интерактивные услуги</a>
						</li>
						<li class="m-row-li">
							<a href="#">Контакты</a>
						</li>
					</ul>
				</div>
			</main>
			<section class="news-banner nb">
				<div class="nb-image-div"></div>
			</section>
			<section class="nrs">
				<div class="container con-left">
					<div class="pheading">
						<h3>Международное сотрудничество</h3>
					</div>
				</div>
				<div class="container con-pad">
					<div class="row">
						<div class="col-xl-9 col-lg-8 col-md-7">
							<aside class="nrs nrs-top">
								<h5>Пресс-центр</h5>
								<ul>
									<li class="active">
										<a href="news.html">Международное сотрудничество</a>
									</li>
									<li class="">
										<a href="#!">Профилактика правонарушений</a>
									</li>
									<li class="">
										<a href="#!">Деятельность органов внутренних дел</a>
									</li>
									<li class="">
										<a href="#!">Работа с кадрами</a>
									</li>
									<li class="">
										<a href="pro.html">Без вести пропавшие</a>
									</li>
									<li class="">
										<a href="#!">Раздел «Внимание розыск!»</a>
									</li>
									<li class="">
										<a href="foto.html">Фотогалерея</a>
									</li>
									<li class="">
										<a href="video.html">Видеотека</a>
									</li>
								</ul>
							</aside>
							<aside class="nrs-left">
								<div class="top">
									<div>
										<span class="span-yellow">6 августа 2019</span>
										<img class="span-between" src="image/news/eye.png" />
										<span class="span-number">568</span>
									</div>
									<div class="nrs-top-left">
										<span>Поделиться:</span>
										<a href="#!">
											<img src="image/news/face.png" />
										</a>
										<a href="#!">
											<img src="image/news/twitter.png" />
										</a>
										<a href="#!">
											<img src="image/news/contact.png" />
										</a>
										<button class="btn-print">
											<img src="image/news/print.png" />
										</button>
									</div>
								</div>
								<h5 class="heading-h5">
									Состоялся визит делегации Министерства внутренних дел
									Республики Узбекистан в Социалистическую Республику Вьетнам
								</h5>
								<p>
									23-28 сентября т.г. делегация Министерства внутренних дел
									Республики Узбекистан посетила с ознакомительной поездкой
									Социалистическую Республику Вьетнам. В ходе визита делегацией
									Министерства проведено около 10 рабочих встреч с
									руководителями и представителями подразделениями Министерства
									общественной безопасности Вьетнама.
								</p>
								<figure>
									<img class="border-rad" src="image/news/news-pod.jpg" />
								</figure>
								<p>
									Вьетнамская сторона выразила интерес к проводимым реформам в
									системе охраны общественного порядка, в частности,
									осуществляемые меры по реализации Концепции «Безопасная
									столица», в том числе, круглосуточный трехсменный режим
									патрулирования с привлечением в вечернее и ночное время суток
									не менее 70 процентов сил обеспечения общественногопорядка, а
									также проводимые реформы в сфере обеспечения безопасности
									дорожного движения, в том числе в рамках Концепции обеспечения
									безопасности дорожного движения в Республике Узбекистан на
									2018-2022 годы.
								</p>
								<p>
									По итогам проведенных встреч, была получена подробная
									информация о деятельности Министерство общественной
									безопасности Вьетнама и его структурных подразделений,
									проводимых реформах в сфере охраны общественного порядка,
									порядка несения службы органами общественной безопасности, а
									также о следующих основных тенденциях реформирования полиции
									Вьетнама:
								</p>
								<p>
									Первое. Руководство Вьетнама уделяет особое внимание вопросам
									борьбы с коррупцией. Так, за последние годы было принято около
									90 актов законодательства различного уровня в сфере борьбы с
									коррупцией, в том числе новая редакция Уголовного кодекса,
									законы «О предотвращении и борьбе с коррупцией», «О
									государственном аудите», «Об инспекции», «Об урегулировании
									жалоб», «О предотвращении и борьбе с отмыванием денег»,
									Национальная антикоррупционная стратегия на период до 2020
									года и другие.
								</p>
								<p>
									Второе. В качестве положительного опыта были презентованы
									механизмы борьбы с кибер преступностью. С учетом актуальности
									обеспечения кибер безопасности в структуре Министерстве
									общественной безопасности создан специальный Департамент кибер
									безопасности и борьбы с преступностью с использованием высоких
									технологий.
								</p>
								<p>
									Третье. 27 ноября 2015 года принята новая редакция Уголовного
									кодекса Вьетнама, который состоит из 3 частей, 26 глав и 426
									статей и вступает в силу с 1 января 2019 года. Новая редакция
									Уголовного кодекса ввела новый вид уголовного наказания как
									«предупреждение», которое может быть применено в отношении
									лиц, совершивших незначительное преступление, наличии
									обстоятельств, смягчающих наказание и имеется возможность
									исправления, осужденного без назначения уголовных наказаний.
									Также новым Уголовным кодексом установлена уголовная
									ответственность для юридических лиц.
								</p>
								<p>
									Четвертое. Во Вьетнаме установлены жесткие требования для
									получения водительских удостоверений: применяется
									дифференциальная система водительских удостоверений (А1, А2,
									А3, А4, В1, В2, C, D, E, F и т.п.), позволяющая четко
									разграничить типы автотранспортных средств, а также установить
									индивидуальные сроки действия и возрастные ограничения для
									каждого вида разрешения.
								</p>
								<p>
									Пятое. Наличие качественных платных автомобильных
									магистральных дорог заложило прочный фундамент для привлечения
									частных инвестиций и налаживанию государственно-частного
									партнерства. Стратегией развития сети дорог Вьетнама на период
									2010-2020 годов и с перспективой до 2030 года, введена сеть
									платных магистральных дорог.
								</p>
								<p>
									Положительный опыт Республики Вьетнам будет использован при
									разработке проектов соответствующих нормативно-правовых актов
									направленных на совершенствование деятельности органов
									внутренних дел.
								</p>
							</aside>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-5">
							<aside class="nrs nrs-bot">
								<h5>Пресс-центр</h5>
								<ul>
									<li class="active">
										<a href="news.html">Международное сотрудничество</a>
									</li>
									<li class="">
										<a href="#!">Профилактика правонарушений</a>
									</li>
									<li class="">
										<a href="#!">Деятельность органов внутренних дел</a>
									</li>
									<li class="">
										<a href="#!">Работа с кадрами</a>
									</li>
									<li class="">
										<a href="pro.html">Без вести пропавшие</a>
									</li>
									<li class="">
										<a href="#!">Раздел «Внимание розыск!»</a>
									</li>
									<li class="">
										<a href="foto.html">Фотогалерея</a>
									</li>
									<li class="">
										<a href="video.html">Видеотека</a>
									</li>
								</ul>
							</aside>
							<aside class="nrs-two">
								<h5>Похожие новости</h5>
								<figure>
									<img src="image/news/pod-right1.jpg" />
								</figure>
								<div class="date-btn-div">
									<span class="left">6 августа 2019</span>
									<img src="image/news/eye.png" />
									<span class="right">644</span>
								</div>
								<p>
									Состоялось первое Совещание МВД Республики Узбекистан и
									Азербайджанской Республики
								</p>

								<figure>
									<img src="image/news/pod-right2.jpg" />
								</figure>
								<div class="date-btn-div">
									<span class="left">6 августа 2019</span>
									<img src="image/news/eye.png" />
									<span class="right">644</span>
								</div>
								<p>
									Состоялось первое Совещание МВД Республики Узбекистан и
									Азербайджанской Республики
								</p>

								<figure>
									<img src="image/news/pod-right3.jpg" />
								</figure>
								<div class="date-btn-div">
									<span class="left">6 августа 2019</span>
									<img src="image/news/eye.png" />
									<span class="right">644</span>
								</div>
								<p>
									Состоялось первое Совещание МВД Республики Узбекистан и
									Азербайджанской Республики
								</p>
							</aside>
						</div>
					</div>
				</div>
			</section>

			<section class="section-hide">
				<div class="ctrl-enter">
					<form>
						<p>Muallifga xatolar bo'yicha xabar berish:</p>
						<hr />
						<div class="form-group">
							<label for="formGroupExampleInput">Matn xato bilan:</label>
							<textarea
								id="text-area-xato"
								class="form-control"
								rows="4"
								cols="36"
							></textarea>
						</div>
						<div class="form-group">
							<label for="formGroupExampleInput2">
								Sizning izoxingiz yoki to`g`ri versiya:
							</label>
							<textarea
								id="text-area-right"
								class="form-control"
								rows="4"
								cols="36"
							></textarea>
						</div>
						<div class="ctrl-btn">
							<button class="btn-bekor" type="button">
								Bekor qilish
							</button>
							<button type="submit">Jo'natish</button>
						</div>
					</form>
				</div>
			</section>
		</React.Fragment>
	);
};

export default NewsItem;
