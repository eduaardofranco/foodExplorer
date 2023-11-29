import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 


export const Container = styled.div`
    margin-bottom: 2rem;
    max-width: 40rem;
    > div {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1.3rem;

    }
    figure {
        border-radius: 100%;
        overflow: hidden;
        height: 80px;
        width: 80px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        display: block;
        width: 8rem;
        transform: scale(1.2);
    }
    .inf {
        width: 63%;
    }
    h3 {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_00};
        font-size: 2rem;
        span {
            color: ${({ theme }) => theme.COLORS.TXT_GRAY_400};
            font-weight: normal;
            font-size: 1.2rem;
            font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        }
        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {

        }
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
