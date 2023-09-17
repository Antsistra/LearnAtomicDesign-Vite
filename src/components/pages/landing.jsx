import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const LandingPage = (props) => {
  return (
    <div className="flex justify-center bg-slate-700 min-h-screen items-center ">
      <div className=" text-white text-xl items-center ">
        <h1 className="font-bold py-3">
          Welcome To Testing Project{" "}
        </h1>
        <div className="flex justify-center">
          <Link to="/login">
            <Button classname="bg-red-500  ">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
