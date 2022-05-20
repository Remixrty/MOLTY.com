import React from 'react';
import { useParams } from 'react-router-dom';
import MyJson from './global/GlobalJson';

export default function ConstructorPage() {
    // const {username} = props
    let json = new MyJson()
    // console.log(username);
    const globalJson = json.getGlobal()
    const splittedLinks = globalJson.links.split('\n')
    console.log(splittedLinks);
    // console.log(globalJson)
    // console.log(json.map(e=>({e})));
    if (globalJson.bio == 'none' && globalJson.back == 'none' && globalJson.email == 'none' && globalJson.header == 'none' && globalJson.username == 'none' && globalJson.links == 'none' && !localStorage.getItem('token')) {
        return (
            <>
                <div className='container'>
                    <p className='bigg'>404: страница не найдена.</p>
                </div>
            </>
        )
    }
    else {

        return (
            <>
                {/* <div className='container'> */}
                <div className='bigg const_header'>{globalJson.header}</div>
                <div className='medd const_bio'>{globalJson.bio}</div>
                <div className="modalFlexx">
                    {
                        splittedLinks.map((link, index) => {
                            return (
                                <div key={index} className='button23 const_links'>
                                    <a href={'//'+link}>{link}</a>
                                    
                                    <br/>
                                    </div> 
                            )
                        })
                    }
                    {/* <div className='button23 const_links'>vk.com/remixrty</div>
                    <div className='button23 const_links'>instagram.com/Remixrty</div> */}
                </div>

                {/* <div className='bigg'>{globalJson.}</div> */}
                {/* </div> */}
            </>
        )
    }
}