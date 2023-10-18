import styled from 'styled-components'

export const Container = styled.header`
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_700};
    height: 11.4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    > h1 {
        color: white;
        font-size: 2.1rem;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: .8rem;
        > span {
            color: ${({ theme }) => theme.COLORS.TXT_BLUE_200};
            font-size: 1.2rem;
            font-weight: 400;
        }
    }

    > button {
        background-color: transparent;
        border: none;
        position: relative;
        &:first-child {
            svg {
                font-size: 2.8rem;
            }
        }
        > svg {
            color: white;
            font-size: 3.2rem;
            path {
                stroke: white;
            }
        }
        span {
            background-color: ${({ theme }) => theme.COLORS.BG_RED_100};
            color: white;
            border-radius: 100%;
            display: block;
            line-height: 2.2rem;
            position: absolute;
            right: 0;
            top: -.8rem;
            height: 2.3rem;
            width: 2.3rem;
        }
    }
`;