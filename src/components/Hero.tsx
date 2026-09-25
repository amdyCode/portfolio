import { useEffect, useState } from 'react';
import DynIcon from './DynIcon';
import { useLanguage } from '../context/LanguageContext';

const ROLES = ['Mobile', 'Fullstack'];

const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const [text, setText] = useState(ROLES[0]);
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [stats, setStats] = useState({ exp: 0, projects: 0, apps: 0 });

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 110);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 60);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIdx(i => (i + 1) % ROLES.length);
        }, 60);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIdx]);

  // Counter animation
  useEffect(() => {
    const targets = { exp: 2, projects: 5, apps: 1 };
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setStats({
        exp: Math.min(Math.floor((targets.exp / steps) * step), targets.exp),
        projects: Math.min(Math.floor((targets.projects / steps) * step), targets.projects),
        apps: Math.min(Math.floor((targets.apps / steps) * step), targets.apps),
      });
      if (step >= steps) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="section hero-section">
      {/* LEFT — content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          {t('hero.available')}
        </div>

        <h1 className="hero-title">
          <span className="hero-greeting">{t('hero.hello')}</span>
          <span className="hero-name">Amdy Diop</span>
          <span className="hero-role">
            {language === 'en' ? (
              <>
                <span id="typewriter">{text}</span>
                <span className="cursor-type">|</span>
                <span className="role-prefix"> {t('hero.developer')}</span>
              </>
            ) : (
              <>
                <span className="role-prefix">{t('hero.developer')} </span>
                <span id="typewriter">{text}</span>
                <span className="cursor-type">|</span>
              </>
            )}
          </span>
        </h1>

        <p className="hero-desc">
          {t('hero.description')}
        </p>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">{stats.exp}+</span>
            <span className="stat-label">{t('hero.years')}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">{stats.projects}+</span>
            <span className="stat-label">{t('hero.projects')}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">{stats.apps}</span>
            <span className="stat-label">{t('hero.apps')}</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            {t('hero.viewProjects')}
          </a>
          <a href="#contact" className="btn btn-secondary" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            {t('hero.contact')}
          </a>
        </div>

        <div className="hero-social">
          <a href="https://github.com/amdyCode/" target="_blank" className="social-link" title="GitHub" aria-label="GitHub"><DynIcon name="github" size={18} color="#FFFFFF" /></a>
          <a href="https://www.linkedin.com/in/amdy-diop-040504252/" target="_blank" className="social-link" title="LinkedIn" aria-label="LinkedIn"><DynIcon name="linkedin" size={18} color="#0A66C2" /></a>
        </div>
      </div>

      {/* RIGHT — avatar */}
      <div className="hero-visual">
        <div className="avatar-container">
          <div className="avatar-glow" />
          <div className="orbit orbit-1"><span className="orbit-dot dot-1" /></div>
          <div className="orbit orbit-2"><span className="orbit-dot dot-2" /></div>
          <img
            src="/img.png"
            className="avatar-img"
            onError={e => {
              (e.target as HTMLImageElement).src =
                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 280 280"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%231d4ed8"/><stop offset="100%" stop-color="%2306b6d4"/></linearGradient></defs><circle cx="140" cy="140" r="140" fill="url(%23g)"/><text x="140" y="168" text-anchor="middle" font-size="80" font-family="sans-serif" fill="rgba(255,255,255,0.9)">AM</text></svg>';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
