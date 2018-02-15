import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Octoface from "react-icons/lib/go/octoface";
import ContactMail from "react-icons/lib/md/contact-mail";
import { media } from "../../utils/StyleUtils";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 300px;
  background-color: ${props => props.theme.lineColor};
  ${media.mobile`
        height: 200px;
    `};
`;

const CopyrightBox = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
  color: #999;
  font-size: 12px;
`;

const ContactBox = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 40px;
`;

const ContactItemBox = styled.a`
  color: ${props => props.theme.primary};
  padding: 0 0;
`;

class Footer extends Component {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <Root>
        <CopyrightBox>@ 2018</CopyrightBox>
        <ContactBox>
          <ContactItemBox href="https://github.com/BoBinLee">
            <Octoface size={20} />
          </ContactItemBox>
          <ContactItemBox href="mailto:globaldev@naver.com">
            <ContactMail size={20} />
          </ContactItemBox>
        </ContactBox>
      </Root>
    );
  }
}

export default Footer;