import LandingNav from "../Elements/Navbar/landingNav";
import { Link } from "react-router-dom";
import SecondSection from "../Elements/Section/second";
import FirstSlide from "../Elements/Section";
import ThirdSection from "../Elements/Section/third";
import Footer from "../Elements/footer";
const LandingPage = (props) => {
  return (
    <>
      {" "}
      <div className="">
        <LandingNav>
          <Link to={"/login"}>
            <a className="text-gray-800  text-lg dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
              Log in
            </a>
          </Link>
        </LandingNav>
        <FirstSlide></FirstSlide>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
      </div>
      <Footer></Footer>
    </>
  );
};
export default LandingPage;
