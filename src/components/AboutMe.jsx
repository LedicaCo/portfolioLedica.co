const AboutMe = 
() => {
  return (
    <div className="about box4">
      <div className="aboutMe">
        <div className="about__header ">
          <span className="about__title ">
            <b>ABOUT ME/</b>
            <a className="link__about--title" href="#home">
              HOME
            </a>
          </span>
        </div>
        <div className="about_section1 container ">
          <div className="image__about ">
            <img className="myphoto " src="/myphoto-unbackground.png" alt="" />
            <div className="about__profile">
            <h4 className="name">Leonardo Diaz Castrillon</h4>
            <span className="title">Full Stack Web Developer</span>
            </div>
          </div>
          <div className="about__text">
            <h2 className="aboutme__section"><span className="aboutme__icon"><img className="icon__sobre" src="/sobre.png" alt="" /></span> ABOUT ME </h2>
            <p  className="about__paragraf">Hola mi nombre es Leonardo Diaz Castrillon, soy un desarrollador Full Stack (Jr) apasionado por crear experiencias web asombrosas. Con sólidos conocimientos en HTML, CSS, JavaScript y TypeScript puedo construir interfaces interactivas y atractivas para los usuarios. Además, tengo experiencia en el desarrollo de aplicaciones web utilizando tecnologías modernas como React, Axios y Redux.</p><br />
            
            <p  className="about__paragraf">Soy un entusiasta del trabajo en equipo y siempre estoy dispuesto a aprender y crecer como desarrollador. Me encanta enfrentar nuevos desafíos y buscar soluciones creativas a los problemas. También tengo experiencia utilizando Git para el control de versiones y colaboración en proyectos.</p><br />
            
            <p  className="about__paragraf">Mi objetivo principal es contribuir al desarrollo de aplicaciones web eficientes y de alta calidad. Me apasiona mantenerme actualizado con las últimas tendencias y tecnologías en el mundo del desarrollo web. Estoy emocionado por formar parte de un equipo dinámico donde pueda aplicar mis habilidades y aprender de profesionales experimentados.</p><br />
            
            <p  className="about__paragraf">Si estás buscando a alguien motivado, adaptable y con habilidades en TypeScript, estaré encantado de ser parte de tu equipo y contribuir al éxito de tus proyectos. ¡Estoy ansioso por sumergirme en nuevos desafíos y llevar las ideas a la vida!</p><br />            
          </div>
        </div>
        <div className="about_-section2"></div>
      </div>
    </div>
  );
};

export default AboutMe;
