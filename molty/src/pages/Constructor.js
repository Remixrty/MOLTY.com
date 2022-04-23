import React, {useState} from 'react';
import EventConstructor from './EventConstructor';

export default function Constructor() {

    const [modalActive, setModalActive] = useState(false)

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
                                <div className='whiteButton addButton' onClick={() => setModalActive(true)}>
                                    <a className='wBh'>
                                        Изменить
                                    </a>
                                </div>
                                <EventConstructor active={modalActive} setActive={setModalActive}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}