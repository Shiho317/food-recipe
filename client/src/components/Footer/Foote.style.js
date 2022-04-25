import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 10rem;
  background: ${props => props.theme.color.green};
  display: grid;
  align-items: center;
  padding: 2rem;

  & h1{
    opacity: 0.5;
    color: ${props => props.theme.color.base};
  }
`