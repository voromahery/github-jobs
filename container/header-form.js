import React, { useContext } from "react";
import { Context } from "../GlobalContext";
import { HeaderForm } from "../components";

export default function HeaderFormContainer() {
  const { state, dispatch, setLocations, locations } = useContext(Context);
  let copyOfData = state.allData;

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
    if (locations === locations.toLowerCase()) {
      if (e.target.value.length === 0) {
        setLocations(locations.toUpperCase());
      }
    }
    if (locations === locations.toUpperCase()) {
      if (e.target.value.length === 0) {
        setLocations(locations.toLowerCase());
      }
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
