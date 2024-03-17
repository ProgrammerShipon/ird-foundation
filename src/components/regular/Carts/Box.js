const Box = ({ children, className }) => {
  return (
    <div
      className={`py-[15px] px-[30px] rounded-[10px] bg-white ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Box;
