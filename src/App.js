import logo from "./logo.svg";
import "./App.css";
import MainForm from "./components/MainForm";
import { useState } from "react";
import ListEntry from "./components/ListEntry";

function App() {
  const [list, setList] = useState([]);
  const addEntry = (data) => {
    setList((prevValue) => [...prevValue, data]);
  };

  return (
    <div className="App">
      <MainForm addEntryMainForm={addEntry} />
      <div>
        <ListEntry shifts={list} />
      </div>
    </div>
  );
}

export default App;
