import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const H1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    flex-direction: column;
    svg {
        color: ${({ theme }) => theme.COLORS.BG_RED_400};
        display: block;
        font-size: 10rem;
    }
`;
export const Link = styled.a`
    color: ${({ theme }) => theme.COLORS.TXT_BLUE_200};
    cursor: pointer;
    font-size: 2rem;
    margin-top: 2rem;
    text-decoration: underline;
`;