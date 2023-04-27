import logo from "./logo.svg";
import "./App.css";
import MainForm from "./components/MainForm";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const addEntry = (date, from, to) => {
    setList((prevValue) => [...prevValue, { date: date, from: from, to: to }]);
  };
  return (
    <div className="App">
      <MainForm addEntry={addEntry} />
      <div>
        {list.map((entry, index) => {
          console.log(entry);
          //const shiftHours = entry.from - entry.to;
          return (
            <div key={index}>
              <label>{index + 1}. </label>
              <label>{entry.date}</label>
              {/* <label>{shiftHours}</label> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
