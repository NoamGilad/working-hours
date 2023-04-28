function ListEntry(props) {
  const { index, date, from, to, amount } = props;

  return (
    <div key={index}>
      <label>{index + 1}. </label>
      <label>{date}</label>
      <label>{from}</label>
      <label>{to}</label>
      {/* <label>{shiftHours}</label> */}
    </div>
  );
}

export default ListEntry;
