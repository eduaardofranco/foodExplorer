import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 

export const Container = styled.header`
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_700};
    .main-content {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 11.4rem;

    }
    button {
        border: 0;
        position: relative;
        cursor: pointer;
        > svg {
            color: white;
            font-size: 3.2rem;
            path {
                stroke: white;
            }
        }
    }
    h2 {
        cursor: pointer;
    }
    .menuBtn {
        background-color: transparent;
        border: none;
        position: relative;
        &:first-child {
            svg {
                font-size: 2.8rem;
            }
        }
    }
    .ordersSmallBtn{
        button {
            background-color: transparent;
            border: 0;
        }
        span {
            background-color: ${({ theme }) => theme.COLORS.BG_RED_100};
            color: white;
            border-radius: 100%;
            display: block;
            line-height: 2.2rem;
            position: absolute;
            right: 0;
            top: -.8rem;
            height: 2.3rem;
            width: 2.3rem;
        }
    }
    .searchInput {
        width: 30rem;
        display: none;
    }
    .btnBig {
        display: none;
        padding: 1.2rem 3.7rem;
        width: auto;
    }
    .logout {
        cursor: pointer;
        font-size: 3.2rem;
    }
    a {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
        display: none;
        text-decoration: none;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        justify-content: center;
        gap: 3rem;
        .menuBtn {
            display: none;
        }
        .btnBig {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .searchInput {
            display: block;
        }
        .ordersSmallBtn {
            display: none;
        }
        a {
            display: block;
        }
        .main-content { 
            justify-content: space-between;
            margin: 0 auto;
            width: 100rem;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        gap: 5.5rem;
        .main-content {
            width: 1120px;
        }
    }
`;