import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --azul-morado-oscuro: #2d2f8e;
    --azul-morado-claro: #585dba;
    --verde-pastel-oscuro: #44979c;
    --verde-pastel-claro: #89cab4;
    --azul-gris-oscuro: #202020;
    --oscuro: #56575e;
    --azul-oscuro: #14213D;
    --rojo: #ea4533;
    --rojo-oscuro: #c0392b;
    --naranja-pastel: #f4ae62;
    --rosado-pastel: #f6c7af;
    --crema:#f3f0d7;
    --blanco: #ffffff;
    --dorado: rgb(202, 172, 4);

    --navBarHeight: 50px;
    --marginBottom:10px;
    --borderRadius:5px;
  
    --backgroundColor: #e2e1e0;
    --backgroundSections:white;
  
    --fontColors:#2e2e2e;
    --navBarBackground:rgb(255, 255, 255);
  
    /* Buttons */
    --buttonHeight:35px;
    --buttonBorderRadio: 2px;
    --buttonFontColor:#ecf0f1;
    --buttonColor:#EA4533;
    --buttonColorHover:#c0392b;

  
     /* List */
    --fontListColor:#56575e;;
    --fontIndexTitleColor: #56575e;
  
    /* Price */
    --priceColor:#EA4533;
  
    /* Margin Between Containers */
    --separation:5px;
  
    --footerBackground: #2d2f8e;
    --footerFontColor: #eaebf1;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ========================================================= */
/*                     Button Style                          */
/* ========================================================= */


@media (prefers-color-scheme: dark) {
    :root {
      --navBarHeight: 50px;
      --navBarBackground:rgb(41, 41, 41);
      --searchBarColor: rgb(59, 57, 57);
      --fontColors:#eaebf1;
      --sectionBackground: #121212;
      --backgroundColor: #121212;
      --backgroundSections:#222222;
  
      --whiteButtonsFontColor: #eaebf1;
      --whiteButtonsBackground:rgb(59, 57, 57);
      --footerBackground: rgb(41, 41, 41);
    } 

    body{
      background-color: var(--backgroundColor);
    }
}


`
