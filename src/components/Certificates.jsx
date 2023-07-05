const Certificates = () => {
  
  const handleOpenExternalPage = (event) => {
    event.preventDefault();
    window.open(event.target.href, '_blank');
  };
  return (
    <div className="box5" id="Certificates">
      <h2 className="certificates__title">Training certificates</h2>
      <div className="certificates__container">
        <div className="certificate__content">
          <div className="image__content-1">
          <img className="certificate__image" src="./Frontend-React.png" alt="" />
          </div>
          <hr className="divider" />
          <div className="verify__content">
            <a className="verify__cert" href="https://certificates.academlo.com/en/verify/05140555944827" onClick={handleOpenExternalPage}>
              Verify Certificate
            </a>
          </div>
        </div>
        <div className="certificate__content">
          <div className="image__content-2">
          <img className="certificate__image" src="./UC-1819f7df-39de-4a7f-a443-fb37ff49f3a8.jpg" alt="" />
          </div>
          <hr className="divider" />
          <div className="verify__content">
            <a
              className="verify__cert"
              href="https://www.udemy.com/certificate/UC-1819f7df-39de-4a7f-a443-fb37ff49f3a8/" onClick={handleOpenExternalPage}
            >
              Verify Certificate
            </a>
          </div>
        </div>
        <div className="certificate__content">
          <div className="image__content-3">
          <img className="certificate__image" src="./fundamentos.png" alt="" />
          </div>
          <hr className="divider" />
          <div className="verify__content">
            <a className="verify__cert" href="https://certificates.academlo.com/en/verify/52061699609655" onClick={handleOpenExternalPage}>
              Verify Certificate
            </a>
          </div>
        </div>
        <div className="certificate__content">
          <div className="image__content-4">
          <img className="certificate__image-4" src="./fundamentos.png" alt="" />
          </div>
          <hr className="divider" />
          <div className="verify__content">
            <a className="verify__cert" href="#" onClick={handleOpenExternalPage}>
              Verify Certificate
            </a>
          </div>
        </div>
        <div className="certificate__content">
          <div className="image__content-5">
          <img className="certificate__image" src="./fundamentos.png" alt="" />
          </div>
          <hr className="divider" />
          <div className="verify__content">
            <a className="verify__cert" href="#" onClick={handleOpenExternalPage}>
              Verify Certificate
            </a>
          </div>
        </div>
        <div className="certificate__content">
          <div className="image__content-6">
          <img className="certificate__image" src="./fundamentos.png" alt="" />
          </div>
          <hr className="divider" />
          <div className="verify__content">
            <a className="verify__cert" href="#" onClick={handleOpenExternalPage}>
              Verify Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
