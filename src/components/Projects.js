const Projects = () => {
  return (
    <section className="projects section" id="projects" data-testid="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project__list">
        <div className="project__container bd-container">
          <div>
            <h3>
              Formalization, Implementation, and Verification of the Bluetooth
              L2CAP State Machine
            </h3>
          </div>
          <p className="project__text">
            <u>Tan Khang Le</u>, Mohammad Omidvar Tehrani, Yuepeng Wang,
            Jianliang Wu, and Steven Y. Ko; in{" "}
            <i>
              Proceedings of the 31st Annual International Conference on Mobile
              Computing and Networking (MobiCom)
            </i>
            , Hong Kong, 2025. [
            <a
              className="external__link"
              href="https://summit.sfu.ca/item/39483"
            >
              thesis
            </a>
            ]
          </p>
        </div>
        <div className="project__container bd-container">
          <div>
            <h3>
              A Study of Vulnerability Repair in JavaScript Programs with Large
              Language Models
            </h3>
          </div>
          <p className="project__text">
            <u>Tan Khang Le</u>, Saba Alimadadi, and Steven Y. Ko; in{" "}
            <i>
              Companion Proceedings of the ACM Web Conference 2024 (WWW '24
              Companion)
            </i>
            , Singapore, 2024. [
            <a
              className="external__link"
              href="https://arxiv.org/abs/2403.13193"
            >
              paper
            </a>
            ]
          </p>
        </div>
        <div className="project__container bd-container">
          <div>
            <h3>
              Concolic Execution for Mid-level Intermediate Representation of
              Rust Programs
            </h3>
          </div>
          <p className="project__text">
            Mohammad Omidvar Tehrani, <u>Tan Khang Le</u>, Frédéric Tuong, Marco
            Gaboardi, and Steven Y. Ko; in{" "}
            <i>Fourth Rust Verification Workshop (RW2024)</i>, Luxembourg, 2024.
            [
            <a
              className="external__link"
              href="https://sites.google.com/view/rustverify2024"
            >
              link
            </a>
            ]
          </p>
        </div>
        <div className="project__container bd-container">
          <div>
            <h3>Machine Learning for Food Review and Recommendation</h3>
          </div>
          <p className="project__text">
            <u>Tan Khang Le</u> and Siu Cheung Hui; in{" "}
            <i>
              International Student Conference on Artificial Intelligence
              (STCAI)
            </i>
            , Singapore, 2021. [
            <a
              className="external__link"
              href="https://arxiv.org/abs/2201.10978"
            >
              paper
            </a>
            ] [
            <a
              className="external__link"
              href="https://github.com/tkhang1999/Solr-SBERT-semantic-search"
            >
              demo
            </a>
            ]
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
