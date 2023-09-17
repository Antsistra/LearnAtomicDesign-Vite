import { useRouteError } from "react-router-dom";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center bg-[#F4F5F7] min-h-screen items-center ">
      <div className="">
        <h1 className="font-bold text-3xl text-[#FF5630]">
          Uh Oh! Something went wrong :(
        </h1>
        <p className="mt-4 text-center">
          {error.statusText || error.message}
        </p>
        <div className="text-center">
          <Link to="/">
            <Button classname="bg-[#FF5630] mt-4 text-white">
              Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
