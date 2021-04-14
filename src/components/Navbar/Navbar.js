import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div className="navbar__left">
                    <p class="p_color">
                        maker
                        <span className="span-style">s</span>{" "}
                        <p className="p-style">Documentation </p>
                    </p>
                </div>
                <div className="navbar__right">
                    <div className="right__menu">
                        <a href="" className="menu__items">
                            Главная
                        </a>
                        <a href="" className="menu__items">
                            Документация
                        </a>
                        <a href="" className="menu__items">
                            Добавить
                        </a>
                    </div>
                    <input
                        type="text"
                        class="navbar__searchbar"
                        placeholder="Поиск"
                    />
                    <span className="right__menu-github">Github</span>
                </div>
            </div>

            <div class="slider">
                <div class="slider__main">
                    {" "}
                    <span>J</span> <span>a</span> <span>v</span> <span>a</span>{" "}
                    <span>S</span> <span>c</span> <span>r</span> <span>i</span>{" "}
                    <span>p</span> <span>t</span>{" "}
                </div>
                <div class="slider__link-container">
                    <a
                        className="a-style"
                        href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
                    >
                        Перейти к документации
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
