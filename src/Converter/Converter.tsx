import React, { useState, useEffect } from "react";
import Amount from "../Amount";
import { CurrencyWrapper, CurrencyStyles } from "./ConverterStyles";

const fetcher = (...args: any) => fetch(args).then((data) => data.json()); //todo

// type Props = {
//   children: React.ReactNode;
// };

const Converter = (): JSX.Element => {
  const [amount1, setAmount1] = useState(1);
  const [currency1, setCurrency1] = useState("BTC");
  const [currency2, setCurrency2] = useState("ETH");

  const rates: { symbol: string; price: number }[] = data.data.map(
    (el: any) => {
      return { symbol: el.symbol, price: +el.values.USD.price };
    }
  );

  const currency2Value = rates.find((el) => el.symbol === currency2)?.price!;
  const currency1Value = rates.find((el) => el.symbol === currency1)?.price!;

  const format = (number: number) => +number.toFixed(6); //todo
  const handleChange = (e: any) => {
    setAmount1(e);
  };

  const total = format((amount1 * currency1Value) / currency2Value);

  return (
    <CurrencyWrapper>
      <Amount onChangeFn={handleChange} amount={amount1} />
      <CurrencyStyles>
        <select
          value={currency1}
          onChange={(e: any) => setCurrency1(e.target.value)}
        >
          {rates.map(({ symbol }) => (
            <option value={symbol}>{symbol}</option>
          ))}
        </select>
      </CurrencyStyles>

      <CurrencyStyles>
        <select
          value={currency2}
          onChange={(e: any) => setCurrency2(e.target.value)}
        >
          {rates.map(({ symbol }) => (
            <option value={symbol}>{symbol}</option>
          ))}
        </select>
      </CurrencyStyles>
      <div>
        {amount1} {currency1} = {total} {currency2}
      </div>
    </CurrencyWrapper>
  );
};
export default Converter;
