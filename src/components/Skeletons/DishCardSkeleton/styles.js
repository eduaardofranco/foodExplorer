import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../../styles/layoutBreakpoints' 

export const Container = styled.div`
    overflow: hidden;
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_300};
    position: relative;
    .skeleton-dishCard {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 3rem 0;
        height: 28.7rem;
        width: 100%;
        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            height: 44.4rem;
            margin-bottom: 0;
        }
        
    }
    .text {
        margin-top: .5rem;
    }
    .btn {
        margin-top: 2rem;
    }
`;