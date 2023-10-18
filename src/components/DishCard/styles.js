import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_300};
    display: block;
    cursor: pointer;
    padding: 2.4rem;
    position: relative;
    text-align: center;
    width: 21rem;
    h3 {
        margin: 1.2rem 0;
    }
    button {
        background-color: transparent;
        border: 0;
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
            svg {
                color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
            }       
        }
        span {
            font-size: 1.6rem;
            margin: 0 1.4rem
        }
    }
    img {
        height: 8.8rem;
        width: 8.8rem;
    }
    .favourite {
        position: absolute;
        right: 1rem;
        top: 1rem;
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