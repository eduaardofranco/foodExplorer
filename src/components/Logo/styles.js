import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints'

export const Container = styled.div`
        display: flex;
        align-items: center;
        h2 {
            display: flex;
            align-items: center;
            font-size: 2.1rem;
            gap: 1rem;
            font-family: ${({ theme }) => theme.FONTS.ROBOTO};

        }
        svg {
            width: 2.4rem;
            height: 2.4rem;
        }
        > span {
            color: ${({ theme }) => theme.COLORS.TXT_BLUE_200};
            font-size: 1.2rem;
            font-weight: 400;
            margin-left: 1rem;
        }
        @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
            h2 {
                font-size: 2.4rem;
            }
            svg {
                width: 3rem;
                height: 3rem;
            }
        }
        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
            display: block;
            text-align: right;
        }
`;