import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Ingredients from './Ingredients'
import Instructions from './Instructions'
import { 
  HeaderRight, 
  HeaderTitle, 
  IconsWrapper, 
  IngredientsWrapper,
  RecipeDetailsWrapper, 
  RecipeHeaderWrapper, 
  RecipeInstructions 
} from './RecipeDetails.style'
import { BsArrowLeftCircleFill } from 'react-icons/bs'

const RECIPE_QUERY = gql`
  query RecipeQuery($id: String!) {
    item(id: $id){
      sections {
        components {
          raw_text
        }
        name
      }
      name
      topics {
        slug
      }
      instructions {
        display_text
        position
      }
      thumbnail_url
      yields
    }
  }
`

const RecipeDetails = () => {

  const { id } = useParams();

  const { loading, error, data } = useQuery(RECIPE_QUERY, {
    variables: {id}
  });

  if(loading) return <p>Loading...</p>
  if(error) return <p>Something went wrong.</p>

  console.log(data)

  return (
    <RecipeDetailsWrapper>
      <IconsWrapper>
        <Link to='/'>
          <BsArrowLeftCircleFill/>
        </Link>
      </IconsWrapper>
      <RecipeHeaderWrapper>
        <img src={data.item.thumbnail_url} alt='recipe-item' />
        <HeaderRight>
          <HeaderTitle>
            <h1>{data.item.name}</h1>
            <p>{data.item.yields}</p>
          </HeaderTitle>
          <IngredientsWrapper>
            <h2>Ingredients</h2>
            {data.item.sections.map(section => (
              <Ingredients section={section} key={section.name}/>
            ))}
          </IngredientsWrapper>
        </HeaderRight>
      </RecipeHeaderWrapper>
      <RecipeInstructions>
        {data.item.instructions.map(instruction => (
          <Instructions key={instruction.position} instruction={instruction}/>
        ))}
      </RecipeInstructions>
    </RecipeDetailsWrapper>
  )
}

export default RecipeDetails