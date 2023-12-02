import styled from 'styled-components'

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
        width: 100%;
        
    }
    .text {
        margin-bottom: 1rem;
        width: 20rem!important;
    }
`;