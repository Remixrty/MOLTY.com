import React from 'react';

const MyJson = () => {
    const global = [
        {
            back: localStorage.getItem('back')?localStorage.getItem('back'):'none',
            bio: localStorage.getItem('bio')?localStorage.getItem('bio'):'none',
            header: localStorage.getItem('header')?localStorage.getItem('header'):'none',
            email: localStorage.getItem('email')?localStorage.getItem('email'):'none',
            name: localStorage.getItem('name')?localStorage.getItem('name'):'none',
        }
    ]
    console.log(global);
    localStorage.clear()
    return JSON.stringify(global)
}

export default MyJson