import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding:  1rem 10rem 1rem 10rem;

`;

export const Logo = styled.img`
    width: 5.25rem;
    height: 2.5rem;
`;
export const LeftButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;

export const NavCityButton = styled.button`
    display:flex;
    width: 6rem;
    height: 2.37rem;
    color: ${(props) => props.theme['purple-dark']};
    background: ${(props) => props.theme['purple-light']};
    border-radius: 0.5rem;
    border: 0px;
    font-size: 0.7rem;
    align-items: center;
    justify-content: center;
    :focus{
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
    }
    &:hover {
      transition: 0.3s;
      color: ${(props) => props.theme['purple-light']};
      background: ${(props) => props.theme['purple-dark']};
      cursor: pointer;   
    }
`;


export const NavCartButton = styled.button`
    display:flex;
    width: 2.37rem;
    height: 2.37rem;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 0.5rem;
    border: 0px;
    font-size: 0.7rem;
    align-items: center;
    justify-content: center;
    :focus{
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }
    &:hover {
      transition: 0.3s;
      color: ${(props) => props.theme['yellow-light']};
    background: ${(props) => props.theme['yellow-dark']};
      cursor: pointer;   
    }
    
`;