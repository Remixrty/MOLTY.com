import { BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Cabinet from './pages/Cabinet'
import Header from './pages/Header'
import Constructor from './pages/Constructor'

export default function Router() {

    return (
        <>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/username' element={<Cabinet/>}/>
                <Route path='/constructor' element={<Constructor/>}/>
            </Routes>
        
        </BrowserRouter>
        </>
    )
}