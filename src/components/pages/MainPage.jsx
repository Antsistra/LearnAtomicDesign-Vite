import Button from "../Elements/Button";
import Kartu from "../Fragments/Kartu";
import Navbar from "../Elements/Navbar";
import Count from "../Fragments/Count";
import { useEffect, useState } from "react";
const products = [
  {
    id: 1,
    title: "Mobil Balap",
    price: 1000000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://source.unsplash.com/random/200×200?cars",
  },
  {
    id: 2,
    title: "Keyboard Geming ",
    price: 3000000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://source.unsplash.com/random/200×200?keyboard",
  },
  {
    id: 3,
    title: "Makanan",
    price: 200000,
    description: "Lorem",
    image:
      "https://source.unsplash.com/random/200×200?food",
  },
];

const Email = localStorage.getItem("email");
const MainPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      const product = products.find(
        (product) => product.id === item.id
      );
      return (acc = product.price * item.qty);
    }, 0);
    setTotalPrice(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  return (
    //<Cards title="Kucing" harga="Rp100.000">Lorem ipsum dolor sit amet.</Cards>

    <>
      <Navbar>
        <p className="hidden lg:block">{Email}</p>
        <Button
          classname="ml-4 bg-white font-bold text-[#172b4d]  "
          onClick={handleLogout}>
          Logout
        </Button>
      </Navbar>
      <div className="lg:flex justify-center pt-4 bg-white px-4 my-2">
        <div className="lg:w-4/6 flex flex-wrap  px-0 py-2 gap-x-4 gap-y-4">
          {products.map((products) => (
            <Kartu key={products.id}>
              <Kartu.Header
                image={products.image}></Kartu.Header>
              <Kartu.Body title={products.title}>
                {products.description}
              </Kartu.Body>
              <Kartu.Footer
                id={products.id}
                handleAddToCart={handleAddToCart}>
                {products.price}
              </Kartu.Footer>
            </Kartu>
          ))}
        </div>
        <div className="lg:w-2/4 ">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">
            Cart
          </h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      {product.price.toLocaleString(
                        "id-ID",
                        {
                          style: "currency",
                          currency: "IDR",
                        }
                      )}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(
                        product.price * item.qty
                      ).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3} className="font-bold">
                  Total Price
                </td>
                <td>
                  {" "}
                  {totalPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="mt-5 flex justify-center">
          <Count />
            </div>*/}
      </div>
    </>
  );
};
export default MainPage;
