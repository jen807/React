import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    li, ul{
        list-style: none;
    }

    a{
        display: block;
        text-decoration: none;
        color: black;
    }

    img{
        width: 100%;
        display: block;
    }
`;
