import Button from "../Button";
const CardDetail = (props) => {
  const {
    title = "lorem ipsum",
    desc = "lorem",
    children,
  } = props;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <Button classname="bg-[#F2994A] hover:bg-[#b87439]">
          test
        </Button>
      </div>
    </div>
  );
};

export default CardDetail;
