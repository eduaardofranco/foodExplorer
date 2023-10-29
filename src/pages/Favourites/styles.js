import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/layoutBreakpoints' 


export const Container = styled.div`
    main {
        padding: 2rem;
    }
    h2 {
        font-size: 2rem;
        margin: 2rem 0;;
    } 
    .finalize {
        display: flex;
        justify-content: end;
        margin-bottom: 2rem;
        button {
            width: 15rem;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        main {
            width: 1000px;
            margin: 0 auto;
        }
        .container {
            display: flex;
            gap: 4.8rem;
            flex-wrap: wrap;
        }
    }
`;