const FormField = (props) => {
  const { children, label, className } = props;
  return (
    <form>
      <p>{label}</p>
      {children}
    </form>
  );
};

export default FormField;
