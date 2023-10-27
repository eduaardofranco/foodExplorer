import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../styles/layoutBreakpoints' 


export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    * {
        box-sizing: border-box;
    }
    body {
        background-color: ${({ theme }) => theme.COLORS.BG_DARK_400};
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        font-size: 1.4rem;
    }
    button:hover, a:hover {
        filter: brightness(.9)
    }

    main {
        padding: 3.7rem 0 2.4rem 0;
        min-height: calc(100vh - 181px);
    }
    .ingredients {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.4rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        .content {
            margin: 0 auto;
            width: 1000px;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        .content {
            margin: 0 auto;
            width: 1120px;
        }
    }
`