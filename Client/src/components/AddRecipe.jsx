import React from 'react'
import { AppContext } from '../context/App_Context'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
function AddRecipe() {

  const navigate=useNavigate()
      const {addRecipe}=useContext(AppContext)
      const [formData, setformData] = useState({ title:"",ist:"",ing1:"",ing2:"",ing3:"",ing4:"",qty1:"",qty2:"",qty3:"",qty4:"",imgurl:""})
      const onChangeHandler=(e)=>{
        const {name,value}=e.target
        setformData({...formData,[name]:value})
      }
  return (
    <>
    <div className='container my-5 p-5' style={{width:"500px",border:'2px solid yellow',borderRadius:'10px'}}>
        <h2 className='text-center'>Add Recipe</h2>

        <form style={{width:"400px", margin:'auto'}} className='my-3 p-3'>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input value={formData.title} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Instruction</label>
    <input  value={formData.ist} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Ing1</label>
    <input value={formData.ing1} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Ing2</label>
    <input value={formData.ing2} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Ing3</label>
    <input value={formData.ing3} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Ing4</label>
    <input value={formData.ing4} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Qty1</label>
    <input value={formData.qty1} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Qty2</label>
    <input value={formData.qty2} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Qty3</label>
    <input value={formData.qty3} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Qty4</label>
    <input value={formData.qty4} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">ImgUrl</label>
    <input value={formData.imgurl} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
    <div className="container d-grid col-6">
        <button type="submit" className="btn btn-primary mt-3">Add Recipe</button>
    </div>
 
</form>
    </div>
    
    </>
  )
}

export default AddRecipe