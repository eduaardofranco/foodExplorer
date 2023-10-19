import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_300};
    border-radius: .8rem;
    border: .1rem solid ${({ theme }) => theme.COLORS.BG_DARK_300};
    display: block;
    cursor: pointer;
    padding: 2.4rem;
    position: relative;
    width: 21rem;
    margin-right: 1.6rem;

    &:hover {
        img {
            transform: scale(1.1);
        }
    }

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    h3 {
        margin: 1.2rem 0;
    }
    svg {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
    }
    figure {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8.8rem;
        height: 8.8rem;

        img {
            width: 8.8rem;
            transition: transform .3s;
        }
    }
    button {
        background-color: transparent;
        border: 0;
        cursor: pointer;
    }
    .price {
        color: ${({ theme }) => theme.COLORS.TXT_BLUE_200};
        font-family: ${({ theme}) => theme.FONTS.ROBOTO};
        font-size: 1.6rem;
    }
    .increments {
        margin: 1.2rem 0 1.6rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            cursor: pointer;
            font-size: 2rem;    
        }
        span {
            font-size: 1.6rem;
            margin: 0 1.4rem
        }
    }
    .favourite {
        cursor: pointer;
        position: absolute;
        right: 1rem;
        top: 1rem;
        &:hover {
            path {
                color: ${({ theme }) => theme.COLORS.BG_RED_400};
            }
        }
        svg {
            font-size: 2.4rem;
        }
    }
    .add {
        background-color: ${({ theme }) => theme.COLORS.BG_RED_100};
        border-radius: .5rem;
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
        display: block;
        padding: 1.2rem;
        width: 100%;

    }
`;