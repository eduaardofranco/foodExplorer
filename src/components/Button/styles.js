import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.BG_RED_100};
    border-radius: .5rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    padding: 1.2rem;
    text-transform: uppercase;
    width: 100%;
    &:disabled {
        background-color: ${({ theme }) => theme.COLORS.BG_RED_400};
        cursor: auto;
    }
    &.add {
        position: relative;
        overflow: hidden;
        &.added-cart {
            svg {
                animation: cart 1s ease-in-out forwards;
            }
            .added {
                animation: addedText 1s ease-in-out forwards;
            }
            span {
                animation: addText 1s ease-in-out forwards;
            }
        }
        svg {
            font-size: 2.5rem;
            position: absolute;
            left: -35%;
        }

    }
    .added {
        font-weight: 800;
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
    }

    @keyframes cart {
        0% {
            left: -10%;
        }
        100% {
            left: 110%;
        }
    }
    @keyframes addedText {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes addText {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;