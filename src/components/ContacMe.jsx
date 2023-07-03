const ContacMe = () => {
  
  const handleOpenExternalPage = (event) => {
    event.preventDefault();
    window.open(event.target.href, '_blank');
  };
  return (
    <div className="contactMe box7" id="ContacMe">
      <div className="contacme__title">
        <h2 className="text__title">Contac me</h2>
      </div>
      <div className="form__contac">
        <div className="if__container">
          <div className="more__contact-if">
            <div className="column-1">
              <h2 className="more__contac">If:</h2>
            </div>
            <div className="column-2">
              <ul className="if__list">
                <li className="if__item">
                  You are looking for someone who is motivated, adaptable and
                  with soft skills, I would be happy to be part of your team and
                  contribute to the success of your projects.
                </li>
                <br />
                <li className="if__item">
                  You have a project or an idea, that i can help you to
                  implement
                </li>
                <br />
                <li className="if__item">
                  You want yourself or your business to be a distinctive and
                  impactful brand.
                </li>
                <br />
                <li className="if__item">You just want to say Hi!</li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <div className="more__contact-if">
            <div className="column-1">
              <h2 className="more__contac">Then:</h2>
            </div>
            <div className="column-2">
              <span className="then__email">
                The best and the most confotable way to talk to me is to send me
                and email to
                <a className="link__email" href="mailto:webdesign@ledica.co">
                  {" "}
                  webdesign@ledica.co
                </a>
              </span>
              <br />
              <br />
              <p className="then__paragraf">
                Please, what are your goals, when do you want to achieve them
                and what budget do you have? <br /> I will reply to you as soon
                as possible and we will discuss the details.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="more__contact-if">
            <div className="column-1">
              <h2 className="more__contac">And:</h2>
            </div>
            <div className="column-2">
              <span>
                By the way i use <a href="">Whatsapp</a> and have profiles at
                social networks like
              </span>
            </div>
          </div>
          <div className="btn__content form__btn">
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
                <a className="email" href="" onClick={handleOpenExternalPage}>
                  <i className="bx bx-envelope"></i>
                </a>
              </li>
              <li>
                <a className="whatsapp" href="" onClick={handleOpenExternalPage}>
                  <i className="bx bxl-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="form__container">
          <form className="form" action="">
          <h2 className="form__title">Contact form</h2>
            <div className="form__section">
              <label className="form__label" htmlFor="">
              Company
              </label>
              <input 
                className="form__input"
                id=""
                type="text" required placeholder="Write the name of your company"               
              />
            </div>
            <div className="form__section">
              <label className="form__label" htmlFor="">
                Name and surname
              </label>
              <input
                className="form__input"
                id="password"
                type="text" required placeholder="Write your first and last name"
              />
            </div>
            <div className="form__section">
              <label className="form__label" htmlFor="">
                Email
              </label>
              <input
                className="form__input"
                id="password"
                type="text" required placeholder="Write your email"
              />
            </div>
            <div className="form__section">
              <label className="form__label" htmlFor="">
                Contac number
              </label>
              <input
                className="form__input"
                id="password"
                type="text" required placeholder="Write your contact number or mobile"
              />
            </div>
            <div className="form__section">
              <label className="form__label" htmlFor="">
              Message
              </label>
              <textarea className="form__text-area" name="" id="" cols="30" rows="8" placeholder="Write your message"></textarea>
            </div>
            <button className="btn__submit"><span>Send message</span></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContacMe;
