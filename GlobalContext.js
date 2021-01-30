import React, { useState, useEffect, useReducer, createContext } from "react";
const Context = createContext(null);

function GlobalContext(props) {
  const [location, setLocation] = useState("New York");
  const [jobType, setJobType] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [locationList, setLocationList] = useState([
    "London",
    "Amsterdam",
    "New York",
    "Berlin",
  ]);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 5;
  const offSet = currentPage * perPage;

  const regeneratorRunTime = "https://cors-anywhere.herokuapp.com/";

  const jobUrl = `${regeneratorRunTime}https://jobs.github.com/positions.json?description=${jobDescription}&full_time=${jobType}&location=${location}`;

  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "LOADING": {
          return { ...state, loading: true };
        }
        case "RESOLVED": {
          return {
            ...state,
            loading: false,
            response: action.response,
            error: null,
          };
        }
        case "ERROR": {
          return {
            ...state,
            loading: false,
            response: null,
            error: action.error,
          };
        }
        case "SEARCH_BY_KEYWORD": {
          return {
            ...state,
            loading: false,
            response: action.filterData,
            error: null,
          };
        }
        default:
          return state;
      }
    },
    {
      loading: false,
      response: [],
      error: null,
    }
  );

  useEffect(() => {
    let isCurrent = true;

    dispatch({ type: "LOADING" });

    fetch(jobUrl)
      .then((response) => response.json())
      .then((json) => {
        if (isCurrent) {
          dispatch({ type: "RESOLVED", response: json });
        }
      })

      .catch((error) => {
        dispatch({ type: "ERROR", error });
      });

    return () => {
      isCurrent = false;
    };
  }, [location, jobType]);
  const pageNumber = Math.ceil(state.response.length / perPage);
  console.log(state.response, pageNumber);

  return (
    <div>
      <Context.Provider
        value={{
          state,
          dispatch,
          locationList,
          setLocationList,
          location,
          setLocation,
          jobType,
          setJobType,
          perPage,
          offSet,
          currentPage,
          setCurrentPage,
          pageNumber
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
}

export { GlobalContext, Context };
