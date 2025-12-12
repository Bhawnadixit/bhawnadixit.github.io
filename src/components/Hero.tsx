interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export function Hero({ setActiveTab }: HeroProps) {
  const handleAgpClick = () => {
    setActiveTab('publications');
    setTimeout(() => {
      document.getElementById('pub-agp')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const handleGradationsClick = () => {
    setActiveTab('publications');
    setTimeout(() => {
      document.getElementById('pub-gradations')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <section className="h-screen w-full relative overflow-hidden m-0 p-0 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/background.jpg)` }}
      />
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-slate-900/50" />
      
      <div className="absolute z-[1] text-center text-white px-4">
        {/* Personal photo circle */}
        <div className="mb-6 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm bg-white/10">
            <img 
              src={`${import.meta.env.BASE_URL}assets/personal_photo.jpg`} 
              alt="Bhawna Dixit"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="font-['Open_Sans',sans-serif] text-[clamp(2rem,4vw,3rem)] m-0 mb-[0.3rem] drop-shadow-lg">
          Bhawna Dixit, Ph.D.
        </h1>
        <h2 className="font-['Open_Sans',sans-serif] text-[clamp(1rem,4vw,2rem)] m-0 mb-[0.2rem] drop-shadow-lg"> (Biomedical Engineering and Bioengineering Sciences) </h2>
        <p className="font-['Open_Sans',sans-serif] m-0 text-base opacity-90 drop-shadow-md">
          Protein molecular modeling · NMR · AlphaFold · Dynamics · AI
        </p>
      </div>
    </section>
  );
}