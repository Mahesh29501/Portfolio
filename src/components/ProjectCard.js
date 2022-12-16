import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={10}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{objectFit : "cover", height: "210px"}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{marginTop:"0.75rem"}}>
          <a href={link}>Project Link</a>
          </div>
        </div>
      </div>
    </Col>
  )
}
