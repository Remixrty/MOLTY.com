import React, { useState } from 'react';

const LinksConst = ({ activeEvent, setActiveEvent }) => {

    function closeForm(e) {
        setActiveEvent(false)
    }

    return (
        <>
            <div className={activeEvent ? "modal active" : "modal"} onClick={e => closeForm(e)}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <div className='modalEvent'>
                        <div className='modalFLex'>

                        </div>
                        <div className='modalFull'>
                            <div className="buttonStroked" onClick={e => closeForm(e)}>
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