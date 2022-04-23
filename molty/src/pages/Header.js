import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ContactUs from './ContactUs'
import BackgroundConst from './events/BackgroundConst';

export default function Header() {

    const [modalActive, setModalActive] = useState(false)


    return (
        <>
            <div className='header'>


                <Link to='/'>
                    <svg className='logo' />
                </Link>
                <div className='whiteButton-header' onClick={() => setModalActive(true)}>
                    <a className='wBh'>Contact us</a>
                </div>
                <ContactUs active={modalActive} setActive={setModalActive} />
                
            </div>

        </>
    )
}