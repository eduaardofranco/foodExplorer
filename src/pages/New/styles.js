import styled from 'styled-components'

export const Container = styled.div`
    .content {
        padding: 1rem 3.2rem;
    }
    .addTag {
        margin-top: 1.6rem;

        .container {
            background: ${({ theme }) => theme.COLORS.BG_DARK_800};
            color: ${({ theme }) => theme.COLORS.TXT_GRAY_500};
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 1.6rem;
            padding: .8rem;
            border-radius: .8rem;
            gap: 1.6rem;
        }
    }
`;