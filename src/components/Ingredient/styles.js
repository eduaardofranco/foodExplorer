import styled from 'styled-components'

export const Container = styled.span`
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_1000};
    border-radius: .5rem;
    color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
    display: inline-block;
    font-size: 1.4rem;
    padding: .8rem;
    text-transform: lowercase;

`;