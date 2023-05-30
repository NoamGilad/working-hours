import { useState, Fragment } from "react";

import FormField from "./FormField";
import Button from "./UI/Button";
import Card from "./UI/Card";

const MainForm = (props) => {
  const [date, setDate] = useState(``);
  const [from, setFrom] = useState(``);
  const [to, setTo] = useState(``);

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
    e.preventDefault();
    if (!date || !from || !to) return;
    const shift = {
      date: dateHandler,
      from: fromHandler,
      to: toHandler,
    };
    props.addEntryMainForm(date, from, to);

    setDate(``);
    setFrom(``);
    setTo(``);
  };

  return (
    <Fragment>
      <header>
        <h1>Workings hours</h1>
      </header>
      <Card>
        <FormField label="Amount per hour">
          <input type="amount" />
        </FormField>
        <form className="mainForm">
          <FormField label="date">
            <input
              type="date"
              min="2019-01-01"
              max=""
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
          <Button onClick={submitHandler}>Add shift</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default MainForm;
