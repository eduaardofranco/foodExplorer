import styled from 'styled-components'

export const Container = styled.button`
    color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
    border: none;
    background-color: transparent;
    font-size: 2.4rem;
    /* margin-top: 3.7rem; */

    display: flex;
    align-items: center;
    gap: .4rem;

    svg {
        font-size: 3.6rem;
    }
`;