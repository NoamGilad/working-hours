import classes from "./ShiftsList.module.css";
import Card from "./UI/Card";

const ShiftList = (props) => {
  return (
    <Card className={classes.row}>
      <ul>
        {props.shifts.map((shift) => (
          <li key={shift.id}>
            Date: {shift.date} From: {shift.from} To: {shift.to} (
            {shift.shiftTime} hours). For {shift.amount}₪ per hour
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ShiftList;
