import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: ${(props) => props.size}px;
  display: ${(props) => (props.inline ? 'flex' : 'block')};
  text-decoration: none;
  
  .logo {
    width: 24em;
    height: 30em;
    position: relative;
  }

  .bloqueAzul {
    position: absolute;
    background: #585dba;
    width: 30%;
    height: 80%;
    bottom: 0;
    border-radius: 1ex;
    opacity: 90%;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    animation-delay: 0s;
  }

  .bloqueVerde {
    background: #44979c;
    width: 20%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 24%;
    opacity: 90%;
    border-radius: 1ex;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    animation-delay: 0.5s;
  }

  .bloqueNaranja {
    background: #f4ae62;
    width: 28%;
    height: 70%;
    position: absolute;
    bottom: 0;
    left: 47%;
    border-radius: 1ex;
    transform: rotate(-15deg);
    opacity: 80%;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    animation-delay: 1s;
  }

  .bloqueRojo {
    background: #ea4533;
    width: 25%;
    height: 85%;
    position: absolute;
    bottom: 0;
    left: 75%;
    border-radius: 1ex;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    animation-delay: 1.5s;
  }

  .rojo {
    color: #ea4533;
  }

  .azul {
    color: #2d2f8e;
  }

  .verde {
    color: #44979c;
  }

  .logoText {
    font-size: 7em;
    margin: 0;
    font-family: 'DIN', sans-serif;
    line-height: 0.9em;
    padding-top: 0.125em;
    letter-spacing: 0.0625em;
    animation-delay: 2s;
  }

  .logoTextSmall {
    display: flex;
    align-items: center;
    letter-spacing: 0;
    margin-left: 0.1em;
    font-size: 20em;
  }

  .logo .bloqueAzul:hover {
    background: #9196ff;
    transform: scale(1.05);
  }

  .logo .bloqueVerde:hover {
    background: #5ed0d6;
    transform: scale(1.05);
  }

  .logo .bloqueNaranja:hover {
    background: #ffc485;
    transform: rotate(-15deg) scale(1.05);
  }

  .logo .bloqueRojo:hover {
    background: #ff7363;
    transform: scale(1.05);
  }
`
