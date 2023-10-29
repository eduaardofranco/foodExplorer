import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 

export const Container = styled.div`
    > .content {
        padding: 1rem 3.2rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        .line {
            display: flex;
            gap: 3.2rem;
            justify-content: space-between;
            > div {
                width: 33%;
            }
        }
    }
`;

export const TagContainer = styled.div`
    margin-top: 1.6rem;
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 70%!important;
    }
`;

export const TagContent = styled.div`
    background: ${({ theme }) => theme.COLORS.BG_DARK_800};
    color: ${({ theme }) => theme.COLORS.TXT_GRAY_500};
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.6rem;
    padding: .8rem;
    border-radius: .8rem;
    gap: 1.6rem;
`;

export const Form = styled.form`
    .finalize {
        display: flex;
        gap: 3.2rem;
    }
    .delete {
        background: ${({ theme }) => theme.COLORS.BG_DARK_800};
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        .finalize {
            justify-content: end;
        }
        button {
            width: 15%;
        }
    }
`;