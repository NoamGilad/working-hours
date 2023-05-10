import { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";
import AmountPerHour from "./AmountPerHour";
import { Title } from "./ListEntry";

function MainFrom({ addEntryMainForm }) {
  const [date, setDate] = useState(new Date());
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const dateHandler = (e) => {
    console.log(date);
    setDate(new Date(e.target.value));
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
    const fromTime = new Date(`${date}T${from}`);
    const toTime = new Date(`${date}T${to}`);
    const diffInMs = toTime.getTime() - fromTime.getTime();
    const diffInMins = Math.round(diffInMs / 1000 / 60);
    const timeDiffDecimal = diffInMins / 60;
    const hours = Math.floor(timeDiffDecimal);
    const minutes = Math.floor((timeDiffDecimal - hours) * 60);
    date.setHours(hours);
    date.setMinutes(minutes);
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    console.log(formattedTime);

    if (!date || !from || !to) return;
    const data = [
      {
        date,
        from,
        to,
        shiftHours: formattedTime,
      },
    ];
    console.log(data);
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
