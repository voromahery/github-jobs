import React, { useContext } from "react";
import { Context } from "../GlobalContext";
import { HeaderForm } from "../components";

export default function HeaderFormContainer() {
  const { state, dispatch, setLocations, locations } = useContext(Context);
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

    form.reset();
  }

  function resetSearch(e) {
    if (e.target.value.length === 0) {
      setLocations("New York");
    }
    if (e.target.value.length === 0 && location === "New York") {
      setLocations("Berlin" || "Amsterdam" || "London");
    }
  }

  return (
    <HeaderForm onSubmit={searchByKeyword}>
      <HeaderForm.Div>
        <HeaderForm.Input
          name="search"
          onChange={resetSearch}
          placeholder="Title, companies, expertise or benefits"
        />
        <HeaderForm.Button>Search</HeaderForm.Button>
      </HeaderForm.Div>
    </HeaderForm>
  );
}
