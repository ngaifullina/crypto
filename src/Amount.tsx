import React, { FunctionComponent } from "react";
import styled from "styled-components";

const AmountText = styled.div`
  display: block;
  width: 100%;
  width: fit-content;
  cursor: text;
  margin: 0px 0px 8px;
  font-size: 20px;
  line-height: normal;
  color: rgb(119, 136, 153);
`;

const AmountInput = styled.input`
  width: 200px;
  height: 30px;
  display: block;
  box-sizing: border-box;
  padding: 0px 0px 0px 15px;
  font-family: inherit;
  font-size: 16px;
  outline: none;
  border: 1px solid rgb(119, 136, 153);
  background: none;
  color: inherit;
  border-radius: inherit;
  margin-bottom: 30px;
`;

type Props = {
  amount: number;
  onChangeFn: (e: any) => void;
};
const Amount: FunctionComponent<Props> = ({
  amount,
  onChangeFn,
}): JSX.Element => {
  return (
    <>
      <AmountText>Amount</AmountText>
      <AmountInput
        type="number"
        placeholder="0"
        value={amount}
        onChange={(e) => onChangeFn(e.target.value)}
      ></AmountInput>
    </>
  );
};

export default Amount;
