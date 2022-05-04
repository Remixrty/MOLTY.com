import axios from 'axios';
import React from 'react';

class MyJson {

    constructor() {
        
    }
    getGlobal() {
        const global =
        {
            back: localStorage.getItem('back') ? localStorage.getItem('back') : 'none',
            bio: localStorage.getItem('bio') ? localStorage.getItem('bio') : 'none',
            header: localStorage.getItem('header') ? localStorage.getItem('header') : 'none',
            links: localStorage.getItem('links') ? localStorage.getItem('links') : 'links',
            email: localStorage.getItem('email') ? localStorage.getItem('email') : 'none',
            username: localStorage.getItem('username') ? localStorage.getItem('username') : 'none',
        }
        // localStorage.clear()
        // console.log(global);
        return global
    }
    // console.log(global);



    async save() {
        if (global.username != 'none') {
            console.log('hello', global);
            await axios({
                url: 'http://localhost:5000/api/constructor/' + global.username,
                method: 'POST',
                data: JSON.stringify(global),
                withCredentials: "true",
                headers: { 'Content-Type': 'application/JSON' }
            }).then(resp => {
                console.log(resp.data)
            }).catch(err => {
            })
        }
    }


}

export default MyJson