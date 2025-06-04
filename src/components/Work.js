import leapToolsImg from "../images/leap-tools.png";
import sfuImg from "../images/sfu.png";
import gsImg from "../images/goldman-sachs.png";
import paypalImg from "../images/paypal.png";
import noviscientImg from "../images/noviscient.png";
import ackcioImg from "../images/ackcio.png";

const Work = () => {
  return (
    <section className="work section" id="work" data-testid="work">
      <h2 className="section-title">Work Experience</h2>
      <div className="work__list bd-container">
        <div className="work__container">
          <div className="work__grid">
            <img
              className="work__img"
              src={leapToolsImg}
              alt="leap-tools-logo"
            />
            <p className="work__title">
              Software Developer @{" "}
              <a className="external__link" href="https://www.leaptools.com/">
                Leap Tools
              </a>{" "}
              <br />
              <i>Nov 2024 - June 2025</i>
            </p>
          </div>
          <p className="work__text">
            Developed Roomvo PRO, a CRM platform tailored for flooring
            professionals to boost sales, streamline interactions, and improve
            customer decisions.
            <br />
            <br />
            <i>Tech stack: Python, TypeScript, Django, React, Bazel</i>
          </p>
        </div>

        <div className="work__container">
          <div className="work__grid">
            <img className="work__img" src={sfuImg} alt="sfu-logo" />
            <p className="work__title">
              Research Assistant @{" "}
              <a className="external__link" href="https://www.sfu.ca/">
                SFU
              </a>{" "}
              <br />
              <i>Sep 2023 - June 2025</i>
            </p>
          </div>
          <p className="work__text">
            Conducted research on concolic/symbolic execution for Rust, formal
            verification of the L2CAP state machine in Bluetooth, and automated
            program repair using LLMs.
            <br />
            <br />
            <i>Tech stack: Rust, Dafny, C++, Linux</i>
          </p>
        </div>

        <div className="work__container ">
          <div className="work__grid">
            <img className="work__img" src={gsImg} alt="goldman-sachs-logo" />
            <p className="work__title">
              Software Engineer @{" "}
              <a
                className="external__link"
                href="https://www.goldmansachs.com/"
              >
                Goldman Sachs
              </a>{" "}
              <br />
              <i>Jul 2021 - Aug 2023</i>
            </p>
          </div>
          <p className="work__text">
            Developed full-stack web applications and microservices to
            streamline the post-trade lifecycle in the derivatives clearing
            business.
            <br />
            <br />
            <i>
              Tech stack: Java, TypeScript, Spring Boot, React, SQL, Kafka,
              Docker
            </i>
          </p>
        </div>

        <div className="work__container">
          <div className="work__grid">
            <img className="work__img" src={gsImg} alt="Goldman Sachs" />
            <p className="work__title">
              Summer Analyst @{" "}
              <a
                className="external__link"
                href="https://www.goldmansachs.com/"
              >
                Goldman Sachs
              </a>{" "}
              <br />
              <i>Jul 2020 - Aug 2020</i>
            </p>
          </div>
          <p className="work__text">
            Built a full-stack web dashboard for memory usage monitoring of
            multiple applications and concurrent processes running in the firm.
            <br />
            <br />
            <i>Tech stack: Java, TypeScript, Spring Boot, React, Kafka</i>
          </p>
        </div>

        <div className="work__container">
          <div className="work__grid">
            <img className="work__img" src={paypalImg} alt="paypal-logo" />
            <p className="work__title">
              Software Engineering Intern @{" "}
              <a className="external__link" href="https://www.paypal.com/">
                PayPal
              </a>{" "}
              <br />
              <i>Aug 2019 - Dec 2019</i>
            </p>
          </div>
          <p className="work__text">
            Developed multiple RESTful web services in the Compliance platform
            and built machine learning models to detect regulatory breaches.
            <br />
            <br />
            <i>Tech stack: Java, Python, Spring Boot, SQL</i>
          </p>
        </div>

        <div className="work__container">
          <div className="work__grid">
            <img
              className="work__img"
              src={noviscientImg}
              alt="noviscient-logo"
            />
            <p className="work__title">
              Junior Engineer @{" "}
              <a className="external__link" href="https://noviscient.com/">
                Noviscient
              </a>{" "}
              <br />
              <i>May 2019 - Aug 2019</i>
            </p>
          </div>
          <p className="work__text">
            Built a full-stack web application that gives investors and alpha
            partners access to portfolio creation and investment management
            tools.
            <br />
            <br />
            <i>Tech stack: Python, Django, jQuery, Docker</i>
          </p>
        </div>

        <div className="work__container">
          <div className="work__grid">
            <img className="work__img" src={ackcioImg} alt="ackcio-logo" />
            <p className="work__title">
              Intern Software Engineer @{" "}
              <a className="external__link" href="https://www.ackcio.com/">
                Ackcio
              </a>{" "}
              <br />
              <i>May 2018 - Aug 2018</i>
            </p>
          </div>
          <p className="work__text">
            Developed a multi-threaded software running on Raspberry Pi to
            concurrently read and transmit serial data for real-time
            construction monitoring. <br />
            <br />
            <i>Tech stack: Python, SQL, Linux</i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
