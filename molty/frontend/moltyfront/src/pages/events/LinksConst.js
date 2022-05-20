import React, { useEffect, useState } from 'react';
import MyJson from '../global/GlobalJson';

const LinksConst = ({ activeEvent, setActiveEvent }) => {
    const [initialValue, setInitialValue] = useState('')
    const [i, setI] = useState(0)
    const [link, setLink] = useState('Ссылки')
    const [ins, setIns] = useState('Выберите ссылку выше')
    let json = new MyJson()
    // console.log(username);

    useEffect(() => {
        if (link === 'VK') {
            setIns('vk.com/')
        }
        if (link === 'TIKTOK') {
            setIns('tiktok.com/')
        }
        if (link === 'INSTAGRAM') {
            setIns('instagram.com/')
        }
        document.getElementById('links').value = ins
    }, [ins, link])

    useEffect(() => {
        if (initialValue !== '') {
            localStorage.setItem('links', initialValue)
        }
        else if (localStorage.getItem('links')) {
            setInitialValue(localStorage.getItem('links'))
        }
    }, [initialValue])

    // useEffect(()=> {
    //     document.getElementById
    // })

    const globalJson = json.getGlobal()
    function closeForm(e) {
        setActiveEvent(false)
    }

    function addLink() {
        if (document.getElementById('links').value != ins) {
            if (initialValue.indexOf(ins) == -1) {
                if (!localStorage.getItem('links')) {
                    setInitialValue(document.getElementById('links').value)
                }
                else {
                    setInitialValue(localStorage.getItem('links') + '\n' + document.getElementById('links').value)
                }
            }
            else {
                console.log(initialValue.indexOf(ins));
            }
        }
        console.log(initialValue, ins);
        // console.log(initialValue);
    }

    function saveLink() {
        
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

                                <div className="dropdown">
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {link}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" onClick={() => setLink('VK')}>VK</a></li>
                                        <li><a className="dropdown-item" onClick={() => setLink('INSTAGRAM')}>INSTAGRAM</a></li>
                                        <li><a className="dropdown-item" onClick={() => setLink('TIKTOK')}>TIKTOK</a></li>
                                    </ul>
                                </div>


                                <input type="text" id='links' className='headEvent textField button23' />
                                <div className="button65" onClick={e => addLink()}>
                                    <a className="wBh">Добавить</a>
                                </div>

                                <div className="modalFull_links">
                                    <div className='headEvent button23'>
                                        {initialValue}
                                        {/* <ul>
                                            {
                                                initialValue.map(item=>{
                                                    return (<li>{item}</li>)
                                                })
                                            }
                                        </ul> */}

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