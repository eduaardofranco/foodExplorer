import styled from 'styled-components'

export const Container = styled.button`
    color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
    border: none;
    background-color: transparent;
    font-size: ${({ isBig }) => isBig ? '2.4rem' : '1.6rem' };
    margin-left: -1rem;

    display: flex;
    align-items: center;
    gap: .4rem;

    svg {
        font-size: ${({ isBig }) => isBig ? '3.6rem' : '2.2rem' };
    }
`;