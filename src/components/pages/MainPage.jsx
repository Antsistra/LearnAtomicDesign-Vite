import Button from "../Elements/Button";
import Kartu from "../Fragments/Kartu";
import Navbar from "../Elements/Navbar";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import { getUsername } from "../../services/auth.service";

const token = localStorage.getItem("token");
const MainPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  const handleCleanCart = () => {
    setCart([]);
    setTotalPrice(0);
    localStorage.removeItem("cart");

    if (parentElement.contains(childElement)) {
      childElement.remove();
    }
    alert("Data Telah Dibersihkan");
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    setUsername(getUsername(token));
  });
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });

  useEffect(() => {
    if (products.length && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find(
          (product) => product.id === item.id
        );
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");
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
        <p className="lg:block mt-2 font-bold text-md">
          Hello! {username}{" "}
        </p>

        <Button
          classname="ml-4 bg-white font-bold text-[#172b4d]  "
          onClick={handleLogout}>
          Logout
        </Button>
      </Navbar>
      <div className="lg:flex justify-center pt-4 lg:mx-12 bg-white  my-4">
        <div className="flex flex-wrap lg:w-4/6 py-2 gap-x-4 gap-y-4 mx-4 mb-4">
          {products.length > 0 &&
            products.map((products) => (
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
        <div className="w-2/6 ">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">
            Cart
          </h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead className="">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
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
                            currency: "USD",
                          }
                        )}
                      </td>
                      <td>{item.qty}</td>
                      <td className="">
                        {(
                          product.price * item.qty
                        ).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
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
                    currency: "USD",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end px-4">
          <Button
            classname="bg-red-700"
            onClick={handleCleanCart}>
            Clear
          </Button>
        </div>
        {/* <div className="mt-5 flex justify-center">
          <Count />
            </div>*/}
      </div>
    </>
  );
};
export default MainPage;
