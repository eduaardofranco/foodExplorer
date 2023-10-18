import styled from 'styled-components'

export const Container = styled.div`
    .content {
        padding-left: 2.4rem;
    }    

h2 {
    color: ${({ theme }) => theme.COLORS.TXT_GRAY_300};
    font-size: 1.8rem;
    font-weight: 500;
}




.banner {
        margin: 1.6rem 1.6rem 2rem 0;
        img {
            width: 100%;
        }
    }

`