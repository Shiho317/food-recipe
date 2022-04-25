import styled from "styled-components";

export const RecipeListWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  background: ${props => props.theme.color.base};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RecipeWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  aling-items: center;
  gap: 2rem 0;
`