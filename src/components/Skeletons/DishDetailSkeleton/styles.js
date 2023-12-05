import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../../styles/layoutBreakpoints' 

export const Container = styled.div`
    overflow: hidden;
    /* background-color: ${({ theme }) => theme.COLORS.BG_DARK_300}; */
    position: relative;
    .skeleton-DishDetail {
        display: flex;
        gap: 3rem;
        justify-content: center;
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
`;
export const Left = styled.div`

`;
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;