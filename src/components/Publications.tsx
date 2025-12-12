export function Publications() {
  const publications = {
    2025: [
      {
        id: 'thesis',
        href: 'https://www.ugent.be/ea/ibitech/en/about-us/biommeda-staff-1/phd/phd_bhawna_dixit-2025.pdf',
        image: '${import.meta.env.BASE_URL}assets/illustration-bhawnadixit.jpg',
        title: 'Investigating protein flexibility using molecular dynamics simulations of α-1 acid glycoprotein and large-scale normal mode analysis of AlphaFold models',
        venue: 'PhD thesis, Ghent University & Vrije Universiteit Brussel, 2025',
      },
      {
        id: 'pub-gradations',
        href: 'https://doi.org/10.1016/j.jmb.2024.168900',
        image: `${import.meta.env.BASE_URL}assets/gradations_pub.jpg`,
        title: 'Gradations in protein dynamics captured by experimental NMR are not well represented by AlphaFold2 models and other computational metrics',
        venue: 'Journal of Molecular Biology 437(2):168900, 2025',
        links: [
          { text: 'AF-NMR-NMA resource', href: 'https://bio2byte.be/af_nmr_nma/' },
        ],
      },
    ],
    2024: [
      {
        id: 'pub-agp',
        href: 'https://doi.org/10.1002/prot.26607',
        image: `${import.meta.env.BASE_URL}assets/agp.png`,
        title: 'Conformational dynamics of α-1 acid glycoprotein (AGP) in cancer: A comparative study of glycosylated and unglycosylated AGP',
        venue: 'PROTEINS: Structure, Function, and Bioinformatics 92(2):246–264, 2024',
      },
    ],
    2022: [
      {
        id: 'challenges',
        href: 'https://www.frontiersin.org/journals/molecular-biosciences/articles/10.3389/fmolb.2022.959956/full',
        image: `${import.meta.env.BASE_URL}assets/challenges.png`,
        title: 'Challenges in describing the conformation and dynamics of proteins with ambiguous behavior',
        venue: 'Frontiers in Molecular Biosciences, 2022',
      },
    ],
    2021: [
      {
        id: 'b2btools',
        href: 'https://doi.org/10.1093/nar/gkab425',
        image: `${import.meta.env.BASE_URL}assets/b2btools.jpeg`,
        title: 'b2bTools: online predictions for protein biophysical features and their conservation',
        venue: 'Nucleic Acids Research 49(W1):W52–W59, 2021',
        links: [
          { text: 'b2bTools web server', href: 'https://bio2byte.be/b2btools/' },
        ],
      },
      {
        id: 'backbone',
        href: 'https://biblio.ugent.be/publication/8718837',
        image: `${import.meta.env.BASE_URL}assets/Figure_1.png`,
        title: 'Backbone dynamics alignment of proteins : harnessing biophysical fingerprints in pairwise sequence alignment',
        venue: 'Ghent University, 2021',
      },
    ],
    2017: [
      {
        id: 'cmpf',
        href: 'https://bioinformaticsreview.com/20170929/a-review-on-the-effects-of-cmpf-binding-with-human-serum-albumin/',
        image: `${import.meta.env.BASE_URL}assets/hsa.png`,
        title: 'A review on the effects of CMPF binding with Human Serum Albumin',
        venue: 'Dixit, B. (2017). Bioinformatics Review, 3(9), 9–18.',
      },
    ],
  };

  return (
    <section className="py-12">
      <div className="mb-8 inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full">
        <span className="uppercase tracking-[0.16em] text-[0.72rem] text-blue-600">Publications</span>
      </div>
      <h2 className="text-[clamp(1.7rem,3vw,2.2rem)] m-0 mb-6 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">
        Research Work
      </h2>

      {Object.entries(publications).sort(([a], [b]) => Number(b) - Number(a)).map(([year, pubs]) => (
        <div key={year} className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-3xl text-blue-600">{year}</div>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-200 to-transparent" />
          </div>
          
          {/* Photo blog style masonry grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pubs.map((pub) => (
              <div
                key={pub.id}
                id={pub.id}
                className="group"
              >
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50">
                      <img
                        src={pub.image}
                        alt={pub.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-sm opacity-90">Click to view →</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 px-2">
                    <h3 className="text-[1.05rem] leading-snug text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>
                    <div className="text-[0.88rem] text-slate-500 italic">
                      {pub.venue}
                    </div>
                  </div>
                </a>
                
                {pub.links && (
                  <div className="mt-3 px-2 flex flex-wrap gap-2">
                    {pub.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[0.85rem] no-underline hover:bg-blue-100 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {link.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}