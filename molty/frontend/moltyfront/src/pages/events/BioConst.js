import React, { useState, useEffect } from 'react';
import MyJson from '../global/GlobalJson';

const BioConst = ({ activeEvent, setActiveEvent }) => {

    const [bio, setBio] = useState('')

    function closeForm(e) {
        setActiveEvent(false)
    }

    // useEffect(() => {
    //     document.getElementById('setBio').textContent = bio
    // })


    function setDiv() {
        setBio(document.getElementById('bio1').value)
    }

    function saveBio() {
        localStorage.setItem('bio', bio)
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
                                Напишите информацию о <br /> Вашей компании:
                            </div>

                            <textarea id='bio1' className='headEvent textBigField button23' onChange={setDiv} />


                        </div>

                        <div className='modalFull'>
                            <div className="button65" onClick={() => saveBio()}>
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

export default BioConst