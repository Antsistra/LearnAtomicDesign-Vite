const Navbar = (props) => {
  const { children, classname = " h-14 px-14" } = props;
  return (
    <div
      className={`flex justify-end bg-blue-700 text-white font-medium items-center ${classname}`}>
      {children}
    </div>
  );
};
export default Navbar;
