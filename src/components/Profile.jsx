const Profile = () => {
  
  const handleOpenExternalPage = (event) => {
    event.preventDefault();
    window.open(event.target.href, '_blank');
  };
  
  return (
    <>
        <div className="profile__content box2">
        <img src="./myphoto-left.jpg" alt="photo__profile" className="circle" />
        <div className="profile">
          <h1>Leonardo Diaz Castrillon</h1>
        </div>
        <div className="profile__title">
          <h3>Full Stack Web Developer (Jr).</h3>
          <button className="down__cv">Download CV</button>
        </div>
        <span className="prog">Programming languages:</span>
        <div className="lang__code">
          <ul className="languages">
            <li className="lang__item icon-container">
              <i className="bx bxl-html5"></i>
              <span className="text__icon">HTML</span>
            </li>
            <li className="lang__item icon-container">
              <i className="bx bxl-css3"></i>
              <span className="text__icon">CSS</span>
            </li>
            <li className="lang__item icon-container">
              <i className="bx bxl-javascript"></i>
              <span className="text__icon">JAVASCRIPT</span>
            </li>
            <li className="lang__item icon-container">
              <i className="bx bxl-typescript"></i>
              <span className="text__icon">TYPESCRIPT</span>
            </li>
            <li className="lang__item icon-container">
              <i className="bx bxl-react"></i>
              <span className="text__icon"> REACT JS</span>
            </li>
            <li className="lang__item icon-container">
              <i className="bx bxl-nodejs"></i>
              <span className="text__icon">NODE JS</span>
            </li>
            <li className="lang__item icon-container">
              <i className="bx bxl-github"></i>
              <span className="text__icon">GITHUB</span>
            </li>
          </ul>
        </div>        
        <div className="social__media">
          <span className="prog">Social networks</span>
          <div className="btn__content btn__profile">
            <ul>
              <li><a className="github" href="https://github.com/LedicaCo/" onClick={handleOpenExternalPage}><i className='bx bxl-github'></i></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/in/leonardo-diaz-castrillon-a226351a8" onClick={handleOpenExternalPage}><i className='bx bxl-linkedin'></i></a></li>
              <li><a className="youtube" href="" onClick={handleOpenExternalPage}><i className='bx bxl-youtube'></i></a></li>
              <li><a className="email" href="" onClick={handleOpenExternalPage}><i className='bx bx-envelope'></i></a></li>
              <li><a className="whtsapp" href="" onClick={handleOpenExternalPage}><i className='bx bxl-whatsapp'></i></a></li>
            </ul>
          </div>
        </div>
        </div>
        <div className="content__banner box3"></div>
    </>

  );
};

export default Profile;
