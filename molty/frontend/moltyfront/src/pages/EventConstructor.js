import React, { useState } from 'react';
import HeaderConst from './events/HeaderConst';
import BioConst from './events/BioConst';
import BackgroundConst from './events/BackgroundConst';
import LinksConst from './events/LinksConst';
import MyJson from './global/GlobalJson';
// import { saveConst } from '../../../../backend/moltyback/controllers/user-controller';

const EventConstructor = ({ active, setActive }) => {

    const [modalActiveHeader, setModalActiveHeader] = useState(false)
    const [modalActiveBio, setModalActiveBio] = useState(false)
    const [modalActiveLinks, setModalActiveLinks] = useState(false)
    const [modalActiveBack, setModalActiveBack] = useState(false)


    function closeForm(e) {
        setActive(false)
        document.getElementById('mainForm').reset()
    }

    function saveConst() {
        const saver = new MyJson()
        saver.save(saver.getGlobal())
    }


    function chooseEvent(key) {
        // console.log('hello')
        switch (key) {
            case 1:
                setModalActiveHeader(true)
                break;
            case 2:
                setModalActiveBio(true)
                break;
            case 3:
                setModalActiveLinks(true)
                break;
            case 4:
                setModalActiveBack(true)
                break;
            default:
                break;
        }
    }


    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={e => closeForm(e)}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <div className='modalEvent'>
                        <div className='modalFlex'>

                            <div className='events' onClick={() => chooseEvent(1)}>
                                <a className='button23'>
                                    Заголовок
                                </a>
                            </div>
                            <HeaderConst activeEvent={modalActiveHeader} setActiveEvent={setModalActiveHeader} />

                            <div className='events' onClick={() => chooseEvent(2)}>
                                <a className='button23'>
                                    Описание
                                </a>
                            </div>
                            <BioConst activeEvent={modalActiveBio} setActiveEvent={setModalActiveBio} />

                            <div className='events' onClick={() => chooseEvent(3)}>
                                <a className='button23 perenos'>
                                    Ссылки на соцсети
                                </a>
                            </div>
                            <LinksConst activeEvent={modalActiveLinks} setActiveEvent={setModalActiveLinks} />

                            <div className='events' onClick={() => chooseEvent(4)}>
                                <a className='button23'>
                                    Фон страницы
                                </a>
                            </div>
                            <BackgroundConst activeEvent={modalActiveBack} setActiveEvent={setModalActiveBack} />

                        </div>
                        <div className='modalFull'>
                            <div className="button65" onClick={e => saveConst(e)}>
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

export default EventConstructor