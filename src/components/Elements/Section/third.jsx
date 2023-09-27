import Button from "../Button";
const ThirdSection = () => {
  return (
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6 mb-64">
      <div className="font-light text-gray-500 sm:text-lg ">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="mb-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam, rerum sint culpa dolorum voluptatum
          quis blanditiis aliquam placeat ipsa, voluptate
          dignissimos quam aut dolor nam ipsum molestias
          porro recusandae. Ut optio blanditiis eveniet quod
          excepturi, consequatur repellat numquam ipsum
          velit maiores labore sint! Eaque repudiandae
          laborum quaerat odit dolorem. Veniam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Omnis tenetur culpa iste totam deleniti
          tempora obcaecati tempore doloremque unde
          perspiciatis.
        </p>
        <Button classname="h-12 px-6 bg-blue-200 mt-2 ">
          Contact Us
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <img
          className="w-full rounded-lg"
          src="https://source.unsplash.com/random/500x800/?hacker"
          alt="office content 1"
        />
        <img
          className="mt-4 w-full rounded-lg lg:mt-10"
          src="https://source.unsplash.com/random/500x800/?code"
          alt="office content 2"
        />
      </div>
    </div>
  );
};

export default ThirdSection;
