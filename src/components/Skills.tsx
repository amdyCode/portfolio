import { useReveal, useSkillBar } from '../hooks/useReveal';
import { techCategories, skillCategories } from '../data/portfolio';
import type { SkillCategory, SkillItem, TechCategory } from '../data/portfolio';
import DynIcon from './DynIcon';
import { useLanguage } from '../context/LanguageContext';

// ─── Tech pill (Mon Atelier) ───────────────────────────────
const TechCatCard: React.FC<{ cat: TechCategory }> = ({ cat }) => {
  const { language } = useLanguage();
  const { ref, visible } = useReveal();
  const label = language === 'en' && cat.id === 'tools' ? 'Tools & DevOps' : cat.label;
  return (
    <div ref={ref} className={`tech-cat-card glass-card reveal${visible ? ' visible' : ''}`}>
      <div className="tech-cat-header">
        <span className="tech-cat-icon">
          <DynIcon name={cat.icon} size={18} color={cat.color} />
        </span>
        <h4>{label}</h4>
      </div>
      <div className="tech-pills">
        {cat.pills.map(pill => (
          <span key={pill.name} className="tech-pill">
            <span className="tpi-icon">
              <DynIcon name={pill.icon} size={14} color={pill.color} />
            </span>
            {pill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

// ─── Skill bar item ────────────────────────────────────────
const SkillBarItem: React.FC<{ item: SkillItem; triggered: boolean }> = ({ item, triggered }) => (
  <div className="skill-item">
    <div className="skill-info">
      <span>{item.name}</span>
      <span>{item.level}%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: triggered ? `${item.level}%` : '0%' }} />
    </div>
  </div>
);

// ─── Skill category card ───────────────────────────────────
const SkillCategoryCard: React.FC<{ cat: SkillCategory }> = ({ cat }) => {
  const { language } = useLanguage();
  const { ref: revealRef, visible } = useReveal();
  const { ref: barRef, triggered } = useSkillBar();
  const label = language === 'en' ? {
    frontend: 'Frontend', backend: 'Backend', database: 'Database', devops: 'Tools & DevOps', mobile: 'Mobile — Flutter & Dart',
  }[cat.id] : cat.label;

  return (
    <div
      ref={revealRef}
      className={`skill-category glass-card reveal${visible ? ' visible' : ''}${cat.fullWidth ? ' skill-mobile-full' : ''}`}
    >
      <div ref={barRef}>
        <div className="skill-cat-header">
          <span className="skill-cat-icon">
            <DynIcon name={cat.icon} size={22} color={cat.color} />
          </span>
          <h3>{label}</h3>
        </div>
        <div className={`skill-items${cat.twoColumns ? ' skill-items-mobile' : ''}`}>
          {cat.items.map(item => (
            <SkillBarItem key={item.name} item={item} triggered={triggered} />
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Skills section ────────────────────────────────────────
const Skills: React.FC = () => {
  const { t } = useLanguage();
  const { ref: header1Ref, visible: h1Visible } = useReveal();
  const { ref: header2Ref, visible: h2Visible } = useReveal();

  return (
    <section id="skills" className="section skills-section">
      {/* MON ATELIER */}
      <div className={`tech-grid-section reveal${h1Visible ? ' visible' : ''}`} ref={header1Ref}>
        <div className="section-header" style={{ marginBottom: 36 }}>
          <span className="section-tag">{t('skills.arsenal')}</span>
          <h2 className="section-title">{t('skills.workshop')}</h2>
        </div>
        <div className="tech-grid">
          {techCategories.map(cat => (
            <TechCatCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>

      {/* BARRES DE COMPÉTENCES */}
      <div
        ref={header2Ref}
        className={`section-header reveal${h2Visible ? ' visible' : ''}`}
        style={{ marginTop: 64, marginBottom: 36 }}
      >
        <span className="section-tag">{t('skills.level')}</span>
        <h2 className="section-title">{t('skills.title')}</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map(cat => (
          <SkillCategoryCard key={cat.id} cat={cat} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
