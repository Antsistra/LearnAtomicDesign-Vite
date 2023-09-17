const Label = (props) => {
  const { htmlfor, children } = props;
  return (
    <label
      htmlFor="email"
      className="block text-white text-sm  font-bold mb-2">
      {children}
    </label>
  );
};
export default Label;
