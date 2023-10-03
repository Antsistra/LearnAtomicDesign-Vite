const Cardss = ({ title, description }) => {
  const cardStyle = {
    width: "300px", // Set your desired card width
    height: "200px", // Set your desired card height
  };

  return (
    <div
      className="border rounded-lg overflow-hidden flex"
      style={cardStyle}>
      <img
        src="https://source.unsplash.com/user/wsanter"
        alt={title}
        className="w-1/3"
      />
      <div className="p-4 w-2/3">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Cardss;
