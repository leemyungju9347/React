import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset}

    a {
        text-decoration : none;
        color:inherit
    }

    * {
        box-sizing:border-box
    }

    body {
        font-size:12px;
        background-color:rgba(20,20,20,1);
        padding-top:50px;
        color:#fff
    }
    
`

export default globalStyles