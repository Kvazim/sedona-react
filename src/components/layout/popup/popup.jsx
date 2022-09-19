import React from "react";
import { Link } from 'react-router-dom';

const PopupFavorites = ({ active, setActive }) => {

    return (
        <div className={active ? "popup popup-activ" : "popup"} onClick={() => setActive(false)}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                <div className="popup-wrapper">
                    <button className="popup-button visually-hidden" tabIndex="-1">Закрыть</button>
                    <ul className="disordered popup-list">
                        <li className="popup-item">
                            <Link className="card-favorites" to="#">
                                <img className="card-favorites-images" src="./images/hotel-2-small.jpg" alt="однаэтажная гостиница с видом на две горы." width="48" height="48" />
                                <h2 className="card-favorites-title">Desert Quail Inn</h2>
                                <p className="card-favorites-subtitle">Мотель</p>
                            </Link>
                            <button className="catalog-favorites-button" type="button">
                                <svg className="button-icon" aria-hidden="true" focusable="false" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3 2.3H.6c-.3 0-.6.2-.6.5s.3.6.6.6h1.7v12c0 .3.3.6.6.6h10.2c.3 0 .6-.3.6-.6v-12h1.7c.3 0 .6-.3.6-.6s-.4-.5-.7-.5Zm-2.8 12.5H3.4V3.4h9.1v11.4ZM6.2 1.2h3.4c.3 0 .6-.3.6-.6S10 0 9.7 0H6.2c-.3 0-.5.3-.5.6s.2.6.5.6Z" fill="#000" /><path
                                        d="M6.2 12c.3 0 .6-.3.6-.6V5.7c0-.3-.3-.6-.6-.6s-.6.3-.6.6v5.7c.1.3.3.6.6.6ZM9.7 12c.3 0 .6-.3.6-.6V5.7c0-.3-.3-.6-.6-.6s-.6.4-.6.6v5.7c0 .3.2.6.6.6Z" fill="#000" />
                                </svg>
                                <span className="visually-hidden">Удалить из избраннова</span>
                            </button>
                        </li>
                        <li className="popup-item">
                            <Link className="card-favorites" to="#">
                                <img className="card-favorites-images" src="./images/hotel-3-small.jpg" alt="Гора дьявола." width="48" height="48" />
                                <h2 className="card-favorites-title">Villas at Poco Diablo</h2>
                                <p className="card-favorites-subtitle">Апартаменты</p>
                            </Link>
                            <button className="catalog-favorites-button" type="button">
                                <svg className="button-icon" aria-hidden="true" focusable="false" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3 2.3H.6c-.3 0-.6.2-.6.5s.3.6.6.6h1.7v12c0 .3.3.6.6.6h10.2c.3 0 .6-.3.6-.6v-12h1.7c.3 0 .6-.3.6-.6s-.4-.5-.7-.5Zm-2.8 12.5H3.4V3.4h9.1v11.4ZM6.2 1.2h3.4c.3 0 .6-.3.6-.6S10 0 9.7 0H6.2c-.3 0-.5.3-.5.6s.2.6.5.6Z" fill="#000" />
                                    <path d="M6.2 12c.3 0 .6-.3.6-.6V5.7c0-.3-.3-.6-.6-.6s-.6.3-.6.6v5.7c.1.3.3.6.6.6ZM9.7 12c.3 0 .6-.3.6-.6V5.7c0-.3-.3-.6-.6-.6s-.6.4-.6.6v5.7c0 .3.2.6.6.6Z" fill="#000" />
                                </svg>
                                <span className="visually-hidden">Удалить из избранного</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <Link className="btn all-favorits" to="#">Все избранные</Link>
            </div>
        </div>
    )
}

export { PopupFavorites };