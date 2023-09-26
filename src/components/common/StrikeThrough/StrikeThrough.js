import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getStrikeThroughStyle } from "./StrikeThroughStyle";
import Text from "../Text/Text";

const Container = styled.span`
  ${getStrikeThroughStyle}
`;

const StrikeThrough = (props) => {
  const {
    className,
    children,
    matrixValue,
    rotateValue,
    linetheme,
    highlightColor,
    tag,
    fontSize,
    height,
    ...otherProps
  } = props;
  let transform;
  if (matrixValue) {
    transform = `matrix(${matrixValue})`;
  }
  if (rotateValue) {
    transform = `rotate(${rotateValue})`;
  }
  return (
    <Container
      className={`strike-through-text ${className}`}
      transform={transform}
      linetheme={linetheme}
      highlightColor={highlightColor}
      height={height}
      {...otherProps}
    >
      <Text tag={tag} fontSize={fontSize} {...otherProps}>
        {children}
      </Text>
    </Container>
  );
};

StrikeThrough.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  matrixValue: PropTypes.string,
  rotateValue: PropTypes.string,
  linetheme: PropTypes.string,
  highlightColor: PropTypes.string,
  height: PropTypes.string,
};

StrikeThrough.defaultProps = {
  className: "",
  matrixValue: "-1.02, -0.01, -0.01, 1, 0, 0",
  rotateValue: undefined,
  linetheme: undefined,
  highlightColor: "#eee520",
  height: undefined,
};

export default StrikeThrough;
