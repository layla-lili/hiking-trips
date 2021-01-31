import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body {
color: black;
background: white;
}
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: white;
  color: black;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
  hight: 25%;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const TripWrapper = styled.div`
  margin: 20px;
  img {
    height: 200px;
    width: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }

  p {
    text-align: center;

    &.easy-trip {
      color: green;
    }
    &.medium-trip {
      color: orange;
    }
    &.hard-trip {
      color: red;
    }
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;

export const DeleteButtonStyled = styled.p`
  color: black;
`;

export const StyledLink = styled(Link)`
  img {
    width: 50%;
    hight: 50%;
  }
`;

export const NavProduct = styled(NavLink)`
  padding: 0.25em 1em;
  color: black;
  &.active {
    color: red;
  }
`;
