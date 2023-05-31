import { useState, Fragment } from "react";

import classes from "./MainForm.module.css";
import FormField from "./FormField";
import Button from "./UI/Button";
import Card from "./UI/Card";
import ErrorModal from "./UI/ErrorModal";
import Salary from "./Salary";

const MainForm = (props) => {
  const [date, setDate] = useState(``);
  const [from, setFrom] = useState(``);
  const [to, setTo] = useState(``);
  const [amount, setAmount] = useState(``);
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

    if (!date || !from || !to || !amount) {
      return setError({
        title: "Invalid inputs",
        message: "Please fill all your shift's details.",
      });
    }

    if (amount <= 0) {
      return setError({
        title: "Invalid amount",
        message: "You can not earn 0 or less $ per hour.",
      });
    }
    props.addEntryMainForm(date, from, to, amount);

    setDate(``);
    setFrom(``);
    setTo(``);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
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
          <input
            type="number"
            value={amount}
            min="0"
            onChange={amountHandler}
          />
        </FormField>
        <label>{amount}₪</label>
      </Card>
      <Card className={classes.card}>
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
