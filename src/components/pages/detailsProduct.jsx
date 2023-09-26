import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../services/products.service";
import LandingNav from "../Elements/Navbar/landingNav";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
const DetailProduct = () => {
  const [cart, setCart] = useState([]);
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState({});
  useEffect(() => {
    getDetailProduct(id, (data) => {
      setDetailProduct(data);
    });
  }, [id]);

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
    <div>
      <LandingNav clicked={"/Main"}>
        <Link to="/Main">
          <Button classname="bg-white mx-6">Back</Button>
        </Link>
      </LandingNav>
      {Object.keys(detailProduct).length > 0 ? (
        <div>
          <div className="flex mx-12 mt-20 lg:mx-72 lg:mt-24 ">
            <h1 className="font-bold text-2xl ">
              {detailProduct.title}
            </h1>
          </div>
          <div className="lg:flex justify-center pt-4 mx-72 ">
            <div className="flex flex-wrap w-2/6">
              <img src={detailProduct.image} alt="" />
            </div>
            <div className="w-4/6 mx-20">
              <h1 className="font-bold text-2xl">
                US ${detailProduct.price}
              </h1>
              <h1 className="mt-2 font-medium">
                ⭐{detailProduct.rating.rate}/5 (
                {detailProduct.rating.count})
              </h1>
              <h2 className="text-justify mt-2">
                {detailProduct.description}
              </h2>
              <Button
                classname="bg-sky-400 mt-4 dark:bg-gray-800 dark:text-white"
                onClick={() =>
                  handleAddToCart(detailProduct.id)
                }>
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center ">
          Loading...
        </div>
      )}
    </div>
  );
};

export default DetailProduct;
