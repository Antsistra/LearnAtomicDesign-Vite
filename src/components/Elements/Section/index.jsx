import { Link } from "react-router-dom";
import Button from "../Button";
const FirstSlide = () => {
  return (
    <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mt-8 lg:mt-32">
      <div className="place-self-center mr-auto lg:col-span-7">
        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-gray-800">
          asdasdasdasd
        </h1>
        <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eaque vitae explicabo aut dolorum, dicta
          ipsam enim aliquam rerum est suscipit.
        </p>
        <Link to="/login">
          <Button classname="mb-5 lg:mb-0 bg-blue-200 stroke-black stroke-2 dark:bg-gray-800 dark:text-white h-10 px-4 lg:h-12 lg:px-6">
            Get Started
          </Button>
        </Link>
      </div>
      <div class="lg:mt-0 lg:col-span-5 lg:flex">
        <img
          src="https://source.unsplash.com/random/900x700/?computer"
          alt="mockup"
        />
      </div>
    </div>
  );
};
export default FirstSlide;
