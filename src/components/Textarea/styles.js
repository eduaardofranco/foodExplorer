import styled from 'styled-components'

export const Container = styled.div`
    label {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_400};
        display: block;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-size: 1.6rem;
        margin: 1.6rem 0;
    }
    textarea {
        background: ${({ theme }) => theme.COLORS.BG_DARK_800};
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_500};
        border: 0;
        border-radius: .8rem;
        display: block;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-size: 1.6rem;
        margin-bottom: 1.6rem;

        padding: 1.2rem 1.4rem;
        height: 15rem;
        width: 100%;

        resize: none;

        &:focus {
            outline: .1rem solid ${({ theme }) => theme.COLORS.BG_DARK_500};;
        }
    }
`;