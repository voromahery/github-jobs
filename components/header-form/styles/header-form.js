import styled from "styled-components";
import bgImage from "../../../images/backgroundImg.webp";

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
`;

export const Input = styled.input`
  padding-top: 14px;
  padding-bottom: 14px;
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
`;

export const Div = styled.div`
  height: 55px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 8px;
  width: 100%;
`;
