import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const FormLogin = (props) => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.Email.value);
    localStorage.setItem(
      "password",
      event.target.Password.value
    );
    console.log(event.target.Email.value);
    window.location.href = "/Main";
  };

  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        name="Email"
        type="Email"
        placeholder="xxx@mail.com"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        name="Password"
        type="Password"
        placeholder="******"
      />
      <Button
        classname="bg-sky-700 text-white"
        type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
