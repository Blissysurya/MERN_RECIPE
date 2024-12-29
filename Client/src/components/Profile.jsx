import React from 'react'
import { AppContext } from '../context/App_Context'

function Profile() {

  const { user,userRecipe } = React.useContext(AppContext)
  return (
    <>
    <div className="container text-center my-3">
    <h1>Welcome, {user.name}</h1>
    <h2>{user.gmail}</h2>
    </div>

    <div className="container">
    <div className=' text-center mx-auto' style={{ width: "1200px" }}>
        <div className='row d-flex justify-content-center align-items-center ' style={{ gap: "" }}>

          {
            userRecipe?.map((data) => (
              <>

                <div className='p-3 d-flex justify-content-center align-items-center'>

                  <img src={data.imgurl} className="card-img-top" alt="..." style={{ width: "200px", height: "200px", borderRadius: "10px", border: '2px solid yellow' }} />

                </div>

                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>

                </div>
                </>
             
            ))
          }



        </div>
      </div>
    </div>
    </>
  )
}

export default Profile