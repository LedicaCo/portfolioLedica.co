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
            <img className="myphoto " src="./myphoto-unbackground.png" alt="" />
            <div className="about__profile">
            <h4 className="name">Leonardo Diaz Castrillon</h4>
            <span className="title">Full Stack Web Developer</span>
            </div>
          </div>
          <div className="about__text">
            <h2 className="aboutme__section"><span className="aboutme__icon"><img className="icon__sobre" src="./sobre.png" alt="" /></span> ABOUT ME </h2>
            <p  className="about__paragraf">Hello my name is Leonardo Diaz Castrillon, I am a Full Stack (Jr) developer passionate about creating amazing web experiences. With solid knowledge in HTML, CSS, JavaScript and TypeScript I can build interactive and attractive interfaces for users. Also, I have experience developing web applications using modern technologies such as React, Axios and Redux</p><br />
            
            <p  className="about__paragraf">I am a teamwork enthusiast and always willing to learn and grow as a developer. I love facing new challenges and looking for creative solutions to problems. I also have experience using Git for version control and collaboration on projects.</p><br />
            
            <p  className="about__paragraf">My main objective is to contribute to the development of efficient and high-quality web applications. I am passionate about staying up to date with the latest trends and technologies in the world of web development. I am excited to be part of a dynamic team where I can apply my skills and learn from experienced professionals.</p><br />
            
            <p  className="about__paragraf">If you are looking for someone who is motivated, adaptable and with TypeScript skills, I would be happy to be part of your team and contribute to the success of your projects. I'm looking forward to diving into new challenges and bringing ideas to life!</p><br />            
          </div>
        </div>
        <div className="about_-section2"></div>
      </div>
    </div>
  );
};

export default AboutMe;
