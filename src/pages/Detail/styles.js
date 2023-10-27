import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 


export const Container = styled.div`
    .content {
        justify-content: center;
        flex-wrap: wrap;

        padding: 0 3.4rem;
        text-align: center;
    }
    figure {
        margin: 1.6rem 0;
        img {
            width: 26.4rem;
        }
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
    .description {
        font-size: 1.6rem;
        line-height: 140%;
        margin: 2.4rem 0;
    }
    .finalize {
        display: flex;
        margin-top: 4.8rem;
        align-items: center;
        .add {
            height: 3.8rem;
            svg {
                font-size: 2.5rem;
                margin-right: 1rem;
            }
        }
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
        .finalize {
            margin-left: auto;
            margin-right: auto;
            width: 50%;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        .content {
            width: 1024px;
        }
        figure {
            margin-right: 5rem;
            img {
                width: 39rem;
            }
        }
        h1 {
            font-size: 4rem;
        }
        h3 {
            font-size: 3rem;
        }
        .description {
            font-size: 2.4rem;
        }
        .center {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .infos {
            text-align: left;
        }
        .ingredients {
            justify-content: start;
        }
        .finalize {
            margin-left: 0;
            .add {
                height: 4.8rem;
            }
        }
        .add-edit {
            width: 13rem;
        }
    }
`;