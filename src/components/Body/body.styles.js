import styled from 'styled-components';

export const Body = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-color: var(--backgroundColor);
    overflow-x: hidden;
    overflow-y: hidden;

    section{
        width: 98%;
        margin-top: 0px;
        padding-top: 10px;
        margin-bottom: 5px;
        border: 4px solid var(--sombra-boton);
        box-shadow: 3px 5px 15px 5px rgba(0,0,0,0.24);
        border-radius: 4px;
        overflow: auto;

        .books{
            text-align: left;
        }

        .search{
            height: 220px;
            color: white;
            font-family: "DIN", sans-serif;
            background-color: var(--azul-oscuro)
        }

        h3{
            width: 97%;
            margin-left: 15px;
            text-align: left;
            font-size: 1.3em;
            font-family: "DIN", sans-serif;
            color: black
        }

        div.products{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }

    div#sideBarVer{
        display: block;
        position: relative;
        width: 100%;
        transition-property: width;
        transition-duration: 0.3s;  
        z-index: 300;

        aside{
            display: grid;
            position: relative;
            grid-template-columns: 100%;
            width: 100%;
            height: 100vh;
            padding: 15px 15px 30px 15px;
            margin-top: 10px;
            border: 4px solid var(--sombra-boton);
            box-shadow: 3px 5px 15px 5px rgba(0,0,0,0.24);
            background-color: #ffffff;
            z-index: 300;
            background: radial-gradient(var(--azul-morado-claro),var(--azul-morado-claro));
    
            div.index{
                width: 100%;
                
                h3{
                    margin-top: 15px;
                    margin-bottom: 35px;
                    margin-left: 5px;
                    font-size: 15px;
                    font-family: "DIN", sans-serif;
                    text-align: left;
                    color: #ffffff;
                }

                hr{
                    width: 100%;
                    margin-left: 0px;
                    border-top: 1px solid var(--azul-morado-oscuro);;
                }
    
                ul{
                    width: 94%;
                    list-style: none;
                    text-align: left;
                    margin-top: 15px;
                    margin-bottom: 15px;
                    color: white;
                }

                li{
                    margin-bottom:10px;
                    margin-right: 5px;
                    padding-bottom: 20px;
                    font-size: 15px; 
                }

                .a {
                    display: grid;
                    grid-template-columns: 100%;
                    text-decoration: none;
                    padding-left: 5px;
                    color: var(--fontColors);
                    transition-duration: .1s;
                
                    :hover {
                      color: #ea4533;
                      transform: scale(1.1);
                    }
                
                    i {
                      font-size: 18px;
                      justify-self: center;
                      text-decoration: none;
                      padding-top: 5px;
                      color: var(--azul-morado-oscuro);
                    }
                
                    span#li{
                      justify-self: center;
                      padding-top: 5px;
                      font-family: "DIN", sans-serif;
                    }
                }
            }
        }
    } 
    
    /************************************
    //    MEDIA QUERIES PC             //
    /***********************************/
    @media (min-width: 350px) {
        div.sectionChange{
            display: grid;
            grid-template-columns: 30% 70%;
            background-color: white;
        }

        div#sideBarVer{
            grid-column:1/2;
            display: inline;
            position: inherit;
            width: 99%;
            margin-bottom: 10px;
            aside{
                div.index{
                    h3{
                        text-align: center;
                    }
                }
            }
        }

        section.books{
            grid-column: 2/3;
            width: 100%;
            margin-left: 5px;
        }
        
    }

    @media (min-width: 768px) {
        .col-md-3{
            flex: 0 0 45%;
            max-width: 100%;
        }
        .row{
            margin-right: -60px;
        }
    }

    @media (min-width: 900px) {
        .col-md-3{
            flex: 0 0 30%;
            max-width: 100%;
        }
        main div.sectionChange{
            display: grid;
            grid-template-columns: 10% 90%;
        }
        div#sideBarVer{
            aside{
                div.index {
                    h3{
                        text-align: left;
                    }
                    .a {
                        display: grid;
                        grid-template-columns: 20% 80%;
                        i { 
                            grid-columns: 1/2;
                            justify-self: center;
                            }
                        span#li{
                            grid-columns:2/3;
                            justify-self: left;
                        }
                    }
                }
            }
        }
       
    }

    @media (min-width: 1024px) {
        div.sectionChange{
            display: grid;
            grid-template-columns: 20% 80%;
        }
    }

    @media (min-width: 1200px) {
        div.sectionChange{
            display: grid;
            grid-template-columns: 20% 80%;
        }
    }

    @media (min-width: 1800px) {
        div.sectionChange{
            display: grid;
            grid-template-columns: 15% 85%;
        }
    }
`