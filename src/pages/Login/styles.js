import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .newAccount {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
        display: inline-block;
        margin: 1rem auto;
        text-align: center;
        text-decoration: none;
    }
    h1 {
        font-size: 3.7rem;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 10rem;
        svg {
            width: 4.3rem;
            height: 4rem;
        }
    }
`;

export const Form = styled.form`
    width: 80%;

    button {
        margin: 3.2rem 0;
    }
`;