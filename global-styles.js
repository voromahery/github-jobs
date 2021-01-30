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

@media (min-width: 300px) {
    h1 {
        font-size: 24px;
      }
}
`;
