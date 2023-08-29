import './Popup.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

function Popup({ isOpen, onClose }) {
    return (
        <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button" onClick={onClose}></button>
                <div className="popup__menu">
                    <div className="popup__navigation">
                        <NavLink className="popup__navlink" to="/movies" >Главная</NavLink>
                        <NavLink className="popup__navlink" to="/movies" >Фильмы</NavLink>
                        <NavLink className="popup__navlink" to="/saved-movies" >Сохранённые фильмы</NavLink>
                    </div>

                    <div className="popup__profile">
                        <NavLink className="popup__navlink last" to="/profile" >
                            <span className="navigation__account">Аккаунт</span>
                        </NavLink>
                        <button className="popup__menu-button" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;