import React, { useState } from 'react';
import Constructor from './Constructor';
import SecondPage from './SecondPage';
import { Link } from 'react-router-dom';
import Login from './Login'

export default function MainPage() {

    const [modalLoginActive, setModalLoginActive] = useState(false)


    return (
        <>
            <div className='firstPage'>

                <div className='container'>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <div className='cubes'>
                                <object type="image/svg+xml" data="../img/cubes.svg" >
                                    Your browser does not support SVG
                                </object>
                            </div>
                            <div className='text'>
                                <div className='bigg'>
                                    Online-constructor Molty <br /> for your business.
                                </div>
                                <div className='medd'>
                                    Конструктор персональных<br /> мультиссылок.
                                </div>
                                {/* <Link to='/constructor' style={{ textDecoration: 'inherit', color: 'inherit' }}> */}

                                <div className='whiteButton' onClick={() => setModalLoginActive(true)}>
                                    <a className='wBh'>Создать дизайн</a>
                                </div>
                                <Login active={modalLoginActive} setActive={setModalLoginActive} />
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SecondPage />
        </>
    )
}