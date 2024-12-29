import React from 'react'
import { useParams } from 'react-router-dom'
import FetchRecipeById from './FetchRecipeById';
import { AppContext } from '../context/App_Context'
function Detail() {

    const { id } = useParams();

  return (

    <div>
        <FetchRecipeById id={id}/>

    </div>
  )
}

export default Detail