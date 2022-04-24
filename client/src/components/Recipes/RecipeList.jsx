import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { RecipeListWrapper } from './RecipeList.style'

const RECIPES_LIST = gql`
  query RecipesList {
    results {
      cook_time_minutes
      slug
      video_url
      prep_time_minutes
      name
      thumbnail_url
      num_servings
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
    </RecipeListWrapper>
  )
}

export default RecipeList