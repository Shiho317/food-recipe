import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { RecipeListWrapper, RecipeWrapper } from './RecipeList.style'
import Recipe from '../Recipe/Recipe'

const RECIPES_LIST = gql`
  query RecipesList {
    recipes {
      cook_time_minutes
      slug
      video_url
      prep_time_minutes
      name
      thumbnail_url
      num_servings
      total_time_tier {
        display_tier
      }
      id
    }
  }
`

const RecipeList = () => {

  const { loading, error, data } = useQuery(RECIPES_LIST);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Something went wrong.</p>

  console.log(data)

  return (
    <RecipeListWrapper>
      <RecipeWrapper>
        {data.recipes.map(recipe => (
          <Recipe recipe={recipe} key={recipe.id}/>
        ))}
      </RecipeWrapper>
    </RecipeListWrapper>
  )
}

export default RecipeList