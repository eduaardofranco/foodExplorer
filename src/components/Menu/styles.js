import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_400};
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    
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
`;