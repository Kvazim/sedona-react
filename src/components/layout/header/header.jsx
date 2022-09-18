import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import { NavSite } from '../nav-site/nav-site';

const Navigation = () => {

    return (
        <>
          <header className="page-header">
                <nav className="main-nav">
                  <NavSite />
                  <Link className="nav-logo-link" to = "/"><img src="./images/sedona.svg" alt="Логотип компании." style={{width: 138, height: 70}} /></Link>
                  <ul className="disordered nav-user">
                    <li className="nav-user-item">
                      <Link className="nav-user-link search-link" to="#">
                        <svg className="icon-search" aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 18 18"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 16.5L14.3 12.8C15.3 11.5 16 9.8 16 7.9C16 3.5 12.4 -0.1 8 -0.1C3.6 -0.1 0 3.6 0 8C0 12.4 3.6 16 8 16C9.8 16 11.5 15.4 12.9 14.3L16.6 18L18 16.5ZM8 14C4.7 14 2 11.3 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14Z"
                    fill="black" />
                        </svg>
                        <span className="visually-hidden">Поиск</span>
                      </Link>
                    </li>
                    <li className="nav-user-item">
                      <Link className="nav-user-link icon" to="#">
                        <svg className="icon-favorites" aria-hidden="true" focusable="false" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.9 17C8.6 17 8.3 16.9 8.1 16.6C2.7 10.5 1.4 9.1 1.1 8.7C0.4 7.8 0 6.6 0 5.4C0 2.4 2.4 0 5.5 0C6.8 0 8 0.5 9 1.3C10 0.5 11.3 0 12.5 0C15.5 0 18 2.4 18 5.4C18 6.7 17.5 7.9 16.7 8.8L9.7 16.7C9.5 16.9 9.3 17 8.9 17ZM2.9 7.5C3.2 7.9 6.4 11.5 9 14.4L15.2 7.4C15.7 6.9 15.9 6.2 15.9 5.4C15.9 3.6 14.4 2.1 12.6 2.1C11.6 2.1 10.6 2.6 9.9 3.4C9.6 3.7 9.3 3.8 9 3.8C8.7 3.8 8.4 3.6 8.2 3.4C7.5 2.6 6.5 2.1 5.5 2.1C3.7 2.1 2.2 3.6 2.2 5.4C2.1 6.3 2.5 7 2.9 7.5C2.8 7.5 2.8 7.5 2.9 7.5Z" fill="black" />
                        </svg>
                        <span className="visually-hidden">Избранное</span>
                      </Link>
                      <span className="favorites-total">12</span>
                      <div className="popup">
                        <div className="popup-content">
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
                    </li>
                    <li className="nav-user-item">
                      <Link className="nav-user-link btn" to="#">Хочу сюда!</Link>
                    </li>
                  </ul>
                </nav>
          </header>
          <Outlet />
        </>
    )
}

export {Navigation};