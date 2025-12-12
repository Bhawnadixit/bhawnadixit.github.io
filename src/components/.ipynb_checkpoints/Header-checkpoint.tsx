interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'publications', label: 'Publications' },
    { id: 'proteins', label: 'Proteins' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'about') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <div className="max-w-[960px] mx-auto px-5 py-3 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full relative overflow-hidden shadow-md" style={{
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8, #60a5fa)'
          }}>
            <div className="absolute inset-[3px] rounded-full bg-white" />
            <div className="relative z-[1] w-full h-full flex items-center justify-center text-[0.9rem] text-blue-600">
              BD
            </div>
          </div>
          <div>
            <div className="tracking-[0.02em] text-slate-800">Bhawna Dixit</div>
            <div className="text-[0.78rem] text-slate-500">
              Protein Dynamics · Structural Bioinformatics
            </div>
          </div>
        </div>
        
        <nav className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`rounded-full px-5 py-2 text-[0.88rem] transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                  : 'bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-transparent hover:border-blue-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}