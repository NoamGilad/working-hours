import { useState, Fragment } from "react";

import logo from "./logo.svg";
import "./App.css";
import MainForm from "./components/MainForm";
import ShiftList from "./components/ShiftsList";

const App = (props) => {
  const [list, setList] = useState([]);

  const addEntryHandler = (date, from, to) => {
    setList((prevShiftsList) => {
      return [
        ...prevShiftsList,
        { date, from, to, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <MainForm addEntryMainForm={addEntryHandler} />
      <ShiftList shifts={list} />
    </Fragment>
  );
};

export default App;
