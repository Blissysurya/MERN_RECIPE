import React from 'react'
import { AppContext } from '../context/App_Context'
import { useContext } from 'react'

function Home() {

  const { recipe } = useContext(AppContext);

  return (
    <>
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
                    <button className="btn btn-primary mx-3">Save</button>
                    <button className="btn btn-warning">View More</button>
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