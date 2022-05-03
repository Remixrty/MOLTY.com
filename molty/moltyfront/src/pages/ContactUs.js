import React from "react";

import '../App.css';

const ContactUs = ({ active, setActive }) => {
    // console.log('hello')
    function closeForm(e) {
        setActive(false)
        document.getElementById('mainForm').reset()
    }

    function submit() {

    }

    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={e => closeForm(e)}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <div className="mainform-Login">
                        <main>
                            <form onSubmit={submit} id='mainForm'>
                                <div className="form">
                                    <p className="medd">
                                        Свяжитесь с нами!
                                    </p>
                                    <div className="label">
                                        <p className="wBh label">Введите имя:</p>
                                    </div>
                                    <div className="label">
                                        <p className="wBh label">Укажите почту:</p>
                                    </div>
                                    <div className="label">
                                        <p className="wBh label">Напишите Ваш вопрос:</p>
                                    </div>
                                    <div className="buttonStroked">
                                        <a className="wBh">Отправить запрос</a>
                                    </div>
                                </div>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ContactUs;