import styled from 'styled-components'

export const Wrapper = styled.div`
width: 100%;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
background-color: var(--backgroundSections);
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  max-width: 1280px;
  margin: 0 auto;

`

export const MenuButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: var(--fontColors);
 

  a {
    text-decoration: none;
    padding-left: 5px;
    color: var(--fontColors);
    transition-duration: .1s;

    :hover {
      color: #ea4533;
      transform: scale(1.1);
    }

    i {
      font-size: 25px;
      text-decoration: none;
      padding-top: 5px;
    }

    span{
      padding-top: 5px;
      padding-left: 5px;
    }
  }


  .menu-label {
    display: none;
    font-weight: 400;
  }

  @media (min-width: 600px) {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--fontColors);
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 18px;
      z-index: 1;
    }
  }

  @media (min-width: 1024px) {
    margin-right: 20px;
    a {
      padding-left: 20px;
      display: flex;
      align-items: center;
    }

    .menu-label {
      display: inline;
      font-size: 1em;
    }
  }
`
