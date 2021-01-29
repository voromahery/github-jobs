import React, { useState, useEffect, useReducer, createContext } from "react";
const Context = createContext(null);

function GlobalContext(props) {
  const [jobsData, setJobsData] = useState([]);
  const regeneratorRunTime = "https://cors-anywhere.herokuapp.com/";

  const jobUrl = `${regeneratorRunTime}https://jobs.github.com/positions.json?description=python&full_time=true&location=berlin`;

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
  }, []);

  console.log(state.response);

  return (
    <div>
      <Context.Provider value={{state, dispatch, jobsData}}>
        {props.children}
      </Context.Provider>
    </div>
  );
}

export { GlobalContext, Context };
