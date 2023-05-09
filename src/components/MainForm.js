import { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";
import AmountPerHour from "./AmountPerHour";
import { Title } from "./ListEntry";

function MainFrom({ addEntryMainForm }) {
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

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
    console.log(date, from, to, amount);
    const fromTime = new Date(`1970-01-01T${from}:00`);
    const toTime = new Date(`1970-01-01T${to}:00`);
    console.log(fromTime.getTime(), toTime.getTime());
    const timeDiff = toTime - fromTime;
    console.log(timeDiff);
    if (!date || !from || !to) return;
    const data = {
      date,
      from,
      to,
    };
    //// you wrote date: dateHandler, which is wrong, you wanna pass the date, not the function
    addEntryMainForm(data);

    setDate("");
    setFrom("");
    setTo("");
    setAmount("");
  };

  return (
    <div>
      <p>Workings hours</p>
      <AmountPerHour />
      <form className="mainForm">
        <FormField label="date">
          <input
            type="date"
            min="2019-01-01"
            max={new Date()}
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
