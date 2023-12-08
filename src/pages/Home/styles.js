import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 


export const Container = styled.div`
    .swiper-slide {
        width: auto;
    }
    .content {
        padding-left: 2.4rem;
        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            padding-left: 0;
            .banner {
                margin: 1.6rem 0 2rem 0;
            }
        }
    }

.subtitle {
    color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
    font-size: 1.8rem;
    font-weight: 500;
    margin: 2.4rem 0;
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        font-size: 3rem;
    }
}      

`;

export const Banner = styled.div`
    margin: 1.6rem 1.6rem 2rem 0;
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_700};
    border-radius: .8rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    height: 12rem;
    img {
        position: relative;
        margin-top: 1rem;
        margin-left: -2rem;
        width: 17rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin-top: 5rem;
        height: 26rem;
        img {
            width: 44.7rem;
            margin-top: -3rem;
            margin-left: -6rem;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        /* height: 26rem; */
        margin-top: 15rem;
        img {
            margin-top: -15rem;
            margin-left: -4rem;
            width: 63.2rem;
        }
    }
`;

export const Text = styled.div`
    text-align: center;
    h1 {
        font-size: 1.8rem;
        font-weight: 500;
    }
    p {
        font-size: 1.2rem;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        margin-top: .5rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 1.6rem;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        h1 {
            font-size: 4rem;
        }
    }
`;