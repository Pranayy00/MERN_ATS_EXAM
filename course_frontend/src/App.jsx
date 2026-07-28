import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AddCourse from './components/AddCourse'
import EditCourse from './components/EditCourse'
import ShowCourse from './components/ShowCourse'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/add' element={ <AddCourse /> } />
          <Route path='/edit/:id' element={ <EditCourse /> } />
          <Route path='/:id' element={ <ShowCourse /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
