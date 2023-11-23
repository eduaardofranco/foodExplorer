import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 


export const Container = styled.div`
    .content {
        justify-content: center;
        flex-wrap: wrap;

        padding: 0 3.4rem;
        text-align: center;
    }
    h1 {
        font-size: 2.7rem;
        font-weight:500;
    }
    h3 {
        color: ${({ theme }) => theme.COLORS.TXT_BLUE_200};
        font-size: 2rem;
        margin-top: 2.4rem;

    }
    .add {
        width: 3rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
        .content {
            margin-left: auto;
            margin-right: auto;
            width: 40rem;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        .content {
            margin: 0 auto;
            width: 70rem;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        .content {
            padding: 0;
            width: 1024px;
        }
        h1 {
            font-size: 4rem;    
        }
        h3 {
            font-size: 3rem;
        }
        .center {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .add-edit {
            width: 13rem;
        }
    }
`;

export const Img = styled.figure`
    margin: 1.6rem 0;
    img {
        width: 26.4rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin-right: 5rem;
        img {
            width: 39rem;
        }
    }
`;

export const Description = styled.p`
    font-size: 1.6rem;
    line-height: 140%;
    margin: 2.4rem 0;
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        font-size: 2.4rem;
    }
`;


export const Ingredients = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        justify-content: start;
    }
`;


export const Finalize = styled.div`
    display: flex;
    margin-top: 4.8rem;
    align-items: center;
    justify-content: center;
    .add {
        height: 3.8rem;
        width: 200px;
        svg {
            font-size: 2.5rem;
            margin-right: 1rem;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.XS}) {
        .add {
            width: 100px;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin-left: 0;
        width: 70%;
        .add {
            width: 200px;
            height: 4.8rem;
        }
    }
`;


export const Infos = styled.div`
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        text-align: left;
    }
`;