import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
const FormLogin = (props) => {
  const [failLogin, setfailLogin] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/Main";
      } else {
        setfailLogin(res.response.data);
        console.log(res);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="username"
        name="username"
        type="text"
        placeholder="John Doe"
        ref={usernameRef}
      />
      <InputForm
        label="password"
        name="password"
        type="password"
        placeholder="******"
      />
      <Button
        classname="bg-sky-700 text-white"
        type="submit">
        Login
      </Button>
      {failLogin && (
        <p className="text-red-500 mt-4 capitalize">
          {failLogin}
        </p>
      )}
    </form>
  );
};

export default FormLogin;
