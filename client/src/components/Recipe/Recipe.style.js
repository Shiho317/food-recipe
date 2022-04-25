import styled from "styled-components";

export const RecipeCard = styled.div`
  border: 2px solid ${props => props.theme.color.orange};
  width: 25rem;
  height: 25rem;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.color.orange};
  box-shadow: 0 0 10px grey;
  border-radius: 5px;

  &:hover{
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  & a{
    text-decoration: none;
  }
`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;

  & h3{
    color: ${props => props.theme.color.pink};
    font-size: 1.1rem;
  }

  & p{
    color: ${props => props.theme.color.green};
  }
`

export const ImageWrap = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  
  & img {
    width: 100%;
  }
`