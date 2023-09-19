import Button from "../Elements/Button";
const Kartu = (props) => {
  const { children } = props;
  return (
    <div className="rounded overflow-hidden shadow-lg  object-cover lg:w-1/4">
      {children}
    </div>
  );
};
const Header = (props) => {
  const { image } = props;
  return (
    <img
      className="object-cover h-60 "
      src={image}
      alt="Sunset in the mountains"></img>
  );
};
const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">
        {title.substring(0, 20)}
      </div>
      <p className="text-gray-700 text-base">
        {children.substring(0, 120)}. . . . . .
      </p>
    </div>
  );
};

const Footer = (props) => {
  const { children, handleAddToCart, id } = props;
  return (
    <div className="flex justify-between px-6 pt-4 pb-2 rounded">
      <p className="font-medium ">
        {children.toLocaleString("id-ID", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <div className="">
        <Button
          classname="bg-blue-900 "
          onClick={() => handleAddToCart(id)}>
          🛒
        </Button>
      </div>
    </div>
  );
};

Kartu.Header = Header;
Kartu.Body = Body;
Kartu.Footer = Footer;
export default Kartu;
