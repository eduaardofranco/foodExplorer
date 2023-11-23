import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 

export const Container = styled.div`
    
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_900};
    border-radius: .5rem;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 0 0 1.5rem;
    
    input {
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_500};
        border: none;
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        padding: 1.4rem 1.4rem;
        width: 100%;
        &:focus {
            outline: 1px solid ${({ theme }) => theme.COLORS.TXT_GRAY_500};
        }
    }
    svg {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_400};

        font-size: 2.4rem;
    }

    button {
        background-color: transparent;
        border: 0;
        cursor: pointer;
        margin-right: 1rem;
        svg {
            color: ${({ theme }) => theme.COLORS.TXT_GRAY_100};
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        button {
            display: none;
        }
    }
`;