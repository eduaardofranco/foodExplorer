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
export const PaymentSection = styled.div`
    h2 {
        font-size: 3rem;
        padding: 2.4rem 0;
    }
`;
export const PaymentForm = styled.div`
    border: .1rem solid ${({ theme }) => theme.COLORS.TXT_GRAY_500};
    border-radius: .8rem;
    .header {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        display: flex;
        justify-content: space-around;
        align-items: center;
        p {
            border-radius: .8rem 0 0 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            
            border-bottom: .1rem solid ${({ theme }) => theme.COLORS.TXT_GRAY_500};
            font-size: 1.6rem;
            padding: 2rem 0;
            width: 100%;
            transition: all .2s ease-in-out;
            &+ p {
                border-left: .1rem solid ${({ theme }) => theme.COLORS.TXT_GRAY_500};
                border-radius: 0 .8rem 0 0;
            }
            &.active {
                background-color: ${({ theme }) => theme.COLORS.BG_DARK_800};
            }
        }
        svg {
            font-size: 2.5rem;
            margin-right: 1rem;
        }
    }//header
    .body {
        min-height: 24.5rem;
        padding: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .pix {
            text-align: center;
        }
        form {
            display: none;
            label {
                color: ${({ theme }) => theme.COLORS.TXT_GRAY_400};
                display: block;
                font-size: 1.6rem;
                margin-bottom: .8rem;
            }
            input {
                background-color: transparent;
                border: .1rem solid ${({ theme }) => theme.COLORS.TXT_GRAY_300};
                border-radius: .8rem;
                color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
                font-size: 1.6rem;
                padding: 1.2rem 1.4rem;
                width: 100%;
            }
        }
        .item {
            margin-bottom: 3.7rem;
        }
        .group {
            display: flex;
            gap: 2rem;
            .item {
                width: 50%;
            }
        }
        .status {
            color: ${({ theme }) => theme.COLORS.TXT_GRAY_500};
            font-size: 2rem;
            text-align: center;
            svg {
                font-size: 5rem;
                margin-bottom: 2rem;
            }
        }
    }
`;