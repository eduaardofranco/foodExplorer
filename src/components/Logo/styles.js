import styled from 'styled-components'

export const Container = styled.h2`
        font-size: 3.7rem;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        display: flex;
        gap: 1rem;
        align-items: center;
        svg {
            width: 4.3rem;
            height: 4rem;
        }
`;