import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgba( 0, 0, 0, .9);
    position: fixed;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    opacity: 0;
    visibility: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
    transition: all .4s ease-in-out;
    &.open {
        opacity: 1;
        visibility: visible;
    }
    &.close {
        opacity: 0;
        visibility: hidden;
    }
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: ${({ theme }) => theme.COLORS.BG_DARK_1000};
        border-radius: 1rem;
        height: 15rem;
        width: 30rem;
    }
    h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
        font-weight: 700;
    }
    p {
        font-size: 1.7rem;
    }
    button {
        background-color: ${({ theme }) => theme.COLORS.TXT_BLUE_200};
        border: none;
        border-radius: .5rem;
        margin-top: 2rem;
        padding: .5rem 2rem;
    }
`;