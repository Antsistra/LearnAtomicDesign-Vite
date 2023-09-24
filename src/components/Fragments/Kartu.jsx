import Button from "../Elements/Button";
import { Link } from "react-router-dom";
const Kartu = (props) => {
  const { children } = props;
  return (
    <div className="rounded overflow-hidden shadow-lg  object-cover lg:w-1/4">
      {children}
    </div>
  );
};
const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        className="object-cover h-40 "
        src={image}
        alt="Sunset in the mountains"></img>
    </Link>
  );
};
const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-6 py-4 pb-4">
      <div className="font-bold text-xl mb-2">
        {title.substring(0, 20)}
      </div>
      <p className="text-gray-700 text-base">
        {children.substring(0, 100)}. . . . . .
      </p>
    </div>
  );
};

const Footer = (props) => {
  const { children, handleAddToCart, id } = props;
  return (
    <div className="flex justify-between items-center px-6 pb-4  rounded">
      <p className="font-medium ">
        {children.toLocaleString("id-ID", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <Button
        classname="bg-blue-900 "
        onClick={() => handleAddToCart(id)}>
        🛒
      </Button>
    </div>
  );
};

Kartu.Header = Header;
Kartu.Body = Body;
Kartu.Footer = Footer;
export default Kartu;
