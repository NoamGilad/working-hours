import logo from "./logo.svg";
import "./App.css";
import MainForm from "./components/MainForm";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const addEntry = (data) => {
    setList((prevValue) => [...prevValue, data]);
  };
  const renderList = (index, date, from, to) => {};
  return (
    <div className="App">
      <MainForm addEntryMainForm={addEntry} />
      <div>
        {list.map((entry, index) => {
          console.log(entry);
          //const shiftHours = entry.from - entry.to;
          return (
            <div key={index}>
              <label>{index + 1}. </label>
              <label>{entry.date} </label>
              <label>from: {entry.from} </label>
              <label>to: {entry.to} </label>
              <label>for {entry.amount}$ per hour</label>
              {/* <label>{shiftHours}</label> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
