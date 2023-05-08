import AmountPerHour from "./AmountPerHour";

function ListEntry(props) {
  const { shifts } = props;

  return (
    <div>
      {shifts.map((listArr, index) => (
        <div key={index}>
          <label>{index + 1}. </label>
          <label>{listArr.date} </label>
          <label>from: {listArr.from} </label>
          <label>to: {listArr.to} </label>
          {/* <label>{shiftHours}</label> */}
        </div>
      ))}
    </div>
  );
}

export default ListEntry;
