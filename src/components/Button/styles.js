import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.BG_RED_100};
    border-radius: .5rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    padding: 1.2rem;
    text-transform: uppercase;
    width: 100%;
    &:disabled {
        background-color: ${({ theme }) => theme.COLORS.BG_RED_400};
        cursor: auto;
    }
`;