import React, { useContext } from "react";
import BodyForm from "../components/body-form";
import { Context } from "../GlobalContext";

export default function BodyFormContainer() {
  const { state, setLocation, locationList, jobType, setJobType } = useContext(
    Context
  );

  function searchByLocation(e) {
    if (state.response) {
      setLocation(e.target.value);
    }

    if (e.target.value.length === 0) {
      setLocation("New York");
    }
  }

  function searchByType() {
    setJobType(!jobType);
  }

  function searchByLocationList(e) {
    const findJob = locationList.find((data) => data === e.target.value);
    setLocation(findJob);
  }

  return (
    <BodyForm>
      <BodyForm.Wrapper style={{ display: "flex", alignItems: "center" }}>
        <BodyForm.CheckBox
          type="checkBox"
          style={{ transform: "scale(1.3)" }}
          onChange={searchByType}
        />
        <BodyForm.Span>Full time</BodyForm.Span>
      </BodyForm.Wrapper>
      <BodyForm.Wrapper
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "35px",
          marginBottom: "27px",
        }}
      >
        <BodyForm.Label htmlFor="search">Location</BodyForm.Label>
        <BodyForm.Input
          type="text"
          id="search"
          onChange={searchByLocation}
          placeholder="City, state, zip code or country"
        />
      </BodyForm.Wrapper>
      <BodyForm.Wrapper>
        {locationList.map((location) => (
          <div
            key={location}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "18px",
              marginBottom: "18px",
            }}
          >
            <BodyForm.CheckBox
              type="radio"
              value={location}
              // checked={location === "New York"}
              onChange={searchByLocationList}
              style={{ transform: "scale(1.3)", marginTop: 0 }}
            />
            <BodyForm.Span>{location}</BodyForm.Span>
          </div>
        ))}
      </BodyForm.Wrapper>
    </BodyForm>
  );
}
