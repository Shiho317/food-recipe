import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 6rem;
  background: ${props => props.theme.color.green};
  padding: 0 2rem;
  display: flex;
  align-items: center;

  & h2{
    color: ${props => props.theme.color.base};
    cursor: pointer;

    &:hover{
      color: ${props => props.theme.color.pink};
      transition: all 0.5s ease;
    }
  }
`