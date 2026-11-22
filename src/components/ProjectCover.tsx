import { getProjectImage } from '../data/projectCovers';

interface Props {
  projectId: string;
  title: string;
  size?: 'card' | 'modal';
}

const ProjectCover: React.FC<Props> = ({ projectId, title, size = 'card' }) => {
  const src = getProjectImage(projectId);
  return (
    <div className={`project-cover project-cover-${size}`}>
      <img className="project-cover-blur" src={src} alt="" aria-hidden="true" draggable={false} />
      <img className="project-cover-main" src={src} alt={title} loading="lazy" draggable={false} />
    </div>
  );
};

export default ProjectCover;
