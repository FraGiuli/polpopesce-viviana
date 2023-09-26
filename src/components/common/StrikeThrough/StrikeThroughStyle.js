import { css } from "styled-components";

export const getStrikeThroughStyle = (props) => {
  if (props.linetheme === "highlight") {
    return css`
      position: relative;
      z-index: 1;
      display: inline-block;
      font-size: inherit;
      .text-element::before {
        content: "";
        position: absolute;
        width: 100%;
        height: ${props.height || "10px"};
        background-color: ${props.highlightColor};
        border-radius: 10px;
        top: 45%;
        z-index: -1;
        transform: ${props.transform};
      }
    `;
  } else {
    return css`
      position: relative;
      display: inline-block;
      font-size: inherit;
      z-index: 1;
      .text-element::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: ${props.highlightColor};
        border-radius: 8px;
        top: 8px;
        z-index: -1;
        transform: ${props.transform};
      }
    `;
  }
};
