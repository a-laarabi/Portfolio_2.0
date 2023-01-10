/* eslint-disable */
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Project(props) {
  return (
    <Link to={`/details/${props.title}`}>
      <Card>
        <spam className="technologie" >{props.projectDetailSecond}</spam>
        <h3>{props.title}</h3>
        <p />
        <img src={props.img} alt={props.title} />
      </Card>
    </Link>
  );
}

export default Project;
