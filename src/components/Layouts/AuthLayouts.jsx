import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center bg-slate-700 min-h-screen items-center ">
      <div className="w-full max-w-xs">
        <h1 className="text-blue text-3xl font-bold mb-2 text-white">
          {title}
        </h1>
        <p className="font-medium text-slate-400 mb-4">
          Hello Wellcome Back Sir
        </p>
        {children}
        <p className="mt-4 text-white ">
          {type === "login"
            ? "Dont' Have an Account? "
            : "Already Have an Account? "}

          {type === "login" && (
            <Link to="/register">register</Link>
          )}

          {type === "register" && (
            <Link to="/login">login</Link>
          )}
        </p>
      </div>
    </div>
  );
};
export default AuthLayouts;
