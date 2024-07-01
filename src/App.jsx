//import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import ExploreProducts from "./pages/ExploreProducts"
import AdvancedSearch from './pages/AdvanceSearch'
import SingleProduct from './pages/SingleProduct'
import SignIn from './pages/SignIn';
import Register from './pages/Register';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/advance' element={<AdvancedSearch/>}/>
        <Route path='/exploreProducts' element={<ExploreProducts/>}/>
        <Route path='/singleProduct' element={<SingleProduct/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      
      </Routes>
    </div>
  )
}

export default App
