const Container = ({ children, className }) => {
  return (
    <>
      <section>
        <div className={`container mx-auto ${className ? className : ""}`}>
          {children}
        </div>
      </section>
    </>
  );
};

export default Container;
