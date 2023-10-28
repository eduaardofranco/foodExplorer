import styled, { css } from 'styled-components'

export const Container = styled.div`

        background-color: ${({ theme }) => theme.COLORS.TXT_GRAY_500};
        border-radius: .8rem;
        display: flex;
        padding: .5rem 1.6rem;

        > input {
            background-color: transparent;
            border: none;
            color: white;
            font-size: 1.6rem;
            font-family: ${({ theme }) => theme.FONTS.ROBOTO};
            width: auto;
            &:focus {
                outline: none;
            }
        }
        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
        svg {
            color: white;
        }

        ${({ $isnew }) =>
        $isnew &&
        css`
            background-color: transparent;
            border: 1px dashed ${({ theme} ) => theme.COLORS.TXT_GRAY_500};
            input {
                color: ${({ theme} ) => theme.COLORS.TXT_GRAY_500};
            }
            svg {
                color: ${({ theme} ) => theme.COLORS.TXT_GRAY_500};
            }
        `}
`;