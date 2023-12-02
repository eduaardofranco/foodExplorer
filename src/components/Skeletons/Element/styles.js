import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    /* overflow: hidden; */
    > div {
        background-color: ${({ theme }) => theme.COLORS.BG_DARK_700};
    }
    .text {
        margin-top: 1.5rem;
        width: 100%;
        height: .8rem;
    }
    .avatar {
        border-radius: 100%;
        height: 4.5rem;
        width: 4.5rem
    }
    .img {
        height: 10rem;
        width: 10rem;
    }
    .btn {
        border-radius: .3rem;
        height: 3rem;
        width: 10rem;
    }
`;