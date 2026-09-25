import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const navItems = [
    { href: '#hero', label: t('nav.home') }, { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') }, { href: '#projects', label: t('nav.projects') },
    { href: '#education', label: t('nav.education') }, { href: '#contact', label: t('nav.contact') },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);

      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        if (y >= top && y < bottom) setActiveSection(section.id);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector<HTMLElement>(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">AD<span className="dot">.</span></div>

      {/* Desktop links */}
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {navItems.map(item => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`nav-link${activeSection === item.href.slice(1) ? ' active' : ''}`}
              onClick={e => { e.preventDefault(); handleNavClick(item.href); }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="language-switcher" aria-label="Language">
        <button className={language === 'fr' ? 'active' : ''} onClick={() => setLanguage('fr')} aria-pressed={language === 'fr'}>FR</button>
        <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
      </div>

      {/* Burger mobile */}
      <button
        className={`nav-burger${menuOpen ? ' active' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label={t('nav.mobileMenu')}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>
  );
};

export default Navbar;
