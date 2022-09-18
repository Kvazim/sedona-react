import React from 'react';

const Catalog = () => {

    return (
        <>
            <main className="main-inner">
                <header className="inner-header">
                    <section className="inner-header-nav">
                      <div className="inner-container">
                        <h1 className="inner-header-title">Гостиницы Седоны</h1>
                          <ul className="disordered breadcrumbs">
                            <li className="breadcrumbs-item">
                              <a className="breadcrumbs-link home" href="index.html">
                                <span className="visually-hidden">Главная</span>
                              </a>
                            </li>
                            <li className="breadcrumbs-item">
                              <a className="breadcrumbs-link hotels" href="#">Гостиницы</a>
                            </li>
                          </ul>
                      </div>
                    </section>
                    <section className="inner-header-filters">
                      <div className="inner-container">
                        <h2 className="visually-hidden">Фильтр гостиниц</h2>
                          <form className="catalog-filter" action="https://echo.htmlacademy.ru/" method="get">
                            <fieldset className="catalog-filter-list infrastructure">
                              <legend className="catalog-filter-title">Инфраструктура:</legend>
                              <ul className="disordered catalog-filter-item">
                                <li>
                                  <label className="control">
                                    <input className="visually-hidden control-input" type="checkbox" name="pool" checked />
                                      <span className="control-mark"></span>
                                      <span className="control-label">Бассейн</span>
                                  </label>
                                </li>
                                <li>
                                  <label className="control">
                                    <input className="visually-hidden control-input" type="checkbox" name="parking" checked />
                                    <span className="control-mark"></span>
                                    <span className="control-label">Парковка</span>
                                  </label>
                                </li>
                                <li>
                                  <label className="control">
                                    <input className="visually-hidden control-input" type="checkbox" name="Wi-Fi" />
                                    <span className="control-mark"></span>
                                    <span className="control-label">Wi-Fi</span>
                                  </label>
                                </li>
                              </ul>
                            </fieldset>
                            <fieldset className="catalog-filter-list">
                              <legend className="catalog-filter-title">Тип жилья:</legend>
                              <ul className="disordered catalog-filter-item">
                                <li>
                                  <label className="control">
                                    <input className="visually-hidden control-input" type="radio" name="product-group" value="hotel" checked />
                                    <span className="control-mark"></span>
                                    <span className="control-label">Гостиница</span>
                                  </label>
                                </li>
                                <li>
                                  <label className="control">
                                    <input className="visually-hidden control-input" type="radio" name="product-group" value="motel" />
                                    <span className="control-mark"></span>
                                    <span className="control-label">Мотель</span>
                                  </label>
                                </li>
                                <li>
                                  <label className="control">
                                    <input className="visually-hidden control-input" type="radio" name="product-group" value="apartments" />
                                    <span className="control-mark"></span>
                                    <span className="control-label">Апартаменты</span>
                                  </label>
                                </li>
                              </ul>
                            </fieldset>
                            <fieldset className="catalog-filter-list search-price">
                              <legend className="catalog-filter-price">Стоимость, ₽:</legend>
                              <div className="range">
                              <div className="catalog-filter-wrapper">
                                <label className="catalog-filter-label">
                                  <input className="catalog-filter-input catalog-filter-min" type="number" name="min-price" min="0" step="1" placeholder="0" />от
                                </label>
                                <label className="catalog-filter-label">
                                  <input className="catalog-filter-input catalog-filter-max" type="number" name="max-price" min="0" step="1" placeholder="9000" />до
                                </label>
                              </div>
                              <div className="range-scale">
                                <div className="range-bar" style="left: 0; width: 236px;">
                                  <button className="range-toggle toggle-min" type="button">
                                    <span className="visually-hidden">Изменить минимальную цену.</span>
                                  </button>
                                  <button className="range-toggle toggle-max" type="button">
                                    <span className="visually-hidden">Изменить максимальную цену.</span>
                                  </button>
                                </div>
                              </div>
                              </div>
                            </fieldset>
                            <div className="catalog-button">
                              <button className="button button-catalog" type="submit">Применить</button>
                              <button className="button button-catalog button-reset" type="reset">Сбросить</button>
                            </div>
                          </form>
                      </div>
                    </section>
                </header>
                <section className="search-resultat">
                  <div className="inner-container">
                    <div className="search-header">
                      <h2 className="visually-hidden">Результаты поиска</h2>
                      <p><strong>Найдено гостиниц: <span>38</span></strong></p>
                      <form className="search-title-header">
                        <div className="select">
                          <label className="visually-hidden" for="sorting">Сортировка</label>
                          <select className="select-control" id="sorting" name="sorting">
                            <option value="popular">Сначала дешёвые</option>
                            <option value="cheap">Сначала популярное</option>
                            <option value="expensive">Сначала дорогое</option>
                          </select>
                        </div>
                        <button className="visually-hidden" type="submit" tabindex="-1">Отсортировать продукты</button>
                      </form>
                      <a href="#" className="btn button-light mode-tile">
                        <span className="visually-hidden">Показать карточки</span>
                      </a>
                      <a href="#" className="btn button-light mode-slideshow">
                        <span className="visually-hidden">Показать слайды</span>
                      </a>
                      <a href="#" className="btn button-light mode-list button-light-activ">
                        <span className="visually-hidden">Показать список</span>
                      </a>
                    </div>
                    <div className="product-wrapper">
                      <ul className="disordered product-list">
                        <li className="product-card">
                          <a className="product-card-link-img" href="#">
                            <img src="./images/hotel-1.jpg" alt="футуристическая гостиница на склоне горы." width="180" height="120" />
                          </a>
                          <div className="product-card-description">
                            <a className="product-card-link" href="#">
                              <h3 className="product-card-title heading">Amara Resort Spa</h3>
                            </a>
                            <p className="product-card-tipe">Гостиница</p>
                            <b className="product-card-price">От 4000 ₽</b>
                            <a className="btn btn-details" href="#">подробнее</a>
                            <button className="button button-catalog button-favorites">В избранное</button>
                          </div>
                <div className="rating-description">
                  <ul className="disordered stars">
                    <li>
                      <p className="stars-1 disable"><span className="visually-hidden">1 звезда</span></p>
                    </li>
                    <li>
                      <p className="stars-2 disable"><span className="visually-hidden">2 звезды</span></p>
                    </li>
                    <li>
                      <p className="stars-3 disable"><span className="visually-hidden">3 звезды</span></p>
                    </li>
                    <li>
                      <p className="stars-4 activ"><span className="visually-hidden"> звезды</span></p>
                    </li>
                    <li>
                      <p class="stars-5 disable"><span className="visually-hidden">5 </span></p>
                    </li>
                  </ul>
                  <p className="rating">Рейтинг: <span>8,5</span></p>
                </div>
              </li>
              <li className="product-card">
                <a className="product-card-link-img" href="#">
                  <img src="./images/hotel-2.jpg" alt="однаэтажная гостиница с видом на две горы." width="180"
                    height="120" />
                </a>
                <div className="product-card-description">
                  <a className="product-card-link" href="#">
                    <h3 className="product-card-title heading">Desert Quail Inn</h3>
                  </a>
                  <p className="product-card-tipe">Мотель</p>
                  <b className="product-card-price">От 3000 ₽</b>
                  <a className="btn btn-details" href="#">подробнее</a>
                  <button className="button button-catalog button-favorites">В избранное</button>
                </div>
                <div className="rating-description">
                  <ul className="disordered stars">
                    <li>
                      <p className="stars-1 disable"><span className="visually-hidden">1 звезда</span></p>
                    </li>
                    <li>
                      <p className="stars-2 disable"><span className="visually-hidden">2 звезды</span></p>
                    </li>
                    <li>
                      <p className="stars-3 activ"><span className="visually-hidden">3 звезды</span></p>
                    </li>
                    <li>
                      <p className="stars-4 disable"><span className="visually-hidden">4 звезды</span></p>
                    </li>
                    <li>
                      <p className="stars-5 disable"><span className="visually-hidden">5 звезд</span></p>
                    </li>
                  </ul>
                  <p className="rating">Рейтинг: <span>8,9</span></p>
                </div>
              </li>
              <li className="product-card">
                <a className="product-card-link-img" href="#">
                  <img src="./images/hotel-3.jpg" alt="Гора дьявола." width="180" height="120" />
                </a>
                <div className="product-card-description">
                  <a className="product-card-link" href="#">
                    <h3 className="product-card-title heading">Villas at Poco Diablo</h3>
                  </a>
                  <p className="product-card-tipe">Апартаменты</p>
                  <b className="product-card-price">От 2000 ₽</b>
                  <a className="btn btn-details" href="#">подробнее</a>
                  <button className="button button-catalog button-favorites-added">В избранном</button>
                </div>
                <div className="rating-description">
                  <ul className="disordered stars">
                    <li>
                      <p className="stars-1 disable"><span className="visually-hidden">1 звезда</span></p>
                    </li>
                    <li>
                      <p className="stars-2 activ"><span className="visually-hidden">2 звезды</span></p>
                    </li>
                    <li>
                      <p className="stars-3 disable"><span className="visually-hidden">3 звезды</span></p>
                    </li>
                    <li>
                      <p className="stars-4 disable"><span className="visually-hidden">4 звезды</span></p>
                    </li>
                    <li>
                      <p className="stars-5 disable"><span className="visually-hidden">5 звезд</span></p>
                    </li>
                  </ul>
                  <p className="rating">Рейтинг: <span>9,2</span></p>
                </div>
              </li>
              <li className="product-card">
                <a className="product-card-link-img" href="#">
                  <img src="./images/hotel-4.jpg" alt="Дорога среди леса в горах." width="180" height="120" />
                </a>
                <div className="product-card-description">
                  <a className="product-card-link" href="#">
                    <h3 className="product-card-title heading">GreenTree Inn</h3>
                  </a>
                  <p className="product-card-tipe">Гостиница</p>
                  <b className="product-card-price">От 3000 ₽</b>
                  <a className="btn btn-details" href="#">подробнее</a>
                  <button className="button button-catalog button-favorites">В избранное</button>
                </div>
                <div className="rating-description">
                  <ul className="disordered stars">
                    <li>
                      <p className="stars-1 disable"><span className="visually-hidden">1 звезда</span></p>
                    </li>
                    <li>
                      <p className="stars-2 activ"><span className="visually-hidden">2 звезды</span></p>
                    </li>
                    <li>
                      <p className="stars-3 disable"><span className="visually-hidden">3 звезды</span></p>
                    </li>
                    <li>
                      <p className="stars-4 disable"><span className="visually-hidden">4 звезды</span></p>
                    </li>
                    <li>
                      <p className="stars-5 disable"><span className="visually-hidden">5 звезд</span></p>
                    </li>
                  </ul>
                  <p className="rating">Рейтинг: <span>9,2</span></p>
                </div>
              </li>
            </ul>
          </div>
          <div className="show-more">
            <button className="button pagination-show-more" type="button">Загрузить ещё</button>
          </div>
          <div className="pagination-wrapper">
            <ol className="pagination ordered">
              <li className="pagination-item">
                <a className="pagination-link pagination-link-active" href="#">1</a>
              </li>
              <li className="pagination-item">
                <a className="pagination-link" href="#">2</a>
              </li>
              <li className="pagination-item">
                <a className="pagination-link" href="#">3</a>
              </li>
              <li className="pagination-item">
                <a className="pagination-link" href="#">4</a>
              </li>
              <li className="pagination-item">
                <a className="pagination-link" href="#">...</a>
              </li>
              <li className="pagination-item">
                <a className="pagination-link" href="#">10</a>
              </li>
            </ol>
            <form className="search-title-footer">
              <label className="page-quantity" for="quantity">Гостиниц на странице:</label>
              <select className="select-control" id="quantity" name="quantity">
                <option value="popular">4</option>
                <option value="cheap">8</option>
                <option value="expensive">Все</option>
              </select>
              <button className="visually-hidden" type="submit" tabindex="-1">Отсортировать продукты</button>
            </form>
          </div>
        </div>
                </section>
            </main>
            <footer>
            <section className="subscription-form-inner">
              <h2 className="subscription-title">Подпишитесь на рассылку</h2>
              <p className="subscription-subtitle">Только полезная информация и никакого спама, честное бойскаутское!</p>
              <form className="mailing-form" action="https://echo.htmlacademy.ru/" method="post">
                <p className="e-mail">
                  <label for="e-mail" className="visually-hidden">Укажите Ваш e-mail адресс</label>
                  <input type="email" className="e-mail" name="e-mail" id="e-mail" placeholder="Ваш e-mail" required />
                </p>
                <button className="button" type="submit">Подписаться</button>
              </form>
            </section>
      <section className="footer-social">
        <h2 className="visually-hidden">Контактная информация</h2>
        <ul className="disordered footer-social-list">
          <li className="footer-social-item">
            <a className="footer-social-link twitter" href="https://twitter.com/htmlacademy_ru">
              <svg className="social-icon" width="18" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.6.2c1.8-.5 3.2.3 3.8 1.2l2.1-.7c0 .9-.6 1.5-.9 1.8.7.1 1.4-.6 1.4-.6a3 3 0 0 1-1.7 2C16.1 10.7 13 15.1 5.7 15h-.5c-.4 0-4.4-.5-5.2-1.9 2.4.2 4.1-.4 5-1.2-1-.3-2.9-.4-3.2-2.9.4.1.6.2 1.3.1C1.8 8.3.4 7.5.5 5.3c.3.3 1.1.5 1.4.5C1.1 5.6-.2 2.5.9.9a11 11 0 0 0 7.6 3.8C8.7 2.3 9.7.8 11.6.2Z"
                  fill="#83B3D3" />
              </svg>
              <span className="visually-hidden">Твиттер</span>
            </a>
          </li>
          <li className="footer-social-item">
            <a className="footer-social-link facebook" href="https://www.facebook.com/htmlacademy">
              <svg className="social-icon" aria-hidden="true" focusable="false" width="10" height="18" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0a4 4 0 0 0-4 4v2H0v4h3v8h4v-8h3V6H7V4h3V0H7Z" fill="#83B3D3" />
              </svg>
              <span className="visually-hidden">Фейсбук</span>
            </a>
          </li>
          <li className="footer-social-item">
            <a className="footer-social-link youtube" href="https://www.youtube.com/c/HTMLAcademyRUS">
              <svg className="social-icon" aria-hidden="true" focusable="false" width="20" height="16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#a)">
                  <path
                    d="M17 0H2.9C1.2 0 0 1.5 0 3.2v9.5C0 14.5 1.2 16 2.9 16h14.3c1.5 0 2.9-1.5 2.9-3.2V3.2C19.9 1.5 18.7 0 17 0ZM7 11.8V4.2L13.7 8 7 11.8Z"
                    fill="#83B3D3" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h20v16H0z" />
                  </clipPath>
                </defs>
              </svg>
              <span className="visually-hidden">youtube</span>
            </a>
          </li>
        </ul>
        <a className="footer-tel" href="tel:+78128121212">+7 (812) 812-12-12</a>
        <a className="footer-logo" href="https://htmlacademy.ru/">
          <svg className="footer-logo-icon" aria-hidden="true" focusable="false" width="115" height="34" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 12.9v2.6h2.5v-2.6H0ZM11.6 4.5c-1.6 0-2.8.7-3.6 1.7h-.1V0h-2v15.5h2v-5.3c0-2.1 1.3-3.6 3.3-3.6 1.8 0 2.9 1.4 2.9 3.2v5.7h2V9.4c.1-3-1.8-4.9-4.5-4.9ZM26.6 4.8h-4.8V1.1h-2v3.8h-1.9v2h1.9v6c0 1.7 1 2.7 2.7 2.7h4.1v-2h-3.7c-.7 0-1.1-.4-1.1-1.1V6.8h4.8v-2ZM41.1 4.6c-1.6 0-2.9.8-3.5 2.1h-.1a3.7 3.7 0 0 0-3.4-2.1c-1.4 0-2.5.8-3.1 1.8h-.1V4.8H29v10.6h2V10c0-2 1-3.5 2.6-3.5 1.5 0 2.4 1 2.4 2.6v6.3h2V9.8c0-2.4 1.4-3.3 2.6-3.3 1.5 0 2.4 1 2.4 2.6v6.3h2V8.9c.1-2.5-1.4-4.3-3.9-4.3ZM47.8 12.7c0 1.7 1 2.7 2.8 2.7h2v-2h-1.7c-.7 0-1.1-.4-1.1-1.1V0h-2v12.7ZM28.9 19.7a4.9 4.9 0 0 0-3.9-1.8c-3.1 0-5.4 2.3-5.4 5.6s2.3 5.6 5.4 5.6c1.8 0 3-.8 3.8-1.9h.1v1.6h2V18.2h-2v1.5Zm-3.6 7.4a3.5 3.5 0 0 1-3.6-3.6c0-2 1.4-3.6 3.6-3.6s3.6 1.6 3.6 3.6c0 1.9-1.4 3.6-3.6 3.6ZM44.2 22c-.5-2.4-2.6-4.1-5.4-4.1a5.4 5.4 0 0 0-5.6 5.6c0 3.1 2.2 5.6 5.6 5.6 2.8 0 4.9-1.8 5.4-4.2h-2.1a3.4 3.4 0 0 1-3.3 2.3 3.5 3.5 0 0 1-3.6-3.6c0-2 1.4-3.6 3.6-3.6 1.6 0 2.8 1 3.3 2.2h2.1V22ZM55.1 19.7a4.9 4.9 0 0 0-3.9-1.8c-3.1 0-5.4 2.3-5.4 5.6s2.3 5.6 5.4 5.6c1.8 0 3-.8 3.8-1.9h.1v1.6h2V18.2h-2v1.5Zm-3.6 7.4a3.5 3.5 0 0 1-3.6-3.6c0-2 1.4-3.6 3.6-3.6s3.6 1.6 3.6 3.6c0 1.9-1.5 3.6-3.6 3.6ZM68.7 19.8a5 5 0 0 0-3.9-1.9c-3.1 0-5.4 2.3-5.4 5.6s2.2 5.6 5.4 5.6c1.7 0 3-.8 3.8-1.8h.1v1.5h2V13.4h-2v6.4Zm-3.6 7.3a3.5 3.5 0 0 1-3.6-3.6c0-2 1.4-3.6 3.6-3.6s3.6 1.6 3.6 3.6c-.1 2-1.5 3.6-3.6 3.6ZM78.3 17.9a5.4 5.4 0 0 0-5.5 5.6c0 3 2.1 5.6 5.5 5.6 2.5 0 4.5-1.3 5.2-3.6h-2.1c-.5 1-1.6 1.6-3 1.6-1.9 0-3.3-1.3-3.4-2.9h8.8c.2-3.6-2-6.3-5.5-6.3Zm0 1.9c1.7 0 3 1 3.3 2.6h-6.5a3.2 3.2 0 0 1 3.2-2.6ZM98.2 17.9a4 4 0 0 0-3.6 2h-.1c-.6-1.2-1.8-2-3.4-2-1.4 0-2.5.7-3.1 1.8v-1.5h-1.9v10.6h2v-5.4c0-2 1-3.4 2.6-3.5 1.5 0 2.4 1 2.4 2.6v6.3h2v-5.6c0-2.4 1.4-3.3 2.6-3.3 1.5 0 2.4 1 2.4 2.6v6.3h2v-6.5c.1-2.6-1.4-4.4-3.9-4.4ZM109.4 27l-3.6-8.9h-2.2l4.8 11.6c-.3.9-.7 1.2-1.7 1.2h-2.5v2h2.5c1.8 0 2.8-.8 3.5-2.6l4.7-12.2h-2.1l-3.4 8.9Z"
              fill="#000" />
          </svg>
        </a>
      </section>
            </footer>
        </>
    )
}

export {Catalog};