import styled from "styled-components";
import leftArrow from "../../../images/arrow.svg";

export const Container = styled.div`
  @media (min-width: 600px) {
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
  max-height: 42px;
`;

export const Description = styled.article`
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
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
  color: #334680;
  margin-top: 10px;
  background-color: transparent;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: row;
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #1e86ff;
  padding-left: calc(18.5px + 15px);
  &::before {
    content: "";
    background-image: url(${leftArrow});
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    position: absolute;
    top: calc(14px / 2);
    left: -25px;
    width: 30px;
    height: 19px;
    transform: rotate(-180deg);
    margin-left: 18px;
  }
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

export const Application = styled.div`
  @media (min-width: 1100px) {
    max-width: 29%;
  }
`;

export const Icon = styled.img`
  max-width: 15px;
  margin-right: 8.5px;
`;
