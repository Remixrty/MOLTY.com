import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = ({ active, setActive }) => {

    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [user, setUser] = useState('')
    const [json, setJson] = useState()
    const navigate = useNavigate()

   

    useEffect(() => {
        if (localStorage.getItem('username') && localStorage.getItem('email')) {
            setEmail(localStorage.getItem('email'))
            // console.log(localStorage.getItem('email'))
            setUsername(localStorage.getItem('username'))
            setJson(JSON.stringify({ email, username }))
        }
    }, [email, username])

    useEffect(() => {
        if (user != '') {
            const button = document.getElementById('checkButton')
            const usernameLabel = document.getElementById('usernameLabel')
            const emailLabel = document.getElementById('emailLabel')

            if (user.status == '200') {
                if (user.data.user.isActivated == true) {
                    console.log(user);
                    localStorage.setItem('token', user.data.accessToken)
                    navigate('/constructor/' + user.data.user.username)
                }
                else {

                    button.style.borderColor = 'red'
                    button.style.backgroundColor = '#EBEBEB'
                    emailLabel.textContent = 'Вам необходимо подтвердить Вашу почту'
                    emailLabel.style.color = 'red'
                }
            }
            if (user.response) {
                console.log('hello');
                if (user.response.status === '406') {
                    emailLabel.textContent = 'Проверьте введенные данные'
                    emailLabel.style.color = 'red'

                }
                if (user.response.status === '400') {
                    emailLabel.textContent = user.response.data.message
                    emailLabel.style.color = 'red'
                }
            }
        }
    })

    function closeForm(e) {
        setActive(false)
    }

    async function login(e) {
        console.log(json)
        await axios({
            url: 'http://localhost:6006/api/registration',
            method: 'POST',
            data: json,
            withCredentials: "true",
            headers: { 'Content-Type': 'application/JSON' }
        }).then(resp => {
            setUser(resp)
            // console.log(user);
            // console.log(user.data.user);
        }).catch(err => {
            setUser(err)
            console.log(user);
        })


        if (!localStorage.getItem('username') || !localStorage.getItem('email')) {
            localStorage.setItem('username', username)
            localStorage.setItem('email', email)
            setJson(JSON.stringify({ email, username }))
        }
    }




    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={e => closeForm(e)}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <div className='modalLogin'>
                        <div className='modalFlexLogin'>
                            <div className='headEvent semibold39'>
                                Введите свои данные
                            </div>
                            <div className="label">
                                <p id='emailLabel' className="wBh label">Email:</p>
                            </div>
                            <input type="text" id='header' className='headEvent textField button23' onChange={e => setEmail(e.target.value)} />
                            <div className="label">
                                <p id='usernameLabel' className="wBh label">Username:</p>
                            </div>
                            <input type="text" id='header' className='headEvent textField button23' onChange={e => setUsername(e.target.value)} />

                        </div>
                        <div className='modalFull'>
                            <div id='checkButton' className="buttonStroked" onClick={() => login()}>
                                <a className="wBh">Войти</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login