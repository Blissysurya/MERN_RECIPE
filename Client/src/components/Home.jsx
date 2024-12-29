import React from 'react'
import { AppContext } from '../context/App_Context'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast,Bounce } from 'react-toastify';
function Home() {
  const navigate=useNavigate();
  const { recipe,savedRecipeById} = useContext(AppContext);

  const saved = async (id)=>{
    const result= await savedRecipeById(id);
     toast.success(result.data.message, {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
  }
  return (
    <>
    <ToastContainer
          position="top-right"/>
      <div className=' text-center mx-auto' style={{ width: "1200px" }}>
        <div className='row d-flex justify-content-center align-items-center ' style={{ gap: "" }}>

          {
            recipe.map((data) => (
              <div className=" text-light card bg-dark my-3" style={{ width: "18rem" }} key={data._id}>

                <div className='p-3 d-flex justify-content-center align-items-center'>

                  <img src={data.imgurl} className="card-img-top" alt="..." style={{ width: "200px", height: "200px", borderRadius: "10px", border: '2px solid yellow' }} />

                </div>

                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>

                  <div className='my-3'> 
                    <button className="btn btn-primary mx-3" onClick={()=>{saved(data._id)}}>Save</button>
                    <button onClick={()=>navigate(`/${data._id}`)} className="btn btn-warning">View More</button>
                  </div>


                </div>
              </div>
            ))
          }



        </div>
      </div>

    </>

  )
}

export default Home