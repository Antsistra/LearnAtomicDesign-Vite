import LandingNav from "../Elements/Navbar/landingNav";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../services/products.service";

const DetailProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <>
      <div>
        <LandingNav>
          <Link to="/Main">
            <Button classname="bg-white mx-6">Back</Button>
          </Link>
        </LandingNav>
      </div>
      <div className="flex mx-12 mt-20 lg:mx-72 lg:mt-24 ">
        <h1 className="font-bold text-2xl ">
          {product.title}
        </h1>
      </div>
      <div className="lg:flex justify-center pt-4 mx-72 ">
        <div className="flex flex-wrap w-2/6">
          <img src={product.image} alt="" />
        </div>
        <div className="w-4/6 mx-20">
          <h1 className="font-bold text-2xl">
            US ${product.price}
          </h1>
          <h1 className="mt-2 font-medium">
            {product.rating.rate}
          </h1>
          <h2 className="text-justify mt-2">
            {product.description}
          </h2>
          <Button
            classname="bg-sky-400 mt-4 dark:bg-gray-800 dark:text-white"
            onClick={() => handleAddToCart(id)}>
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default DetailProducts;
