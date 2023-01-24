/* eslint-disable */
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Project(props) {
  return (
    <Col xs={12} md={6}>
    <Link to={`/details/${props.title}`}>
      <Card>
        <spam className="technologie" >{props.projectDetailSecond}</spam>
        <h3>{props.title}</h3>
        <p />
        <img src={props.img} alt={props.title} />
      </Card>
    </Link>
    </Col>
  );
}

export default Project;
