import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 44px;
  }
`;

export const Div = styled.div`
  width: 100%;
`;

export const DetailsApplication = styled.div`
  @media (min-width: 1000px) {
    max-width: 29%;
  }
`;
