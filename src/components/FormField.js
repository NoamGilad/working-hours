function FormField(props) {
  const { children, label } = props;
  return (
    <div>
      <p>{label}</p>
      {children}
    </div>
  );
}

export default FormField;
