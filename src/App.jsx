import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Project6/Components/Home'
import Cart from './Project6/Components/Cart'
import Navbar from './Project6/Components/Navbar.jsx'
import { useState } from 'react'
import About from './Project6/Components/About.jsx'
import Data from './Project6/Components/Data.js'


const App = () => {
  const[data,setData]=useState(Data)
  const[search,setSearch]=useState("")
  const[cart,setCart]=useState([])
  

  function handleClick(item) {
    setCart([...cart,item])
  }

  return (
    <div>
     <BrowserRouter>
     <Navbar data={data} setData={setData} setSearch={setSearch} size={cart.length}/>
        <Routes>
              <Route path='/'element={<Home data={data} search={search} handleClick={handleClick}/>}/>
              <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
              <Route path='/about/:aboutId' element={<About Data={Data}/>}/>
              
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App