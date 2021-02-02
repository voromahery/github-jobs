import styled from "styled-components";
import bgImage from "../../../images/backgroundImg.webp";
import workIcon from "../../../images/work.svg";

export const Container = styled.form`
  display: flex;
  padding-top: 41px;
  padding-bottom: 41px;
  padding-left: 18px;
  padding-right: 18px;
  background-image: url(${bgImage});
  background-position: 50%;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 1000px) {
    padding-left: calc(206px / 2);
    padding-right: calc(206px / 2);
    padding-top: calc(42px / 2);
    padding-bottom: calc(42px / 2);
  }

  @media (min-width: 1200px) {
    padding-left: 206px;
    padding-right: 206px;
    padding-top: 42px;
    padding-bottom: 42px;
  }
`;

export const Input = styled.input`
  background-image: url(${workIcon});
  background-position: 14px 50%;
  background-size: 15px;
  background-repeat: no-repeat;
  position: relative;
  padding-left: calc(17px + 15px + 10px);
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 4px;
  color: #334680;
  border: none;
  width: 100%;
`;

export const Button = styled.button`
  background: #1e86ff;
  border-radius: 4px;
  padding-left: 27px;
  padding-right: 27px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;

  &:hover {
    background-color: #449bff;
  }

  &,
  &:hover {
    transition: all ease-in 0.2s;
  }
  @media (min-width: 320px) {
    padding-left: 27px;
    padding-right: 27px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    padding-top: 14px;
    padding-bottom: 14px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  width: 100%;
  gap: 16px;

  @media (min-width: 320px) {
    background-color: #ffffff;
    flex-wrap: nowrap;
    align-items: center;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 5px;
    padding-left: 5px;
    gap: 0;
  }
`;
