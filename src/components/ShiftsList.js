import classes from "./ShiftsList.module.css";
import Card from "./UI/Card";

const ShiftList = (props) => {
  return (
    <Card className={classes.row}>
      <ul>
        {props.shifts.map((shift) => (
          <li key={shift.id}>
            {shift.date} {shift.from} {shift.to}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ShiftList;
