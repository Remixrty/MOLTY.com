import React from 'react';
import { useParams } from 'react-router-dom';

export default function ConstructorPage() {
// const {username} = props

// console.log(username);

    if (localStorage.length != 0) {
        return (
            <><div className='container'>
                <p className='bigg'>404: страница не найдена.</p>
            </div>
            </>
        )
    }
    else {

        return (
            <>
            {/* <p className='bigg'>{username}</p> */}
            </>
        )
    }
}