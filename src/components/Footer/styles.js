import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 


export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_600};
    .content {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_700};
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        padding: 2.4rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    div {
        display: flex;
        align-items: center;
        gap: .6rem;
        font-size: 1.5rem;
        font-weight: 700;
    }

    p {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_100};
        font-size: 1.2rem;

    }
`;
