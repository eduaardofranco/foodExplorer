import styled from 'styled-components'


export const Container = styled.div.attrs(({ $progress }) => ({
    style: {
      width: $progress ? `${$progress}%` : '0%',
    },
  }))`
    height: 1rem;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    span {
        background-color: ${({ theme }) => theme.COLORS.TXT_BLUE_200};
        display: block;
        height: .8rem;
    }
`;