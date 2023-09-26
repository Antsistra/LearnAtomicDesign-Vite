import Button from "../Elements/Button";

const Cards = (props) => {
  const { children, harga, title } = props;
  return (
    <div className="flex justify-center pt-40 ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="Sunset in the mountains"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {title}
          </div>
          <p className="text-gray-700 text-base">
            {children}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Button classname="bg-blue-400">{harga}</Button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
