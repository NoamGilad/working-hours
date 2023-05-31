import { useState, Fragment } from "react";

import classes from "./MainForm.module.css";
import FormField from "./FormField";
import Button from "./UI/Button";
import Card from "./UI/Card";
import ErrorModal from "./UI/ErrorModal";

const MainForm = (props) => {
  const [date, setDate] = useState(``);
  const [from, setFrom] = useState(``);
  const [to, setTo] = useState(``);
  const [error, setError] = useState();

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

    if (!date || !from || !to) {
      return setError({
        title: "Invalid inputs",
        message: "Please fill all your shift's details.",
      });
    }
    props.addEntryMainForm(date, from, to);

    setDate(``);
    setFrom(``);
    setTo(``);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Workings hours</h1>
      </header>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.card}>
        <FormField label="Amount per hour">
          <input type="amount" />
        </FormField>
        <div className={classes.input}>
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
        </div>
      </Card>
    </Fragment>
  );
};

export default MainForm;
