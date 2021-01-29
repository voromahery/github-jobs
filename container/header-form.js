import React from "react";
import { HeaderForm } from "../components";

export default function HeaderFormContainer() {
  return (
    <HeaderForm>
      <HeaderForm.Input placeholder="Title, companies, expertise or benefits" />
      <HeaderForm.Button>Search</HeaderForm.Button>
    </HeaderForm>
  );
}
