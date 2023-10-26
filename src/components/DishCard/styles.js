import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 
  

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_300};
    border-radius: .8rem;
    border: .1rem solid ${({ theme }) => theme.COLORS.BG_DARK_300};
    cursor: pointer;
    padding: 2.4rem;
    position: relative;
    margin-right: 1.6rem;
    width: 21rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    &:hover {
        img {
            transform: scale(1.1);
        }
    }

    h3 {
        margin: 1.2rem 0;
    }
    svg {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
    }
    figure {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8.8rem;
        height: 8.8rem;

        img {
            width: 8.8rem;
            transition: transform .3s;
        }
    }
    button {
        border: 0;
        cursor: pointer;
    }
    .price {
        color: ${({ theme }) => theme.COLORS.TXT_BLUE_200};
        font-family: ${({ theme}) => theme.FONTS.ROBOTO};
        font-size: 1.6rem;
    }
    
    .favourite {
        background-color: transparent;
        cursor: pointer;
        position: absolute;
        right: 1rem;
        top: 1rem;
        &:hover {
            path {
                color: ${({ theme }) => theme.COLORS.BG_RED_400};
            }
        }
        svg {
            font-size: 2.4rem;
            path {
                stroke: white;
            }
        }
    }
    .add {
        background-color: ${({ theme }) => theme.COLORS.BG_RED_100};
        border-radius: .5rem;
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
        display: block;
        padding: 1.2rem;
        width: 100%;

    }
    .description {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_400};
        display: none;
        font-family: ${({ theme}) => theme.FONTS.ROBOTO};
        font-size: 1.4rem;
        margin: 1.5rem 0;
        text-align: center;

        overflow: hidden;
        height: 2.8rem;

    }
    .finalize {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        flex-direction: column;
        width: 30rem;
        h3 {
            font-size: 2.4rem;
            margin: 1.5rem 0;
        }
        .price {
            font-size: 3.2rem;
        }
        figure {
            height: 17.6rem;
            width: 17.6rem;

            img {
                width: 17.6rem;
            }
        }
        .description {
            display: block;
        }
        .finalize {
            margin-top: 2rem;
            flex-direction: row;
            gap: 1.6rem;
            button {
                height: 4.8rem;
            }
        }
    }
`;