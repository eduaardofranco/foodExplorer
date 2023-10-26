import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 


export const Container = styled.div`
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        > svg {
            color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
            font-size: ${({ isbig }) => (isbig ? '3.3rem' : '2.5rem')};
        }
    }
    .increments {
        margin: 1.2rem 0 1.6rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            cursor: pointer;
            font-size: 2rem;   
        }
        span {
            font-size: ${({ isbig }) => (isbig ? '2.3rem' : '1.6rem')};
            margin: 0 1.4rem
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        .increments {
            margin: 0;
            span {
                font-size: 2rem;
            }
        }
    }
`;