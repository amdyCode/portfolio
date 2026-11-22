import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { projectDetails } from '../data/projectDetails';
import DynIcon from './DynIcon';
import ProjectCover from './ProjectCover';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const { language } = useLanguage();
  const en = language === 'en';
  const details = projectDetails[project.id];
  const points = details ? details[en ? 'en' : 'fr'] : [project.description];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const linkLabel = en
    ? (project.linkLabel === 'Voir le code' ? 'View code' : project.linkLabel === 'Voir sur le Play Store' ? 'View on Play Store' : project.linkLabel)
    : project.linkLabel;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card glass-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label={en ? 'Close' : 'Fermer'}>
          <X size={18} />
        </button>

        <h3 id="project-modal-title" className="modal-title">{project.title}</h3>

        <h4 className="modal-subtitle">{en ? 'Features' : 'Fonctionnalités'}</h4>
        <ul className="modal-list">
          {points.map(p => <li key={p}>{p}</li>)}
        </ul>

        <ProjectCover projectId={project.id} title={project.title} size="modal" />

        <h4 className="modal-subtitle">Stack</h4>
        <div className="project-tags-icons">
          {project.techs.map(tech => (
            <span key={tech.name} className="tech-pill-icon">
              <span className="tpi-icon"><DynIcon name={tech.icon} size={13} color={tech.color} /></span>
              {tech.name}
            </span>
          ))}
          {details?.stack
            .filter(s => !project.techs.some(t => t.name === s))
            .map(s => <span key={s} className="tech-pill-icon">{s}</span>)}
        </div>

        <a href={project.link} className="project-link-btn" target="_blank" rel="noopener noreferrer">
          {linkLabel} <ArrowUpRight size={14} />
        </a>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectModal;
