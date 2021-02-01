import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 29px;
  margin-bottom: 23px;
  @media (min-width: 1100px) {
    max-width: 29%;
  }
`;

export const Wrapper = styled.div``;

export const Span = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #334680;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  margin-bottom: 14px;
  color: #b9bdcf;
`;

export const Input = styled.input`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  border: none;
  max-width: 351px;
  height: 45px;
  padding-left: 14px;

  @media (min-width: 1100px) {
    max-width: 100%;
  }
`;

export const CheckBox = styled.input`
  margin-right: 12px;
  cursor: pointer;
`;

export const Radio = styled.input`
  margin-right: 12px;
  cursor: pointer;
`;
