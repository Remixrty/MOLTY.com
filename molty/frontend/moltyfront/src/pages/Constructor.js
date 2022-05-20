import React, { useState } from 'react';
import ConstructorPage from './ConstructorPage';
import EventConstructor from './EventConstructor';

export default function Constructor() {

    const [modalActive, setModalActive] = useState(false)
    const [isValid, setIsValid] = useState(false)


    function clearState() {
        localStorage.removeItem('header')
        localStorage.removeItem('bio')
        localStorage.removeItem('links')
    }

    async function checkState() {
        if (localStorage.getItem('token')) {
            await ({
                
            })
        }
    }
    // if ()
    return (
        <>
            <div className='constructor'>
                <div className='cubes-const'>
                    <object type="image/svg+xml" data="../img/cubes_const.svg" >
                        Your browser does not support SVG
                    </object>
                </div>
                <div className='container.mt-0'>
                    <div className='col-lg-12'>

                        <div className='row'>
                            <div className='phone'>
                                <ConstructorPage />
                                <div className='modalFull'>
                                    <div className='button65' onClick={() => setModalActive(true)}>
                                        <a className='wBh'>
                                            Изменить
                                        </a>
                                    </div>
                                    <div className='button65' onClick={() => clearState()}>
                                        <a className='wBh'>
                                            Очистить
                                        </a>
                                    </div>
                                </div>

                                <EventConstructor active={modalActive} setActive={setModalActive} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}