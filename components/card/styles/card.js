import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 791px;
  @media (min-width: 1000px) {
    max-width: 100%;
  }
`;

export const Item = styled.div`
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: start;
  flex-wrap: wrap;
  margin-top: 23px;
  margin-bottom: 23px;
  background-color: #ffffff;
  border-radius: 4px;
  gap: 16px;
  padding: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  }
  &,
  &:hover {
    transition: all ease-in 0.2s;
  }
  @media (min-width: 300px) {
    flex-wrap: nowrap;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #334680;
`;

export const JobName = styled.h4`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-top: 8px;
  margin-bottom: 14px;
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
  margin-bottom: 26px;
  color: #334680;
`;

export const Location = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b9bdcf;
`;

export const Time = styled.time`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b7bcce;
`;

export const Wrapper = styled.div`
  display: flex;
`;
