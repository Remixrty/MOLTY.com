import React from 'react';
import { useParams } from 'react-router-dom';
import MyJson from './global/GlobalJson';

export default function MultyLink() {
    let json = new MyJson()
    const globalJson = json.getGlobal()
    const splittedLinks = globalJson.links.split('\n')
    console.log(globalJson)
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
                <div className='container.mt-0'>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <div className='link'>
                                <div className='bigg const_header'>{globalJson.header}</div>
                                <div className='medd const_bio'>{globalJson.bio}</div>
                                {/* <div className='bigg const_links'>{globalJson.links}</div> */}
                                <div className="modalFlexx">
                                    {
                                        splittedLinks.map((link, index) => {
                                            return (
                                                <div key={index} className='button23 const_links'>
                                                    <a href={'//' + link}>{link}</a>

                                                    <br />
                                                </div>
                                            )
                                        })
                                    }
                                    {/* <div className='button23 const_links'>vk.com/remixrty</div>
                    <div className='button23 const_links'>instagram.com/Remixrty</div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className='container'> */}


                {/* <div className='bigg'>{globalJson.}</div> */}
                {/* </div> */}
            </>
        )
    }
}