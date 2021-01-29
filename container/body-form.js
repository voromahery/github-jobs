import React, { useContext } from "react";
import BodyForm from "../components/body-form";
import { Context } from "../GlobalContext";

export default function BodyFormContainer() {
  const { locationList, setLocationList } = useContext(Context);
  return (
    <>
      <BodyForm>
        <BodyForm.CheckBox type="checkBox" />
        <BodyForm.Span>Full time</BodyForm.Span>
      </BodyForm>
      <BodyForm>
        <BodyForm.Label>Location</BodyForm.Label>
        <BodyForm.CheckBox
          type="text"
          placeholder="City, state, zip code or country"
        />
      </BodyForm>
      <BodyForm>
        {locationList.map((location) => (
          <div key={location}>
            <BodyForm.CheckBox type="radio" />
            <BodyForm.Span>{location}</BodyForm.Span>
          </div>
        ))}
      </BodyForm>
    </>
  );
}
