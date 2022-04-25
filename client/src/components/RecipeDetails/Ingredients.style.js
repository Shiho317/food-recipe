import styled from "styled-components";

export const IngredientsList = styled.div`
  border: 2px solid ${props => props.theme.color.orange};

  & h4{
    color: ${props => props.theme.color.orange};
  }

  & ul{
    padding: 0.5rem;
  }

  & li{
    list-style: none;
    color: ${props => props.theme.color.green};
  }
`