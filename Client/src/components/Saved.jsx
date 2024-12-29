import React,{useContext} from 'react'
import { AppContext } from '../context/App_Context'
import FetchRecipeById from './FetchRecipeById';
function Saved() {
  const {savedRecipe}=useContext(AppContext)
  return (
    <div>
      <div className="row container mx-auto my-3">
      {savedRecipe?.map((data) => (
        <div  key={data.recipe} className="col-md-3">
        <FetchRecipeById id={data.recipe} />
        
        </div>
        ))}
        </div>
        </div>
   
  )
}

export default Saved