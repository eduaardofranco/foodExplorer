import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../../styles/layoutBreakpoints' 

export const Container = styled.div`
    overflow: hidden;
    position: relative;
    margin-top: 3rem;
    .skeleton-DishDetail {
        display: flex;
        gap: 3rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .img {
        height: 39rem;
        width: 39rem;
    }
    .text {
        margin-top: .5rem;
    }
    .btn {
        margin-top: 3rem;
        height: 4.8rem;
    }
    .title {
        height: 4rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        .skeleton-DishDetail {
            flex-direction: row;
        }
    }
`;
export const Left = styled.div``;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        align-items: start;
    }
`;