import React from 'react';

const Main = () => {
    return (
        <>
            <main className='main-index'>
        <section className="promo">
          <div className="promo-banner">
            <h1 className="visually-hidden">Седона, поиск гостиниц</h1>
            <img className="promo-logo" src="./images/welcome.svg" alt="Добро пожаловать в седону, вид на большие горы."
              width="458" height="352" />
          </div>
          <div className="promo-text">
            <p className="promo-title"><strong>Седона — небольшой городок в Аризоне, заслуживающий большего!</strong></p>
            <p className="promo-subtitle">
              Рассмотрим 5 причин, по которым Седона круче, чем Гранд-Каньон!
            </p>
          </div>
        </section>
        <section className="advantage">
          <h2 className="visually-hidden">Преимущества</h2>
          <ul className="disordered advantage-list simple-list">
            <li className="advantage-item advantage-item-promo blu">
              <div className="card-text card-text-promo">
                <h3 className="heading">Настоящий городок</h3>
                <p>— №1 —</p>
                <p>Седона — не аттракцион для туристов, там течёт своя жизнь</p>
              </div>
              <img className="card-image" src="./images/photo-1.jpg" alt="Красивый вид на двух этажную гостиницу." width="800"
                height="384" />
            </li>
            <li className="advantage-item light-blu">
              <div className="card-text card-text-normal">
                <h3 className="house heading">Жильё</h3>
                <p className="lodging">Рекомендуем пожить в настоящем мотеле, всё как в кино!</p>
              </div>
            </li>
            <li className="advantage-item blu-white">
              <div className="card-text card-text-normal">
                <h3 className="food heading">Еда</h3>
                <p>Всегда заказывайте <br />топовый фирменный бургер, вы не разочаруетесь!</p>
              </div>
            </li>
            <li className="advantage-item light-blu">
              <div className="card-text card-text-normal">
                <h3 className="souvenir heading">Сувениры</h3>
                <p>Не только китайского, <br />но и настоящего местного производства!</p>
              </div>
            </li>
          </ul>
          <ul className="disordered advantage-list number-list">
            <li className="advantage-item advantage-item-promo blu">
              <div className="card-text card-text-promo">
                <h3 className="heading">Там есть <br />мост дьявола</h3>
                <p>— №2 —</p>
                <p>Да, по нему можно пройти! Если вы осмелитесь, разумеется</p>
              </div>
              <img className="card-image" src="./images/photo-2.jpg" alt="Мост дьявола в горах." width="800" height="384" />
            </li>
            <li className="advantage-item light-blu">
              <div className="card-text card-text-number">
                <h3 className="heading">Небольшая площадь</h3>
                <p>— №3 —</p>
                <p>Все достопримечательности находятся очень близко</p>
              </div>
            </li>
            <li className="advantage-item dark-blu">
              <div className="card-text card-text-number">
                <h3 className="heading">Красивая дорога</h3>
                <p>— №4 —</p>
                <p>Ехать в Седону из Лас-Вегаса совсем не скучно!</p>
              </div>
            </li>
            <li className="advantage-item light-blu">
              <div className="card-text card-text-number">
                <h3 className="heading">Мало туристов</h3>
                <p>— №5 —</p>
                <p>Большинство едет в Гранд Каньон и толпится там</p>
              </div>
            </li>
          </ul>
        </section>
        <section className="search-block">
          <h2 className="visually-hidden">Форма поиска</h2>
          <p><strong>Заинтересовались?</strong></p>
          <p className="search-block-subtitle">Укажите предполагаемые даты поездки, <br />и мы покажем вам лучшие предложения
            гостиниц в Седоне</p>
          <a className="btn" href="#">Поиск гостиницы в седоне</a>
        </section>
            </main>
            <footer>
        <section className="subscription-form">
          <h2 className="subscription-title">Подпишитесь на рассылку</h2>
          <p className="subscription-subtitle">Только полезная информация и никакого спама, честное бойскаутское!</p>
          <form className="mailing-form" action="https://echo.htmlacademy.ru/" method="post">
            <p className="e-mail">
              <label htmlFor="e-mail" className="visually-hidden">Укажите Ваш e-mail адресс</label>
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

export { Main };