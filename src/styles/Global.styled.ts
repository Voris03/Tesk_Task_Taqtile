import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
  }

  /* Адаптивные стили */
  @media (max-width: 330px) {
    body {
      font-size: 14px;
    }

    h1, h2, h3, h4, h5, h6 {
      font-size: 1.2rem;
    }

    .button {
      font-size: 0.9rem;
      padding: 8px 12px;
    }
  }
`;
