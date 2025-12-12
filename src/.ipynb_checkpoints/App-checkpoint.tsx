import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Proteins } from './components/Proteins';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const isContact = activeTab === 'contact';

  return (
    <div
      className={[
        'min-h-screen flex flex-col',
        isContact
          ? 'bg-transparent'
          : 'bg-gradient-to-br from-slate-50 via-white to-blue-50',
      ].join(' ')}
    >
      {/* Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* GLOBAL BACKGROUND VIDEO — ONLY FOR CONTACT */}
      {isContact && (
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source 
                src={`${import.meta.env.BASE_URL}/assets/movie_proteins_cropped.mp4`} 
                type="video/mp4"
                />
          </video>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>
      )}

      {/* Hero only on About */}
      {activeTab === 'about' && <Hero setActiveTab={setActiveTab} />}

      {/* Main content */}
      <main
        className="
          flex-1 max-w-[960px] mx-auto px-5 py-7 pb-12 w-full
          [&_p]:text-justify
          [&_li]:text-justify
          [&_p]:[hyphens:auto]
          [&_li]:[hyphens:auto]
          [&_h1]:text-left
          [&_h2]:text-left
          [&_h3]:text-left
          [&_h4]:text-left
          [&_h5]:text-left
          [&_h6]:text-left
        "
      >
        {activeTab === 'about' && <About setActiveTab={setActiveTab} />}
        {activeTab === 'publications' && <Publications />}
        {activeTab === 'proteins' && <Proteins />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
