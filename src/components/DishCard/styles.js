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
    button {
        border: 0;
        cursor: pointer;
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        flex-direction: column;
        width: 30rem;
        h3 {
            font-size: 2.4rem;
            margin: 1.5rem 0;
        }
    }
`;

export const Price = styled.span`
    color: ${({ theme }) => theme.COLORS.TXT_BLUE_200};
    font-family: ${({ theme}) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        font-size: 3.2rem;
    }
`;

export const Description = styled.p`
     color: ${({ theme }) => theme.COLORS.TXT_GRAY_400};
    display: none;
    font-family: ${({ theme}) => theme.FONTS.ROBOTO};
    font-size: 1.4rem;
    margin: 1.5rem 0;
    text-align: center;

    overflow: hidden;
    height: 2.8rem;
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: block;
    }
`;

export const Finalize = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin-top: 2rem;
        flex-direction: row;
        gap: 1.6rem;
        button {
            height: 4.8rem;
        }
    }
`;

export const Favourite = styled.button`
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
`;

export const Img = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8.8rem;
    height: 8.8rem;

    img {
        width: 8.8rem;
        transition: transform .3s;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        height: 17.6rem;
        width: 17.6rem;

        img {
            width: 17.6rem;
        }
    }
`;