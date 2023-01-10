import { Link, useParams } from 'react-router-dom';
import { AiFillBackward } from 'react-icons/ai';
import projectsObj from '../../../assets/projectsObj';

function ProjectDetail() {
  const { title } = useParams();
  const project = projectsObj.find((project) => project.title === title);

  return (
    <div className="project_detail">
      <Link to="/"><AiFillBackward /></Link>
      <h1>{project.title}</h1>
      <img src={project.img} alt={project.title} />
    </div>

  );
}

export default ProjectDetail;
