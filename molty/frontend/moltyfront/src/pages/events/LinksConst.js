import React, { useState } from 'react';
import MyJson from '../global/GlobalJson';

const LinksConst = ({ activeEvent, setActiveEvent }) => {



    let json = new MyJson()
    // console.log(username);
    const globalJson = json.getGlobal()
    function closeForm(e) {
        setActiveEvent(false)
    }

    return (
        <>
            <div className={activeEvent ? "modal active" : "modal"} onClick={e => closeForm(e)}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <div className='modalEvent'>
                        <div className='modalFLex'>
                            <div className='modalFull_more'>

                                <div className='headEvent button23'>
                                    Выберите платформу <br />из выпадающего списка
                                </div>

                                <div class="dropdown">
                                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                                        Ссылки
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                

                                <input type="text" id='header' className='headEvent textField button23' />
                                <div className="button65" >
                                    <a className="wBh">Добавить</a>
                                </div>

                                <div className="modalFull_links">
                                    <div className='headEvent button23'>
                                        {globalJson.links}
                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className='modalFull'>
                            <div className="button65" >
                                <a className="wBh">Сохранить</a>
                            </div>
                            {/* <div className="button65" >
                                <a className="wBh">Сохранить</a>
                            </div> */}
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

export default LinksConst