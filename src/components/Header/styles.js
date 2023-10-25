import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints'

export const Container = styled.header`
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_700};
    height: 11.4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    button {
        border: 0;
        position: relative;
        > svg {
            color: white;
            font-size: 3.2rem;
            path {
                stroke: white;
            }
        }
    }
    > .menuBtn {
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
        width: 50%;
        display: none;
    }
    .btnBig {
        display: none;
        width: 21.5rem;
    }
    .logout {
        display: none;
        font-size: 3.2rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        > .menuBtn {
            display: none;
        }
        .btnBig {
            display: block;
        }
        .searchInput {
            display: block;
        }
        .ordersSmallBtn {
            display: none;
        }
        .logout {
            display: block;
        }
    }
`;