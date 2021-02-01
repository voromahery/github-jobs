import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    gap: calc(77px / 2);
  }

  @media (min-width: 1200px) {
    gap: 77px;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #334680;
  margin: 0;
`;

export const Image = styled.img`
  height: fit-content;
  max-width: 42px;
`;

export const Description = styled.article`
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #334680;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 12px;
  border: 2px solid #334680;
  line-height: 14px;
  padding: 6px;
  max-width: max-content;
  border-radius: 4px;
  color: #334680;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #1e86ff;
`;

export const OtherTitle = styled.h3`
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #b9bdcf;
`;

export const JobName = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #334680;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Location = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b9bdcf;
`;

export const Time = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b7bcce;
`;

