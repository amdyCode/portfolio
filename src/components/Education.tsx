import { GraduationCap } from 'lucide-react';
import { educations } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../context/LanguageContext';

const EduCard: React.FC<{ deg: typeof educations[number] }> = ({ deg }) => {
  const { language } = useLanguage();
  const { ref, visible } = useReveal();
  const content = language === 'en' && deg.id === 'master'
    ? { degree: 'Master of Computer Science', description: 'Specialization in Software Architecture and Advanced Web Development. Graduated top of class.' }
    : language === 'en'
      ? { degree: 'Bachelor of Computer Science', description: 'Strong foundations in algorithms, networks, databases and software development.' }
      : { degree: deg.degree, description: deg.description };
  return (
    <div ref={ref} className={`edu-card glass-card reveal${visible ? ' visible' : ''}`}>
      <div className="edu-icon">
        <GraduationCap size={32} color="#38bdf8" />
      </div>
      <div className="edu-info">
        <h3>{content.degree}</h3>
        <span className="edu-school">{deg.school}</span>
        <span className="edu-year">{deg.period}</span>
        <p>{content.description}</p>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const { t } = useLanguage();
  const { ref: headerRef, visible: headerVisible } = useReveal();
  return (
    <section id="education" className="section education-section">
      <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
        <span className="section-tag">{t('education.tag')}</span>
        <h2 className="section-title">{t('education.title')}</h2>
      </div>
      <div className="education-grid">
        {educations.map(edu => (
          <EduCard key={edu.id} deg={edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
