import React from 'react'
import { Link } from 'react-router-dom';
import { CardDetails, ImageWrap, RecipeCard } from './Recipe.style'

const Recipe = ({ recipe }) => {

  return (
    <RecipeCard>
      <Link to={`/recipe/${recipe.id}`}>
        <ImageWrap>
          <img src={recipe.thumbnail_url} alt='recipe-card' />
        </ImageWrap>
        <CardDetails>
          <h3>{recipe.name}</h3>
          <p><em>Time Needed: </em>{recipe.total_time_tier ? recipe.total_time_tier.display_tier : 'none'}</p>
        </CardDetails>
      </Link>
    </RecipeCard>
  )
}

export default Recipe