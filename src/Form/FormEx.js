import React, { useState } from 'react'

function FormEx() {

    const [UserName , setUserName] = useState("");
    const [PassWord , setPassWord] = useState("");
    const [Error,setError] = useState(false)
    const formHandler = (e) => {
        e.preventDefault();
        if(UserName.length===0 || PassWord.length===0)
        {
            setError(true)
        }
        if(UserName && PassWord)
        {
        const loginObj ={
            name : UserName,
            pwd : PassWord
        }
        console.log(loginObj)
        console.log(JSON.stringify(loginObj))
        alert(JSON.stringify(loginObj))
    }
    }
  return (
    <div>
        <h2>Login Page</h2>
        <form onSubmit={formHandler}>
            UserName : <input type="text" value={UserName}
            onChange = {(e)=>setUserName(e.target.value)}
            placeholder="username" /><br />
            <div>
            {Error && UserName.length ===0 ? <label style={{color:'red'}}>
            UserName is Required</label> : ""}
            </div><br/>
            PassWord : <input type="password" value={PassWord}
            onChange = {(e)=>setPassWord(e.target.value)}
            placeholder="password" /><br />
            <div>
            {Error && PassWord.length ===0 ? <label style={{color:'red'}}>
            PassWord is Required</label> : ""}
            </div><br/>
            <button type="submit">Login</button>

        </form>

    </div>
  )
}

export default FormEx