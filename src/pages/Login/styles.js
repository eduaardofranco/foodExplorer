import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    h1 {
        display: none;
        margin-bottom: 3.2rem;
        text-align: center;
        padding-top: 0;
    }
    
    .logo {
        margin-bottom: 7.3rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        flex-direction: row;
        gap: 10rem;
        .logo {
            margin-bottom: 0;
        }
        h1 {
            display: block;
        }
    }
`;

export const Form = styled.form`
    width: 80%;
    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 35rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        background-color: ${({ theme }) => theme.COLORS.BG_DARK_700};
        box-sizing: content-box;
        padding: 6.4rem;
        border-radius: 1.6rem;
        input {
            border: 1px solid ${({ theme }) => theme.COLORS.TXT_GRAY_100}!important;
        }

    }
    .loginOrNew {
        display: block;
        margin: 1rem auto;
        text-align: center;
        a {
            color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
            text-decoration: none;
        }
    }
    button {
        margin: 3.2rem 0;
    }
`;