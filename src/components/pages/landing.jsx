import LandingNav from "../Elements/Navbar/landingNav";
import { Link } from "react-router-dom";
const LandingPage = (props) => {
  return (
    <div className="">
      <LandingNav>
        <Link to={"/login"}>
          <a className="text-gray-800 bg-blue-200 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            Log in
          </a>
        </Link>
      </LandingNav>
    </div>
  );
};
export default LandingPage;
