import React from 'react';

const NotFoundPage = () => {

    return (
        <main class="main-index">
        <section class="promo">
          <div class="promo-banner">
            <h1 class="visually-hidden">Седона, поиск гостиниц</h1>
            <img class="promo-logo" src="./images/welcome.svg" alt="Добро пожаловать в седону, вид на большие горы."
              width="458" height="352" />
          </div>
          <div class="promo-text">
            <p class="promo-title"><strong>Страница не найдена</strong></p>
            <p class="promo-subtitle">
              Вернитесь на главную или обновите страницу
            </p>
          </div>
        </section>
        </main>
    )
}

export {NotFoundPage}