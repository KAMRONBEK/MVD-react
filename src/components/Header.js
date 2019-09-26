import React from 'react';

let Header = ({ activeHeader }) => {
    return (
        <header>
            <nav className="row-nav">
                <ul className="nav-ul">
                    <li className="row-li"><a className={(activeHeader == "Главная") ? "active" : ""} href="/">Главная</a></li>
                    <li className="row-li">
                        <a className={(activeHeader == "О министерстве") ? "active" : ""} href="/ministry">О министерстве</a><i className="fa fa-angle-down" aria-hidden="true"></i>
                        <ul className="pad-menu">
                            <li><a href="#!">История министерства</a></li>
                            <li><a href="ruko.html">Руководство</a></li>
                            <li><a href="#!">Структура</a></li>
                            <li><a href="#!">Задачи, функции и права</a></li>
                            <li><a href="#!">Подразделения министерства</a></li>
                            <li><a href="#!">Подведомственные учреждение министерства</a></li>
                            <li><a href="#!">Прием на службу</a></li>
                            <li><a href="#!">Термины</a></li>
                        </ul>
                    </li>
                    <li className="row-li">
                        <a className={(activeHeader == "Пресс-центр") ? "active" : ""} href="/news">Пресс-центр</a><i className="fa fa-angle-down" aria-hidden="true"></i>
                        <ul className="pad-menu">
                            <li><a href="news.html">Международное сотрудничество</a></li>
                            <li><a href="#!">Профилактика правонарушений</a></li>
                            <li><a href="#!">Деятельность органов внутренних дел</a></li>
                            <li><a href="#!">Работа с кадрами</a></li>
                            <li><a href="pro.html">Без вести пропавшие</a></li>
                            <li><a href="#!">Раздел «Внимание розыск!»</a></li>
                            <li><a href="foto.html">Фотогалерея</a></li>
                            <li><a href="video.html">Видеотека</a></li>
                        </ul>
                    </li>
                    <li className="row-li">
                        <a className={(activeHeader == "Госуслуги") ? "active" : ""} href="/gov-services">Госуслуги</a><i className="fa fa-angle-down" aria-hidden="true"></i>
                        <ul className="pad-menu">
                            <li className=""><a href="">Перечень государственных услуг</a></li>
                            <li className=""><a href="gos.html">Организация и безопасность дорожного движения</a></li>
                            <li className=""><a href="">Разрешительно-лицензионная деятельность</a></li>
                            <li className=""><a href="">Информационно-справочная деятельность</a></li>
                            <li className=""><a href="">Паспортно-визовая деятельность</a></li>
                            <li className=""><a href="">Кадровая деятельность</a></li>
                            <li className=""><a href="">Экспертно-криминалистические подразделения</a></li>
                            <li className=""><a href="">Полезная информация</a></li>
                            <li className=""><a href="">Виды используемых бланков</a></li>
                        </ul>
                    </li>
                    <li className="row-li">
                        <a className={(activeHeader == "Обращения") ? "active" : ""} href="/contact">Обращения</a><i className="fa fa-angle-down" aria-hidden="true"></i>
                        <ul className="pad-menu">
                            <li className=""><a href="news.html">Порядок обращений</a></li>
                            <li className="active"><a href="contact.html">Контакты</a></li>
                            <li className=""><a href="#!">График обращений граждан</a></li>
                            <li className=""><a href="#!">Часто задаваемые вопросы</a></li>
                            <li className=""><a href="#!">Обращения граждан</a></li>
                            <li className=""><a href="#!">Политика защиты информации</a></li>
                            <li className=""><a href="#!">Регламент телефона доверия</a></li>
                        </ul>
                    </li>
                    <li className="row-li"><a className={(activeHeader == "Реестр НПА") ? "active" : ""} href="#">Реестр НПА</a></li>
                    <li className="row-li"><a className={(activeHeader == "Интерактивные услуги") ? "active" : ""} href="#">Интерактивные услуги</a></li>
                    <li className="row-li"><a className={(activeHeader == "Контакты") ? "active" : ""} href="#">Контакты</a></li>
                </ul>
                <div className="header-btn-div">
                    <button className="header-btn">
                        <img src="../assets/img/home/menu.png" />
                    </button>
                </div>
            </nav>
            <div className="m-btn-div">
                <button className="m-btn">
                    <img src="../assets/img/home/menu.png" />
                </button>
            </div>
        </header>
    )
}

export default Header;