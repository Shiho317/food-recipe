import styled from "styled-components";

export const RecipeDetailsWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.color.base};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const RecipeHeaderWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  & img{
    margin-top: 1rem;
    width: 40rem;
    height: 40rem;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderTitle = styled.div`

  & h1{
    font-size: 2rem;
    color: ${props => props.theme.color.pink};
  }

  & p{
    font-size: 1rem;
    color: ${props => props.theme.color.green};
    text-align: end;
  }
`

export const IngredientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  & h2 {
    font-size: 1.2rem;
    color: ${props => props.theme.color.orange};
  }
`

export const RecipeInstructions = styled.ul`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const IconsWrapper = styled.div`
  margin: 2rem;

  & a{
    font-size: 2rem;
    color: ${props => props.theme.color.pink};
    cursor: pointer;
  }
`