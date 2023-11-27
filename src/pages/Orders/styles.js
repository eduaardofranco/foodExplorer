import styled from 'styled-components'

export const Container = styled.div`
    main {
        padding: 2rem;
    }
    `;
export const Table = styled.table`
    font-family: ${({ theme }) => theme.FONTS.ROOTO};
    width: 100%;
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
    svg {
        font-size: 2rem;
        margin-right: .8rem;
        &.pending {
            color: #AB222E;
        }
        &.prepared {
            color: #FBA94C;
        }
        &.delivered {
            color: #04D361;
        }

    }
`;