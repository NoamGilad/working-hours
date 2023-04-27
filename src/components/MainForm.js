import FormField from "./FormField";
import Button from "./Button";
import { useState } from "react";

function MainFrom({ addEntry }) {
  const [date, setDate] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  const submitHandler = (e) => {
    if (!date || !from || !to) return;

    setDate(e.target.value);
    setFrom(e.target.value);
    setTo(e.target.value);

    addEntry(date, from, to);
  };

  return (
    <div>
      <p>hkljh.kj</p>
      <form className="mainForm">
        <FormField label="date">
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </FormField>
        <FormField label="from">
          <input
            type="time"
            value={from}
            onChange={(e) => {
              console.log(e.target.value);
              const [hours, minutes] = e.target.value.split(":");
              const value = new Date().setHours(hours);
              console.log(value);
              //   setFrom(new Date().setHours(hours).setMinutes(minutes))
            }}
          />
        </FormField>
        <FormField label="to">
          <input
            type="time"
            value={to}
            onChange={(e) => console.log(e.target.value)}
          />
        </FormField>
        <Button label="submit" handler={submitHandler} />
      </form>
    </div>
  );
}

export default MainFrom;
