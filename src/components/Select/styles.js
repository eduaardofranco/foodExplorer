import styled from 'styled-components'

export const Container = styled.div`
    label {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_400};
        display: block;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-size: 1.6rem;
        margin: 1.6rem 0;
    }
    select {
        background: ${({ theme }) => theme.COLORS.BG_DARK_800};
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z' fill='%23C4C4CC'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 1.6rem top 50%;
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_500};
        border: 0;
        border-radius: .8rem;
        display: block;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-size: 1.6rem;

        padding: 1.2rem 1.4rem;
        height: 4.8rem;
        width: 100%;

        appearance: none;
        -webkit-appearance: none;

        &:focus {
            outline: .1rem solid ${({ theme }) => theme.COLORS.BG_DARK_500};;
        }
        &:before {
            content: '';
            display: block;
            background: ${({ theme }) => theme.COLORS.BG_DARK_800};
            padding: 1.2rem 1.4rem;
            height: 4.8rem;
            width: 100%;
        }
    }
`;