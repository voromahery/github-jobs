import React from "react";
import {
  Container,
  Label,
  CheckBox,
  Radio,
  Input,
  Span,
} from "./styles/body-form";

export default function BodyForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

BodyForm.Label = function BodyFormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

BodyForm.CheckBox = function BodyFormCheckBox({ ...restProps }) {
  return <CheckBox {...restProps} />;
};

BodyForm.Radio = function BodyFormRadio({ ...restProps }) {
  return <Radio {...restProps} />;
};

BodyForm.Input = function BodyFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

BodyForm.Span = function BodyFormSpan({ ...restProps }) {
  return <Span {...restProps} />;
};
