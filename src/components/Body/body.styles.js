import styled from "styled-components";

export const Body = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-color: var(--backgroundColor);

    section{
        width: 98%;
        margin-left: 2%;
        margin-top: 10px;
        padding-top: 10px;
        margin-bottom: 5px;
        border: 4px solid var(--sombra-boton);
        box-shadow: 3px 5px 15px 5px rgba(0,0,0,0.24);
        border-radius: 4px;

        .books{
            background-color: white;
            text-align: left;
        }

        h3{
            width: 97%;
            margin-left: 15px;
            text-align: left;
            font-size: 1.3em;
            font-family: "DIN", sans-serif;
            color: var(--fontColors);
        }

        div.products{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }

    div#sideBarVer{
        display: block;
        position: absolute;
        top: 7vh;
        width: 100%;
        left: 0;
        transition-property: width;
        transition-duration: 0.3s;  
        z-index: 300;

        aside{
            display: grid;
            position: relative;
            grid-template-columns: 100%;
            width: 96%;
            height: 89vh;
            padding: 15px 15px 30px 15px;
            margin-top: 10px;
            margin-left: 2%;
            border: 4px solid var(--sombra-boton);
            box-shadow: 3px 5px 15px 5px rgba(0,0,0,0.24);
            background-color: #ffffff;
            border-radius: 4px;
            z-index: 300;
            background: radial-gradient(var(--azul-morado-claro), var(--azul-morado-oscuro));
    
            div.index{
                width: 100%;
    
                h3{
                    margin-top: 15px;
                    margin-left: 15px;
                    font-size: 1.3em;
                    font-family: "DIN", sans-serif;
                    text-align: left;
                    color: #ffffff;
                }

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
                      font-family: "DIN", sans-serif;
                    }
                }
            }
        }
    } 
    
    /************************************
    //    MEDIA QUERIES PC             //
    /***********************************/
    @media (min-width: 500px) {
        div.sectionChange{
            display: grid;
            grid-template-columns: 30% 70%;
        }

        div#sideBarVer{
            grid-column:1/2;
            display: inline;
            position: inherit;
            width: 95%;
            margin-bottom: 10px;
            margin-left: 5%;
        }

        section.books{
            grid-column: 2/3;
            width: 96.5%;
            margin-left: 5px;
            margin-right: 5%;
        }
    }

    @media (min-width: 1024px) {
        main div.sectionChange{
            display: grid;
            grid-template-columns: 25% 75%;
        }
    }

    @media (min-width: 1280px) {
        div.sectionChange{
            display: grid;
            grid-template-columns: 20% 80%;
        }

        div#sideBarVer{
            margin-left: 8%;
        }
    }
`