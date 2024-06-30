const Footer = () => {
  let today = new Date();

  return (
    <footer className="container">
      <div className="row justify-content-center mt-3 mb-">
        <div className="col-8">
          <h4>Group Member Allocation App - {today.getFullYear()}</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
