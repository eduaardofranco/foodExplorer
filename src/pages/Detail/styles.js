import styled from 'styled-components'

export const Container = styled.div`
    .content {
        justify-content: center;
        flex-wrap: wrap;

        padding: 0 3.4rem;
        text-align: center;
    }
    figure {
        margin: 1.6rem 0;
        img {
            width: 26.4rem;
        }
    }
    h1 {
        font-size: 2.7rem;
        font-weight:500;
    }
    h3 {
        color: ${({ theme }) => theme.COLORS.TXT_BLUE_200};
        font-size: 2rem;
        margin-top: 2.4rem;

    }
    .description {
        font-size: 1.6rem;
        line-height: 140%;
        margin: 2.4rem 0;
    }
    .finalize {
        display: flex;
        margin-top: 4.8rem;
        align-items: center;
        .add {
            height: 3.8rem;
            svg {
                font-size: 2.5rem;
                margin-right: 1rem;
            }
        }
    }
`;