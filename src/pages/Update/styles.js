import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 


export const Container = styled.div`
    .content {
        padding: 1rem 3.2rem;
    }
    .addTag {
        margin-top: 1.6rem;

        .container {
            background: ${({ theme }) => theme.COLORS.BG_DARK_800};
            color: ${({ theme }) => theme.COLORS.TXT_GRAY_500};
            display: flex;
            flex-wrap: wrap;
            /* justify-content: space-between; */
            margin-top: 1.6rem;
            padding: .8rem;
            border-radius: .8rem;
            gap: 1.6rem;
        }
    }
    .buttons {
        display: flex;
        gap: 1.5rem;
        .delete {
            background: ${({ theme }) => theme.COLORS.BG_DARK_800};
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        .line {
            display: flex;
            gap: 3.2rem;
            justify-content: space-between;
            > div {
                width: 33%;
            }
            .addTag {
                width: 70%;
            }
        }
        form {
            button {
                float: right;
                width: 20%;
            }

        }
        .buttons {
            justify-content: end;
            button {
                width: 13.5rem;
            }
        }
    }
`;