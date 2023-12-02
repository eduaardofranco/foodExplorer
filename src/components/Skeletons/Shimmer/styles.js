import styled from 'styled-components'

export const Container = styled.div`
    background-color: transparent;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    animation: loading 2s infinite;
    .shimmer {
        background: rgba(0, 0, 0, .5);
        transform: skewX(-20deg);
        width: 50%;
        height: 100%;
    }
    @keyframes loading {
        0% { transform: translateX(-250%) }
        50% { transform: translateX(-60%) }
        100% { transform: translateX(100%) }
    }
`;