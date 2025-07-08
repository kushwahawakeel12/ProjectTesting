import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import Multiple_input_handling  from './Components/multiple_input_handling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* form handling */}
   {/* <div>   <Form/></div> */}

   <div>
  <Multiple_input_handling/>
   </div>
    </>
  )
}

export default App
