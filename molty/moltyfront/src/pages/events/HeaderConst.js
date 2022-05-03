import React, { useEffect, useState } from 'react';
import MyJson from '../global/GlobalJson';

const HeaderConst = ({ activeEvent, setActiveEvent }) => {

    const [header, setHeader] = useState('')

    function closeForm(e) {
        setActiveEvent(false)
        
    }

    useEffect(() => {
        document.getElementById('setHeader').textContent = header
    })


    function setDiv() {
        setHeader(document.getElementById('header').value)
    }

    function saveHeader() {
        localStorage.setItem('header', header)
        // MyJson()
    }

    return (
        <>
            <div className={activeEvent ? "modal active" : "modal"} onClick={e => closeForm(e)}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <div className='modalEvent'>
                        <div className='modalFLex'>
                            <div className='headEvent semibold39'>
                                Введите заголовок
                            </div>

                            <div className='headEvent button23'>
                                Напишите название своей <br />компании/Ваш никнейм
                            </div>

                            <input type="text" id='header' className='headEvent textField button23' onChange={setDiv} />

                            <div className='headEvent button23'>
                                Он будет отображаться наверху<br />Вашей страницы:
                            </div>

                            <p id='setHeader' className='headEvent semibold39'></p>


                        </div>

                        <div className='modalFull'>
                            <div className="button65" onClick={() => saveHeader()}>
                                <a className="wBh">Сохранить</a>
                            </div>
                            <div className="button65" onClick={e => closeForm(e)}>
                                <a className="wBh">Назад</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeaderConst