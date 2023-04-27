import FormField from "./FormField";
import Button from "./Button";
import { useState } from "react";

function MainFrom({ addEntryMainForm }) {
  const [date, setDate] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const fromHandler = (e) => {
    setFrom(e.target.value);
    // const [hours, minutes] = e.target.value.split(":");
    // const value = new Date().setHours(hours);

    //   setFrom(new Date().setHours(hours).setMinutes(minutes))
  };

  const toHandler = (e) => {
    setTo(e.target.value);
  };

  const submitHandler = (e) => {
    if (!date || !from || !to) return;
    const data = {
      date: dateHandler,
      from: fromHandler,
      to: toHandler,
    };
    addEntryMainForm(data);

    setDate();
    setFrom();
    setTo();
  };

  return (
    <div>
      <p>Workings hours</p>
      <form className="mainForm">
        <FormField label="date">
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateHandler}
          />
        </FormField>
        <FormField label="from">
          <input type="time" value={from} onChange={fromHandler} />
        </FormField>
        <FormField label="to">
          <input type="time" value={to} onChange={toHandler} />
        </FormField>
        <Button label="submit" handler={submitHandler} />
      </form>
    </div>
  );
}

export default MainFrom;
