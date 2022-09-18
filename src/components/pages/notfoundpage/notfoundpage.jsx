import React from 'react';

const NotFoundPage = () => {

    return (
        <main className="main-index">
        <section className="promo">
          <div className="promo-banner">
            <h1 className="visually-hidden">Седона, поиск гостиниц</h1>
            <img className="promo-logo" src="./images/welcome.svg" alt="Добро пожаловать в седону, вид на большие горы."
              width="458" height="352" />
          </div>
          <div className="promo-text">
            <p className="promo-title"><strong>Страница не найдена</strong></p>
            <p className="promo-subtitle">
              Вернитесь на главную или обновите страницу
            </p>
          </div>
        </section>
        </main>
    )
}

export {NotFoundPage}