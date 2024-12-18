import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import AddRecipe from './components/AddRecipe'
import {BrowserRouter as Router,Routes,Route} from  'react-router-dom'
import Saved from './components/Saved.jsx'
import Home from './components/Home'
import Profile from './components/Profile'
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/saved' element={<Saved/>}/>
        <Route path='/add' element={<AddRecipe/>}/>

          
    </Routes>
    </Router>
    </>
  )
}

export default App