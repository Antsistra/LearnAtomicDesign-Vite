import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
const FormRegister = (props) => {
  return (
    <form action="">
      <InputForm
        label="FullName"
        name="FullName"
        type="Email"
        placeholder="John Doe"
      />
      <InputForm
        label="Email"
        name="Email"
        type="Email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Address"
        name="Address"
        type="Address"
        placeholder="xxxxx"
      />

      <Button classname="bg-sky-700 text-white">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
