import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import ExploreProducts from "./pages/ExploreProducts"
import AdvancedSearch from './pages/AdvanceSearch'
import SingleProduct from './pages/SingleProduct'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/advance' element={<AdvancedSearch/>}/>
        <Route path='/exploreProducts' element={<ExploreProducts/>}/>
        <Route path='/singleProduct' element={<SingleProduct/>}/>
      </Routes>
    </div>
  )
}

export default App
