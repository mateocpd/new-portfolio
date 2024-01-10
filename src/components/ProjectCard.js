import { Col } from "react-bootstrap";

export const ProjectCard = ({ tittle, description, imgUrl, projectUrl,projectCode }) => {
  return (
    <Col sm={1} md={12}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="/" />
        <div className="proj-txtx">
          <h4>{tittle}</h4>
          <span>{description}</span>
          <a target="_blank" href={projectUrl} rel="noreferrer">
            <button className="demo">
              <span>Demo</span>
            </button>
          </a>
          <a target="_blank" href={projectCode} rel="noreferrer">
            <button className="demo">
              <span>Code</span>
            </button>
          </a>
        </div>
      </div>
    </Col>
  );
};
