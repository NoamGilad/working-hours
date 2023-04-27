function Button(props) {
  const { handler, label } = props;
  return (
    <button onClick={handler}>
      <label>{label}</label>
    </button>
  );
}

export default Button;
