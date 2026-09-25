import { MapPin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { ref: headerRef, visible: headerVisible } = useReveal();
  const { ref: imgRef, visible: imgVisible } = useReveal();
  const { ref: textRef, visible: textVisible } = useReveal();

  return (
    <section id="about" className="section about-section">
      <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
        <span className="section-tag">{t('about.tag')}</span>
        <h2 className="section-title">{t('about.title')}</h2>
      </div>

      <div className="about-grid">
        {/* Image */}
        <div ref={imgRef} className={`about-image-wrap reveal${imgVisible ? ' visible' : ''}`}>
          <div className="about-img-glass">
            <img src="/img.png" alt="" />
            <div className="img-decoration deco-1" />
            <div className="img-decoration deco-2" />
          </div>
          <div className="about-location glass-card">
            <MapPin size={16} color="#38bdf8" />
            {t('about.location')}
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className={`about-text reveal${textVisible ? ' visible' : ''}`}>
          <p className="about-lead">
            {t('about.lead')}
          </p>
          <p>
            {t('about.p1')}
          </p>
          <p>
            {t('about.p2')}
          </p>
          <div className="about-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              {t('hero.contact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
