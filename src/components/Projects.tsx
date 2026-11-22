import { useCallback, useState } from 'react';
import { Smartphone } from 'lucide-react';
import { projects } from '../data/portfolio';
import type { ProjectCategory, Project } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import DynIcon from './DynIcon';
import ProjectModal from './ProjectModal';
import ProjectCover from './ProjectCover';
import { useLanguage } from '../context/LanguageContext';


const englishDescription: Record<string, string> = {
  'cv-gen-frontend': 'Dynamic CV creation application.',
  'cv-gen-backend': 'Backend for the dynamic CV creation application.',
  'quran-app': 'Application to read the Quran, already deployed on the Play Store.',
  'chat-app': 'Modern real-time 1:1 messaging mobile app with Cloud Firestore sync, GetX state management, typing indicators, online presence, and read receipts.',
  'spotify-clone': 'Spotify mobile clone: home, search, library, full-screen player with queue, favorites and auto-scrolling lyrics.',
  'instagram-clone': 'Mobile app reproducing Instagram\'s key features, connected to a custom GraphQL API (feed, stories, profiles, follow).',
  'instagram-api': 'Modular, strongly typed GraphQL backend API (Apollo Server, Prisma, PostgreSQL) with JWT auth, feed, likes and comments.',
  'patient-portal': 'Mobile application for managing medical records, appointments and recommendations.',
  'printer-app': 'Hardware integration module for printing receipts on thermal Bluetooth printers.',
  'weather-magic': 'Asynchronous weather application with real-time forecasts and interactive mapping.',
  'chess-app': 'Interactive chess game with a custom rules engine and separated UI and business logic.',
};

const ProjectCard: React.FC<{ project: Project; visible: boolean; onOpen: () => void }> = ({ project, visible, onOpen }) => {
  const { language } = useLanguage();
  const en = language === 'en';
  return <div
    className={`project-card  project-card-clickable glass-card reveal${visible ? ' visible' : ''}`}
    data-category={project.category}
    role="button"
    tabIndex={0}
    onClick={onOpen}
    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(); } }}
  >
    
    <h3 className="project-title-lg">{project.title}</h3>
    <p className="project-desc-lead">{en ? (englishDescription[project.id] ?? project.description) : project.description}</p>
    <div className="project-tags-icons">
      {project.techs.map(tech => (
        <span key={tech.name} className="tech-pill-icon">
          <span className="tpi-icon">
            <DynIcon name={tech.icon} size={13} color={tech.color} />
          </span>
          {tech.name}
        </span>
      ))}
    </div>
    <ProjectCover projectId={project.id} title={project.title} />
  </div>;
};

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);
  const { ref: headerRef, visible: headerVisible } = useReveal();
  const { ref: filterRef, visible: filterVisible } = useReveal();

  const filtered = projects.filter(
    p => activeFilter === 'all' || p.category === activeFilter
  );
  const filters: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: t('projects.all') }, { value: 'web', label: t('projects.web') },
    { value: 'backend', label: t('projects.backend') }, { value: 'mobile', label: t('projects.mobile') },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
        <span className="section-tag">{t('projects.tag')}</span>
        <h2 className="section-title">{t('projects.title')}</h2>
      </div>

      {/* Filter buttons */}
      <div ref={filterRef} className={`projects-filter reveal${filterVisible ? ' visible' : ''}`}>
        {filters.map(f => (
          <button
            key={f.value}
            className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.value === 'mobile' && <Smartphone size={14} style={{ marginRight: 4 }} />}
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} visible={true} onOpen={() => setSelected(project)} />
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={closeModal} />}
    </section>
  );
};

export default Projects;
