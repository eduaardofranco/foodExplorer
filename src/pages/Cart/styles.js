import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 

export const Container = styled.div`
    main {
        padding: 2rem;
    }
    h2 {
        font-size: 2rem;
        margin: 2rem 0;
    }
    .finalize {
        display: flex;
        justify-content: end;
        margin-bottom: 2rem;
        button {
            width: 15rem;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        .container {
            display: flex;
            gap: 4.8rem;
            flex-wrap: wrap;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        main {
            margin: 0 auto;
            width: 1000px;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        main {
            margin: 0 auto;
            width: 1120px;
        }

    }
`;

export const ItemOrder = styled.div`
    display: flex;
    align-items: center;
    gap: 1.3rem;
    margin-bottom: 2rem;
    img {
        border-radius: 100%;
        display: block;
        width: 8rem;
    }
    h3 {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
        font-size: 2rem;
        font-weight: 500;
    }
    button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.BG_RED_400};
        cursor: pointer;
        padding: 0;
        margin-top: .5rem;
    }
`;