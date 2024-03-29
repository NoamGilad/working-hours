import { useState } from "react";
import Button from "../UI/Button";

function AmountPerHour(props) {
  const { perHour } = props;

  const [amount, setAmount] = useState("");
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const okHandler = (e) => {
    e.preventDefault();
    console.log(amount, 123);
  };

  return (
    <div>
      <form>
        <label>I get {amount} per hour </label>
        <input
          type="number"
          min="0"
          value={amount}
          onChange={amountHandler}
        ></input>
      </form>
      <Button label="OK" handler={okHandler}>
        OK
      </Button>
    </div>
  );
}

export default AmountPerHour;
