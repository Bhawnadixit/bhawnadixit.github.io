interface AboutProps {
  setActiveTab?: (tab: string) => void;
}

export function About({ setActiveTab }: AboutProps) {
  const handleAgpClick = () => {
    if (setActiveTab) {
      setActiveTab('publications');
      setTimeout(() => {
        document.getElementById('pub-agp')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  };

  const handleGradationsClick = () => {
    if (setActiveTab) {
      setActiveTab('publications');
      setTimeout(() => {
        document.getElementById('pub-gradations')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  };

  return (
    <section className="py-12">
      <div className="mb-2 inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full">
        <span className="uppercase tracking-[0.16em] text-[0.72rem] text-blue-600">About</span>
      </div>
      <h1 className="text-[clamp(1.9rem,3vw,2.5rem)] m-0 mb-4 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">
        Exploring protein dynamics and flexibility
      </h1>
      <p className="text-[1.05rem] text-slate-600 leading-[1.8] m-0 mb-6 max-w-4xl">
        I am a PhD graduate from Ghent University and Vrije Universiteit Brussel, Belgium, working at the interface of protein molecular modeling, structural bioinformatics, and biophysical prediction. My research combines molecular dynamics (MD) simulations, NMR ensembles, AlphaFold2 models, and large-scale normal mode analysis (NMA) to investigate how gradations in protein flexibility shape function and influence structural interpretation. 
        In parallel, I have a strong interest in applying artificial intelligence and deep learning methods to protein/drug design.
      </p>
      
      <div className="flex flex-wrap gap-2 my-6">
        <span className="text-[0.8rem] rounded-full px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
          Gradations in protein dynamics (AF–NMR–NMA)
        </span>
        <span className="text-[0.8rem] rounded-full px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
          α-1 acid glycoprotein (AGP) dynamics in cancer
        </span>
        <span className="text-[0.8rem] rounded-full px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
          Protein biophysical feature prediction
        </span>
        <span className="text-[0.8rem] rounded-full px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
          Molecular dynamics &amp; ensemble analysis
        </span>
      </div>
      
      <div className="flex flex-wrap gap-4 text-[0.88rem] text-slate-600 mt-4 pb-6 border-b border-slate-200">
        <a href="https://orcid.org/0000-0003-4718-4911" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 no-underline hover:text-blue-700 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .949.431.949.949 0 .525-.424.949-.949.949-.525 0-.949-.424-.949-.949 0-.518.424-.949.949-.949zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.078-1.472 4.078-3.722 0-2.016-1.313-3.722-3.925-3.722h-2.45z"/>
          </svg>
          ORCID
        </a>
        <a href="https://github.com/Bhawnadixit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 no-underline hover:text-blue-700 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a href="https://bio2byte.be/people/41" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 no-underline hover:text-blue-700 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          Bio2Byte Profile
        </a>
      </div>

      {/* Research Highlights */}
      <div className="mt-12 space-y-12">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg border border-blue-100">
          <img
            src="${import.meta.env.BASE_URL}assets/agp_dynamics_slide.gif"
            alt="Replicate molecular dynamics (MD) simulations of AGP"
            className="block w-full rounded-2xl shadow-md mb-6"
          />
          <h3 className="text-xl text-slate-800 mb-3">AGP Dynamics in Cancer</h3>
          <p className="text-[0.95rem] text-slate-600 leading-relaxed mb-4">
            This animation shows triplicate MD simulations of α-1 acid glycoprotein (AGP), an acute-phase immunomodulatory protein whose five N-glycans are absent in crystal structures due to their high flexibility. The simulations compare AGP (unglycosylated) and gly-AGP (fully glycosylated) across the cancer-associated mutant (R101W).
          </p>
          <button 
            onClick={handleAgpClick}
            className="mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Read Publication →
          </button>
        </div>

        <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-lg border border-slate-200">
          <img
            src="${import.meta.env.BASE_URL}assets/nma.gif"
            alt="Gradations in protein dynamics"
            className="block w-full rounded-2xl shadow-md mb-6"
          />
          <h3 className="text-xl text-slate-800 mb-3">Gradations in Protein Dynamics</h3>
          <p className="text-[0.95rem] text-slate-600 leading-relaxed mb-4">
            This research compares multiple measures of protein flexibility across large-scale datasets, linking computational predictions to experimental observations. We evaluated how AlphaFold2 pLDDT scores, NMR-derived RCI/S² metrics, MD-derived fluctuations, and Normal Mode Analysis (NMA)-computed Root-mean-square fluctuations (RMSF) relate to each other.
          </p>
          <button 
            onClick={handleGradationsClick}
            className="mt-2 px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-full hover:from-slate-700 hover:to-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Read Publication →
          </button>
        </div>
      </div>
    </section>
  );
}