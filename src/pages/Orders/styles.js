import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 

export const Container = styled.div`
    main {
        padding: 2rem;
        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            margin: 0 auto;
            width: 1000px;
         }
        @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
            width: 1120px;

        }
    }
`;
export const Table = styled.table`
    font-family: ${({ theme }) => theme.FONTS.ROOTO};
    width: 100%;
    display: none;
    td {
        border: .1rem solid ${({ theme }) => theme.COLORS.TXT_GRAY_700};
        padding: 1.6rem 2.4rem;
        text-transform: capitalize;
        span {
            display: flex;
            align-items: center;
        }
    }
    thead {
        font-weight: 700;
    }
    tbody {
        color: ${({ theme }) => theme.COLORS.TXT_GRAY_400};
        td:last-child {
            text-transform: lowercase;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: table;
    }
`;

export const StatusIcon = styled.span`
    margin-right: .8rem;
    display: flex;
    align-items: center;
    &.pending {
        svg {
            color: #AB222E;
        }
    }
    &.prepared {
        svg {
            color: #FBA94C;
        }
    }
    &.delivered {
        svg {
            color: #04D361;
        }
    }
    svg {
        font-size: 2rem;
    }
`;

// this component is the item order on mobile devices
export const ItemOrder = styled.div`
    border: .2rem solid ${({ theme }) => theme.COLORS.BG_DARK_1000};
    border-radius: .8rem;
    color: ${({ theme }) => theme.COLORS.TXT_GRAY_400};
    padding: 1.2rem 2rem;
    display: block;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 2rem;
    }
    &+ div {
        margin-top: 1.7rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`;