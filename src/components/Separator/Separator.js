import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme.lineColor};
`;

class Separator extends PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return <Root {...this.props} />;
  }
}

export default Separator;
