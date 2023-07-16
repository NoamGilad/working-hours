const FormField = (props) => {
  const { children, label } = props;

  return (
    <form>
      <p>{label}</p>
      {children}
    </form>
  );
};

export default FormField;
