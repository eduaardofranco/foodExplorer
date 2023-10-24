import styled from 'styled-components'

export const Container = styled.aside`
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_400};
    width: 100%;
    position: fixed;
    left: -100%;
    top: 0;
    z-index: 1;

    &[data-menu-is-open="true"] {
        left: 0;
    }
    
    .container {
        height: calc(100vh - 67px);
    }

    .header {
        background-color: ${({ theme }) => theme.COLORS.BG_DARK_700};
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
        display: flex;
        align-items: center;
        font-size: 2.1rem;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        padding: 0 2.8rem;
        height: 11.4rem;

        button {
            background-color: transparent;
            border: none;
            svg {
                color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
                font-size: 3rem;
            }
        }
    }

    .main {
        padding: 2.8rem;
    }
    ul {
        margin-top: 3.6rem;
    }
    li {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BG_DARK_1000};
        a {
            color: ${({ theme }) => theme.COLORS.TXT_GRAY_400};
            display: block;
            font-size: 2.2rem;
            font-weight: 300;
            padding: 1.2rem 0 1.2rem 1rem;
            text-decoration: none;
        }
    }
    
`;