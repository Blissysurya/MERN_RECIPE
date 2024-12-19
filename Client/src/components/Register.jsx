import React from 'react'
import { AppContext } from '../context/App_Context'
import { useContext,useState } from 'react';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
function Register() {

    const navigate=useNavigate()
      const {register}=useContext(AppContext)
      const [name, setname] = useState("")
      const [gmail, setgmail] = useState("")
      const [password, setpassword] = useState("")


      const registerHandler= async(e) =>{
              e.preventDefault();
              const result = await register(name,gmail,password)
              
              toast.success(result.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
              console.log(result.data.message);
             if(result.data.message!=="user already exists"){
              setTimeout(() => {
                navigate('/login')
              }, 2000);
             }
             
          }
      
  return (
    <>
    <div className='container my-5 p-5' style={{width:"500px",border:'2px solid yellow',borderRadius:'10px'}}>
        <h2 className='text-center'>Register</h2>

        <form onSubmit={registerHandler} style={{width:"420px", margin:'auto'}} className='my-3 p-3'>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input value={name} onChange={(e)=>setname(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input value={gmail} onChange={(e)=>setgmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" required />
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value={password} onChange={(e)=> setpassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
 
    <div className="container d-grid col-6">
        <button type="submit" className="btn btn-primary mt-3">Register</button>
    </div>
 
</form>
    </div>
    
    </>
  )
}

export default Register