import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 


export const Container = styled.div`
    .content {
        padding-left: 2.4rem;
        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            padding-left: 0;
            .banner {
                margin: 1.6rem 0 2rem 0;
            }
        }
    }    

.subtitle {
    color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
    font-size: 1.8rem;
    font-weight: 500;
    margin: 2.4rem 0;
}




.banner {
        margin: 1.6rem 1.6rem 2rem 0;
        img {
            width: 100%;
        }
    }

`