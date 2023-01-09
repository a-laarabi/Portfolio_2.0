/* eslint-disable */
import { Card } from 'react-bootstrap';

function Project(props) {
  return (
    <Card>
      <spam className="technologie" >{props.projectDetailSecond}</spam>
      <h3>{props.title}</h3>
      <p />
      <img src={props.img} alt={props.title} />
    </Card>
  );
}

export default Project;
