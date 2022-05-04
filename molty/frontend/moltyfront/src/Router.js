import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Cabinet from './pages/Cabinet'
import Header from './pages/Header'
import ConstructorPage from './pages/ConstructorPage'
import Constructor from './pages/Constructor'
import MultyLink from './pages/MultyLink'

export default function Router() {

    return (
        <>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/username' element={<Cabinet/>}/>
                <Route path='/constructor/:link' element={<Constructor/>}/>
                <Route path='/:link' element={<MultyLink/>}/>
            </Routes>
        
        </BrowserRouter>
        </>
    )
}