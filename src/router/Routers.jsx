import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'
import Home1 from '../pages/Home1'
import LoginPage from '../pages/LoginPage'

const Routers = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home1/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
     </Routes>
    </div>
  )
}

export default Routers
