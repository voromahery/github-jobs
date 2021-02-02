import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body,
pre,
code {
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  background-color: #f6f7fb;
  margin: auto;
  max-width: 1440px;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 12px;
  padding-bottom: 12px;
}

a {
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #1E86FF;
  overflow-wrap: break-word; 
}

img {
  width: 100%;
  max-width: 90px;
  border-radius: 4px;
}

pre {
  white-space: pre-wrap;
}

h1 {
  font-weight: bold;
  font-size: 18px;
  line-height: 36px;
  color: #282538;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

::-moz-input-placeholder{
  color: #B9BDCF;
}

::-webkit-input-placeholder{
  color: #B9BDCF;
}

:-ms-input-placeholder {
  color: #B9BDCF;
}

::placeholder {
  color: #B9BDCF;
}

button {
  cursor: pointer;
}

.current,
.current:hover {
  background-color: #1e86ff;
  color: #ffffff;
  cursor: default;
}

@media (min-width: 300px) {
    h1 {
        font-size: 24px;
      }
}

@media (min-width: 650px) {
  body {
    padding-left: calc(120px / 2);
    padding-right: calc(120px / 2);
  }
}

@media (min-width: 1200px) {
  body {
    padding-left: 120px;
    padding-right: 120px;
  }
}
`;
