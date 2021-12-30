import styled from 'styled-components'

export const Search = styled.form`
  /* Search Bar */
  width: 40%;
  min-width: 210px;
  position: relative;
  display: block;
  height: 32px;

  input[type='text'] {
    text-transform: none;
    color: var(--fontColors);
    font-weight: normal;
    font-size: 17px;
    background: white;
    max-width: 100%;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    padding-left: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
  }

  input[type='text']::placeholder {
    color: gray;
    text-align: left;
  }

  button {
    margin: 0;
    padding: 0;
    width: 10%;
    font-size: 17px;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 0;
    position: absolute;
    top: 0px;
    right: 0px;
    min-width: 30px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border: none;
    background-color: var(--buttonColor);
    width: 50px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border: none;
    

     :hover{
      background-color: var(--buttonColorHover);
    }

    i {
      color: white;
      font-size: 19px;
     
    }
  }

`
