const MyWorks = () => {
  
  const handleOpenExternalPage = (event) => {
    event.preventDefault();
    window.open(event.target.href, '_blank');
  };
  return (
    <div className="myworks box6" id="MyWorks">
      <div className="myworks__content">
        <h1 className="myworks__title">My Works</h1>
        <div className="myworks__preamble">
          <p>
            I invite you to explore each project in detail and discover how I've
            tackled specific challenges, solved complex problems, and delivered
            impactful results. If you are looking for a passionate and committed
            web developer for your next project, don't hesitate to contact me!
          </p>
          <br />
          <p>
            Thank you for visiting my portfolio and for your interest in my
            work. I look forward to the opportunity to collaborate with you and
            bring your ideas to the web in an effective and creative way.
          </p>
        </div>
        <div className="myworks__container">
          <div className="mywork__content">
            <img className="mywork__image" src="./portfolio.png" alt="" />
            <hr className="divider" />
            <h2 className="work__title"> Portfolio Ledica.co</h2>
            <div className="work__description">
              <p className="mywork__details">
              I present to you my portfolio developed with React.Js, JavaScript, HTML and CSS, it contains a summary of my experience as a Full Stack developer and some of my recent work. <br /><br /><br />
              </p>
            </div>
            <hr className="divider" />
            <ul className="mywork__options">
              <li className="mywork__option">
                <a
                  className="mywork__option-item"
                  href="https://ledicaco.github.io/portfolioLedica.co/" onClick={handleOpenExternalPage}
                >
                  Demo
                </a>
              </li>
              <li className="mywork__option">
                <a
                  className="mywork__option-item"
                  href="https://github.com/LedicaCo/portfolioLedica.co" onClick={handleOpenExternalPage}
                >
                  Code
                </a>
              </li>
            </ul>
          </div>
          <div className="mywork__content">
            <img className="certificate__image" src="./PokedexApp.png" alt="" />
            <hr className="divider" />
            <h2 className="work__title">Pokedex App</h2>
            <div className="work__description">
              <p className="mywork__details">
              Hello everyone, this time I bring you my fifth work or project developed with React, Axios, Hooks, Redux and React Routes, consuming the pokemon pokeApi Api, called Pokedex App, in this App forms, statistics, filters and management are used of routes.
              </p>
            </div>
            <hr className="divider" />
            <ul className="mywork__options">
              <li className="mywork__option">
                <a
                  className="mywork__option-item"
                  href="https://ledicaco.github.io/PokedexApp/" onClick={handleOpenExternalPage}
                >
                  Demo
                </a>
              </li>
              <li className="mywork__option">
                <a
                  className="mywork__option-item"
                  href="https://github.com/LedicaCo/PokedexApp" onClick={handleOpenExternalPage}
                >
                  Code
                </a>
              </li>
            </ul>
          </div>
          <div className="mywork__content">
            <img className="certificate__image" src="./UsersCRUD.png" alt="" />
            <hr className="divider" />
            <h2 className="work__title"> Users CRUD</h2>
            <div className="work__description">
              <p className="mywork__details">
                I present to you my fourth work developed with HTML. CSS,
                Javascript, Axios, React-hook-form, consuming an Academlo API
                called Users CRUD, it is a user CRUD in which the creation,
                edition, and deletion of users is carried out through a single
                form.
              </p>
            </div>
            <hr className="divider" />
            <ul className="mywork__options">
              <li className="mywork__option">
                <a
                  className="mywork__option-item"
                  href="https://ledicaco.github.io/UsersCRUD/" onClick={handleOpenExternalPage}
                >
                  Demo
                </a>
              </li>
              <li className="mywork__option">
                <a
                  className="mywork__option-item"
                  href="https://github.com/LedicaCo/UsersCRUD" onClick={handleOpenExternalPage}
                >
                  Code
                </a>
              </li>
            </ul>
          </div>
          <div className="mywork__content">
            <img className="certificate__image" src="./RickAndMortyApp.png" alt="" />
            <hr className="divider" />
            <h2 className="work__title"> Rick and Morty App</h2>
            <div className="work__description">
              <p className="mywork__details">
              Rick And Morty App, this App has an integrated search engine that allows searches by different criteria and also does not allow the sending of erroneous data in the form to carry out said searches, this project is developed with HTML, CSS, Javascript, React and Axios
              </p>
            </div>
            <hr className="divider" />
            <ul className="mywork__options">
              <li className="mywork__option">
                <a
                  className="mywork__option-item"
                  href="https://ledicaco.github.io/RickAndMortyApp/" onClick={handleOpenExternalPage}
                >
                  Demo
                </a>
              </li>
              <li className="mywork__option">
                <a
                  className="mywork__option-item"
                  href="https://github.com/LedicaCo/RickAndMortyApp" onClick={handleOpenExternalPage}
                >
                  Code
                </a>
              </li>
            </ul>
          </div>
          <div className="mywork__content">
            <img className="certificate__image" src="./WeatherApp.png" alt="" />
            <hr className="divider" />
            <h2 className="work__title"> Weather App</h2>
            <div className="work__description">
              <p className="mywork__details">
              Project developed with HTML, CSS React.Js and Javascript, it is an application that gives us real-time information about the weather in the place where you are, called "Weather App", you can also check the weather status of any city in the world. world.
              </p>
            </div>
            <hr className="divider" />
            <ul className="mywork__options">
              <li className="mywork__option">
                <a
                  className="mywork__option-item"
                  href="https://nexocreative-mde.github.io/WeatherApp/" onClick={handleOpenExternalPage}
                >
                  Demo
                </a>
              </li>
              <li className="mywork__option">
                <a
                  className="mywork__option-item"
                  href="https://github.com/NexoCreative-MDE/WeatherApp" onClick={handleOpenExternalPage}
                >
                  Code
                </a>
              </li>
            </ul>
          </div>
          <div className="mywork__content">
            <img className="certificate__image" src="./FortuneCookies.png" alt="" />
            <hr className="divider" />
            <h2 className="work__title">Fortune Cookies App</h2>
            <div className="work__description">
              <p className="mywork__details">
              Hello everyone, I present to you my first project developed with HTML, CSS React.Js and Javascript, it is an application that allows us to try our luck with the Fortune Cookie, randomly delivering messages by changing its background.
              </p>
            </div>
            <hr className="divider" />
            <ul className="mywork__options">
              <li className="mywork__option">
                <a
                  className="mywork__option-item"
                  href="https://nexocreative-mde.github.io/fortuneCookies/" onClick={handleOpenExternalPage}
                >
                  Demo
                </a>
              </li>
              <li className="mywork__option">
                <a
                  className="mywork__option-item"
                  href="https://github.com/NexoCreative-MDE/fortuneCookies.git" onClick={handleOpenExternalPage}
                >
                  Code
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
