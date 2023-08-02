import React, { FunctionComponent } from "react";
import styled from "styled-components";

const HeaderStyles = styled.div`
  background-color: #282c34;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`;

const Header: FunctionComponent = (): JSX.Element => {
  return <HeaderStyles> CryptoRank </HeaderStyles>;
};
export default Header;
