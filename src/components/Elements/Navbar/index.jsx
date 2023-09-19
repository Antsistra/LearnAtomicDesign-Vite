const Navbar = (props) => {
  const { children, classname = " h-14 px-14" } = props;
  return (
    <div
      className={`flex justify-between bg-blue-700 text-white font-medium items-center text-center ${classname}`}>
      Toko Pak Edi
      <div className="flex text-center">{children}</div>
    </div>
  );
};
export default Navbar;
