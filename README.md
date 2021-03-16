<h1 align="center">{Github Jobs}</h1>

<div align="center">
  <h3>
    <a href="https://https://github-jobs-refactored.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/voromahery/github-jobs">
      Solution
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [Overview](#overview)
    -   [Built With](#built-with)
-   [Features](#features)
-   [How to use](#how-to-use)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](./github-jobs.png)

-   Feel free to visit my demo at [https://github-jobs-daniel.netlify.app/](https://github-jobs-daniel.netlify.app/)

## My experience
-   My experience was, I struggled especially filtering the job by their location. Now it works fine but I have to time the full name of the location.

## Structure of the code
- First, I created an HTML in which I created the root then, grabbed the root and put it in index.js. After that, I created some JSX in the App component then, I wrapped the App inside the `Router`. In the App component, I put some component which wrapped by `Path` and the block of path are wrapped by `Switch` in order to allow us to go in different pages.

- Secondly, I created a context and exported it and created my state stored in `useReducer()` then, I fetched the data from the API and exported that data which is stored in a state and the dispatch everywhere by using context(the state and dispatch is used as value of the **Context.Provider** so that we can use it evaerywhere). After the data is fetched, I mapped them so that evrythin will appear on the browser.

- In the next step, I created a state for the job type, description and location in order to allow us to filter the state by according to the required keyword.

- With the first filter which is filtering by job title and company I used `||` in order to allow us to filter not only the title but the company name.

- With the search by location, I filter them by using `e.target.value` in order to get the value of the input so that we can fetch our data by location.

- For the checkboxes, I created a array of four locations then I mapped them, and finally, an eventListener is created to allow us to fetch the data by the clickd location name.

- I also used `Link` which is a keyword act as an anchor in order to allow us to check the details of each jobs.

- Finally, I create the pagination but first, I used splice in order to allow us displaying five jobs (at the most) in each page and then, I created an array of page marks so that we can jump to the last page or whatever we want to look at.

## Any further improvement:
-  If I had more time, I would style my work the same in the design and work on my checkbox more so that the previous which was checked becomes unchecked when checking another checkbox. What's more, I would refactore some of my code by using **compound component**.

## Knowledge acquired
-   I learned how to create a pagination even if it is simple. I also got a new skill on using `date-fns` to manipulate the dates from the API.

- I also got a awesome skill in using I used `dangerouslySetInnerHTML={{ __html: blockOfHTML}}` in order to convert a block of HTML in a string into a normal block of html.

## Challenging part
-   For me, the most challenging part is filtering the jobs by their location.

### Built With

-   [React](https://reactjs.org/);

## Features

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [React](https://reactjs.org/)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements
- [date-fns](https://www.npmjs.com/package/date-fns)

- [React](https://reactjs.org/docs/dom-elements.html)
## Contact

-   GitHub [@voromahery](https://github.com/voromahery)
