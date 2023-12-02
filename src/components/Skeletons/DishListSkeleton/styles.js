import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../../styles/layoutBreakpoints' 

export const Container = styled.div`
    overflow: hidden;
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_300};
    position: relative;
    margin-bottom: 1rem;
    .skeleton-dishList {
        padding: 1rem;
        display: flex;
        
    }
    .avatar {
        margin-right: 1rem;
    }
    .text {
        margin-top: .5rem;
    }
`;