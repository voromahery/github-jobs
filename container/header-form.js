import React, { useContext } from "react";
import { Context } from "../GlobalContext";
import { HeaderForm } from "../components";

export default function HeaderFormContainer() {
  const { state, dispatch, setLocation, location } = useContext(Context);
  let copyOfData = [...state.response];

  function searchByKeyword(e) {
    e.preventDefault();
    const form = e.currentTarget;
    
    const filterByKeyword = copyOfData.filter(
      (data) =>
        data.company.toLowerCase().includes(form.search.value) ||
        data.title.toLowerCase().includes(form.search.value)
    );

    dispatch({ type: "SEARCH_BY_KEYWORD", filterData: filterByKeyword });
  }

  function resetSearch(e) {
    if (e.target.value.length === 0) {
      setLocation("New York");
    }
    if (e.target.value.length === 0 && location === "New York") {
      setLocation("Berlin" || "Amsterdam" || "London");
    }
  }

  return (
    <HeaderForm onSubmit={searchByKeyword}>
      <HeaderForm.Input
        name="search"
        onChange={resetSearch}
        placeholder="Title, companies, expertise or benefits"
      />
      <HeaderForm.Button>Search</HeaderForm.Button>
    </HeaderForm>
  );
}
