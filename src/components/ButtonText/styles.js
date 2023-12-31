import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
    border: none;
    background-color: transparent;
    font-size: 1.6rem;
    margin-left: -1rem;
    text-decoration: none;
    

    display: flex;
    align-items: center;
    gap: .4rem;

    svg {
        font-size: 2.2rem;
    }

    ${({ $isbig }) =>
    $isbig &&
    css`
      font-size: 2.4rem;
      svg {
        font-size: 3.6rem;
      }
    `}
`;