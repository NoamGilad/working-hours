import { useState, Fragment } from "react";

import logo from "./logo.svg";
import "./App.css";
import MainForm from "./components/MainForm";
import ShiftList from "./components/ShiftsList";

const App = (props) => {
  const [list, setList] = useState([]);
  const [amount, setAmount] = useState(``);

  const addEntryHandler = (date, from, to, amount) => {
    setList((prevShiftsList) => {
      return [
        ...prevShiftsList,
        { date, from, to, amount, id: Math.random().toString() },
      ];
    });
  };

  const addAmountHandler = (amountPerHour) => {
    setAmount(amountPerHour);
  };

  return (
    <Fragment>
      <MainForm
        addEntryMainForm={addEntryHandler}
        addAmountMainForm={addAmountHandler}
      />
      <ShiftList shifts={list} />
    </Fragment>
  );
};

export default App;
