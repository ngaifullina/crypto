import React, { FunctionComponent } from "react";
import Header from "./Header";
import Converter from "./Converter/Converter";

const App: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Header />
      <Converter />
    </>
  );
};

export default App;
