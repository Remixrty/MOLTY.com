import React from 'react';
import { useParams } from 'react-router-dom';
import MyJson from './global/GlobalJson';

export default function ConstructorPage() {
    // const {username} = props
    let json = new MyJson()
    // console.log(username);
    const globalJson = json.getGlobal()
    console.log(globalJson)
    // console.log(json.map(e=>({e})));
    if (globalJson.bio == 'none' && globalJson.back == 'none' && globalJson.email == 'none' && globalJson.header == 'none' && globalJson.username == 'none' && globalJson.links) {
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
                    <div className='bigg'>{globalJson.header}</div>
                    <div className='medd'>{globalJson.bio}</div>
                    <div className='bigg'>{globalJson.links}</div>
                    {/* <div className='bigg'>{globalJson.}</div> */}
                {/* </div> */}
            </>
        )
    }
}