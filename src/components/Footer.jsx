
const Footer = () => {
  
  const handleOpenExternalPage = (event) => {
    event.preventDefault();
    window.open(event.target.href, '_blank');
  };
  
  return (
    <>
      <div className="main__content--footer box8" id="Footer">
        <div className="footer__content">
          <div className="contacInfo f--box-1">
          <h3 className="site__map--title">Contact information</h3>
            <img
              className="logo__footer"
              src="./logo-horizontal-ledica.png"
              alt="Logo Ledicaco"
            />
            <h3 className="name__footer">Leonardo Diaz Castrillon</h3>
            <h5>Full Stack Web Developer(Jr).</h5>
            <a className="email__footer" href="mailto: webdesign@ledica.co">
              webdesign@ledica.co
            </a>
            <h4 className="city__footer">Itaguí - Antioquia - Colombia</h4>
          </div>
          <div className="f--box-2">
          <h3 className="site__map--title">Site Map</h3>
            <ul className="site__map">
              <li className="site__map--link">
                <a className="site__map--item" href="#">
                  Home
                </a>
              </li>
              <li className="site__map--link">
                <a className="site__map--item" href="#AboutMe">
                  About me
                </a>
              </li>
              <li className="site__map--link">
                <a className="site__map--item" href="#Certificates">
                  Certificates
                </a>
              </li>
              <li className="site__map--link">
                <a className="site__map--item" href="#MyWorks">
                  My Works
                </a>
              </li>
              <li className="site__map--link">
                <a className="site__map--item" href="#ContacMe">
                  Contact me
                </a>
              </li>
            </ul>
          
          </div>
          <div className="social__btn f--box-3">
          <h3 className="site__map--title">Follow me for more</h3>
            <div className="btn__content">
              <ul>
                <li>
                  <a className="github" href="https://github.com/LedicaCo/" onClick={handleOpenExternalPage}>
                    <i className="bx bxl-github"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="https://www.linkedin.com/in/leonardo-diaz-castrillon-a226351a8" onClick={handleOpenExternalPage}>
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a className="youtube" href="" onClick={handleOpenExternalPage}>
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a className="email" href="mailto:webdesign@ledica.co" onClick={handleOpenExternalPage}>
                    <i className="bx bx-envelope"></i>
                  </a>
                </li>
                <li>
                  <a className="whatsapp" href="https://api.whatsapp.com/send/?phone=573218947069&text&type=phone_number&app_absent=0" onClick={handleOpenExternalPage}>
                    <i className="bx bxl-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>         
          </div>
        </div>
        <div className="footer__copyright f--box-4">Powered by:&nbsp;&nbsp;
        <a className="text__link" href="mailto: webdesign@ledica.co">
              Ledica.co&nbsp;&nbsp;
            </a> Copyright 2023&nbsp; &copy;&nbsp;
            <span className="all__rights">All rights reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;

