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
    e.preventDefault()
    // console.log(date, from ,to)
    if (!date || !from || !to) return;
    const obj = {
      date,
      from,
      to,
    };
    //// you wrote date: dateHandler, which is wrong, you wanna pass the date, not the function
    //// also you named this object date which is already used here as a variable so better to give a dif name
    addEntryMainForm(obj);

    setDate(undefined);
    setFrom(undefined);
    setTo(undefined);
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
