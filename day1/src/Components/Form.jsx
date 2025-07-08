import React, { useState } from "react";
const Form=()=>{
  const [name,setName] = useState('wakeel')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const formHandler = (e)=>{
e.preventDefault()
alert("your form has been submitted" + " "+name+" "+email+" "+password)
  }

  return(
    <>
    <h1>Form handling</h1>
    <div>
      <form onSubmit={formHandler}>
        <div> 
         name = <input type="text" name="" id="" value={name} onChange={(e)=>{
          setName(e.target.value)
         }}/>
         <h3>{name}</h3>
        </div>
        <div> 
         email <input type="email" name="" id="" value={email} onChange={(e)=>{
          setEmail(e.target.value)
         }} />
         <h3>{email}</h3>
        </div>
        <div> 
         password <input type="password" name="" id="" value={password} onChange={(e)=>{
          setPassword(e.target.value)
         }} />
         <h3>{password}</h3>
        </div>
        <div>
          <button>click me</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Form