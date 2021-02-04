import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 791px;
  @media (min-width: 1100px) {
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

export const JobType = styled.button`
  font-weight: bold;
  font-size: 12px;
  border: 2px solid #334680;
  line-height: 14px;
  padding: 6px;
  max-width: max-content;
  border-radius: 4px;
  margin-bottom: 26px;
  color: #334680;
  background-color: transparent;
`;

export const Location = styled.span`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b9bdcf;
`;

export const Time = styled.time`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b7bcce;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 300px) {
    flex-wrap: nowrap;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Icon = styled.img`
  max-width: 15px;
  margin-right: 8.5px;
`;
