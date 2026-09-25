import { useEffect, useState } from 'react'
import { ArrowUp, Mail, MapPin, Send } from 'lucide-react'
import './App.css'
import About from './components/About'
import Education from './components/Education'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ParticlesCanvas from './components/ParticlesCanvas'
import Projects from './components/Projects'
import Skills from './components/Skills'
import DynIcon from './components/DynIcon'
import { LanguageProvider, useLanguage } from './context/LanguageContext'

function Portfolio() {
  const { t } = useLanguage()
  const [showScrollTop, setShowScrollTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="bg-gradient" />
      <ParticlesCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />

        <section id="contact" className="section contact-section">
          <div className="section-header">
            <span className="section-tag">{t('contact.tag')}</span>
            <h2 className="section-title">{t('contact.title')}</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-items">
                <div className="contact-item glass-card"><Mail className="contact-icon" /><div><small>{t('contact.email')}</small><a href="mailto:amdycode46@gmail.com">amdycode46@gmail.com</a></div></div>
                <div className="contact-item glass-card"><MapPin className="contact-icon" /><div><small>{t('contact.location')}</small><span>{t('about.location')}</span></div></div>
              </div>
              <div className="contact-social">
                <a className="social-link-lg" href="https://github.com/amdyCode/" target="_blank" aria-label="GitHub"><DynIcon name="github" size={16} color="#FFFFFF" /> GitHub</a>
                <a className="social-link-lg" href="https://www.linkedin.com/in/amdy-diop-040504252/" target="_blank" aria-label="LinkedIn"><DynIcon name="linkedin" size={16} color="#0A66C2" /> LinkedIn</a>
              </div>
            </div>
            <div className="contact-cta glass-card">
              <Mail className="contact-cta-icon" size={34} />
              <h3>{t('contact.available')}</h3>
              <p>{t('contact.description')}</p>
              <a
                className="btn btn-primary"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amdycode46@gmail.com&su=Projet%20de%20collaboration"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send size={16} /> {t('contact.send')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content"><div className="footer-logo">AD<span className="dot">.</span></div><p>{t('footer.role')}</p><p className="footer-copy">{t('footer.rights')}</p></div>
        <button className={`scroll-top${showScrollTop ? ' visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={t('footer.top')}><ArrowUp size={18} /></button>
      </footer>
    </>
  )
}

function App() {
  return <LanguageProvider><Portfolio /></LanguageProvider>
}

export default App
