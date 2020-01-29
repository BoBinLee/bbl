import React, { Component, PureComponent } from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const Root = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${props => props.theme.third};
`;

class LineText extends PureComponent<IProps> {
  public render() {
    const { children, ...rest } = this.props;
    return <Root {...rest}>{children}</Root>;
  }
}

export default LineText;
