const Modal = () => {

    return (
        <div class="modal-container modal-container-close">
            <div class="modal modal-search">
                <button class="modal-close-button">
                    <span class="visually-hidden">Закрыть</span>
                </button>
                <section class="modal-content">
                    <h2 class="modal-title">Поиск гостиницы в Седоне</h2>
                    <form class="modal-form" action="https://echo.htmlacademy.ru/" method="get">
                        <p class="field-group appointment-form-date">
                            <label class="form-label label-form" for="appointment-date-arrival">Дата заезда:</label>
                            <input type="text" class="appointment-date-arrival" id="appointment-date-arrival" name="appointment-date"
                                placeholder="27 апреля 2020" required />
                            <span class="input-message input-message-error">Мы не можем отправить вас в прошлое.</span>
                        </p>
                        <p class="field-group appointment-form-date">
                            <label class="form-label label-form" for="appointment-date-departure">Дата выезда:</label>
                            <input type="text" class="appointment-date-departure" id="appointment-date-departure"
                                name="appointment-date" placeholder="1 сентября 2021" />
                            <span class="input-message">На эти даты есть свободные номера. Пока есть.</span>
                        </p>
                        <div class="human">
                            <div class="field-group appointment-form-human">
                                <label class="form-label form-label-adult" for="appointment-human-adult">Взрослые:</label>
                                <div class="input-controls-wrapper input-adult">
                                    <div class="input-controls">
                                        <button class="input-button decrease" type="button">
                                            <span class="visually-hidden">Уменьшить на 1</span>
                                        </button>
                                        <button class="input-button increase" type="button">
                                            <span class="visually-hidden">Увеличить на 1</span>
                                        </button>
                                    </div>
                                    <input type="number" class="appointment-human input-adult" id="appointment-human-adult"
                                        name="appointment-human-adult" placeholder="2" min="0" />
                                </div>
                            </div>
                            <div class="field-group appointment-form-human">
                                <label class="form-label form-label-children" for="appointment-human-children">Дети:</label>
                                <div class="children-info">
                                    <button class="dop-info" type="button">i</button>
                                    {/* <!--для вывода информации добавить класс children-block-activ--> */}
                                    <div class="children-block">
                                        <p class="children-text">Укажите количество детей, которые будут с вами, возраст которых от 6 до 18
                                            лет. Дети до 6 лет размещаются бесплатно.</p>
                                    </div>
                                </div>
                                <div class="input-controls-wrapper input-children">
                                    <div class="input-controls">
                                        <button class="input-button decrease" type="button">
                                            <span class="visually-hidden">Уменьшить на 1</span>
                                        </button>
                                        <button class="input-button increase" type="button">
                                            <span class="visually-hidden">Увеличить на 1</span>
                                        </button>
                                    </div>
                                    <input type="number" class="appointment-human appointment-human-children"
                                        id="appointment-human-children" name="appointment-human-adult" placeholder="1" min="0" />
                                </div>
                            </div>
                        </div>
                        <button class="button appointment-search" type="submit">Записаться</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export { Modal };