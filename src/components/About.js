import aboutImg from "../images/about.png";

const About = () => {
  return (
    <section className="about section" id="about" data-testid="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-container bd-grid">
        <div className="about__img">
          <img src={aboutImg} alt="about" />
        </div>
        <div>
          <h2 className="about__subtitle">Hi there!</h2>
          <p className="about__text">
            My name is Khang Le and I'm currently working as a Software
            Development Engineer at Amazon Web Services (AWS), where I build
            scalable systems and solve complex engineering challenges.
            <br />
            <br />
            Previously, I earned my Master's from Simon Fraser University (SFU)
            and Bachelor's from Nanyang Technological University (NTU), both in
            Computer Science. When I'm not coding, I enjoy cooking, bouldering,
            and playing table tennis and badminton.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
