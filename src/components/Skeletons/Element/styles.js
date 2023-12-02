import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    /* overflow: hidden; */
    > div {
        background-color: ${({ theme }) => theme.COLORS.BG_DARK_700};
    }
    .text {
        width: 20rem;
        height: .6rem;
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
    .title {
        margin: 1rem 0;
        height: 1.4rem;
        width: 20rem;
    }
    .avatar {
        border-radius: 100%;
        height: 8rem;
        width: 8rem;
    }
`;