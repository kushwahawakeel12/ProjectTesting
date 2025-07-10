import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import Home from './pages/Home'
 import About from './pages/About'
 import Product from './pages/Product'
 import Form from "../../day1/src/Components/Form"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
<Router>
  <Routes>
    <Route path = "/" element={<Home/>}></Route>
        <Route path = "/About" element={<About/>}></Route>
            <Route path = "/Product" element={<Product/>}></Route>
             <Route path = "/Form" element={<Form/>}></Route>

  </Routes>
</Router>
   
     </div>
    </>
  )
}

export default App
