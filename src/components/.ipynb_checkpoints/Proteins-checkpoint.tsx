import { useEffect, useRef, useState } from 'react';

type TimeStop = {
  time: number;
  label: string;
  sub: string;
  desc: string;
  image?: string;
};

type RulerTick = {
  time: number;
  isMajor: boolean;
  label: string;
};

export function Proteins() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [timeDisplay, setTimeDisplay] = useState('≈ 1.0 fs (1.0 × 10⁻¹⁵ s)');

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const minT = 1e-15;
    const maxT = 1e4;
    const logMin = Math.log10(minT);
    const logMax = Math.log10(maxT);

    function formatTime(tSeconds: number) {
      const fsVal = tSeconds / 1e-15;

      function fmt(val: number) {
        if (val === 0) return '0';
        const abs = Math.abs(val);
        if (abs >= 1e3 || abs < 1e-2) return val.toExponential(2);
        return abs >= 1 ? val.toFixed(2) : val.toPrecision(2);
      }

      let unit = 's';
      let val = tSeconds;

      if (tSeconds < 1e-12) { unit = 'fs'; val = tSeconds / 1e-15; }
      else if (tSeconds < 1e-9) { unit = 'ps'; val = tSeconds / 1e-12; }
      else if (tSeconds < 1e-6) { unit = 'ns'; val = tSeconds / 1e-9; }
      else if (tSeconds < 1e-3) { unit = 'µs'; val = tSeconds / 1e-6; }
      else if (tSeconds < 1) { unit = 'ms'; val = tSeconds / 1e-3; }
      else if (tSeconds < 60) { unit = 's'; val = tSeconds; }
      else if (tSeconds < 3600) { unit = 'min'; val = tSeconds / 60; }
      else { unit = 'h'; val = tSeconds / 3600; }

      const fsText = fmt(fsVal) + ' fs';
      const unitText = fmt(val) + ' ' + unit;

      return `≈ ${fsText} (${unitText})`;
    }

    function updateCounter() {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      const frac = maxScroll > 0 ? scroller.scrollLeft / maxScroll : 0;
      const actualMinTime = Math.min(...timeStops.map(s => s.time));
      const actualMaxTime = Math.max(...timeStops.map(s => s.time));
      const logT = logMin + frac * (logMax - logMin);
      const tSeconds = Math.pow(10, logT);
      setTimeDisplay(formatTime(tSeconds));
    }

    const handleWheel = (evt: WheelEvent) => {
      evt.preventDefault();
      scroller.scrollLeft += evt.deltaY * 1.1;
    };

    scroller.addEventListener('wheel', handleWheel, { passive: false });
    scroller.addEventListener('scroll', updateCounter);
    updateCounter();

    return () => {
      scroller.removeEventListener('wheel', handleWheel);
      scroller.removeEventListener('scroll', updateCounter);
    };
  }, []);

    

  // Log-scale position (0–100)
  const getPositionPercent = (timeInSeconds: number) => {
    const minT = 1e-15;
    const maxT = 1e4;
    const logMin = Math.log10(minT);
    const logMax = Math.log10(maxT);
    const logT = Math.log10(timeInSeconds);
    return ((logT - logMin) / (logMax - logMin)) * 100;
  };

  const timeStops: TimeStop[] = [
    {
      time: 5e-14,
      label: 'Bond vibrations',
      sub: '1 fs – 1 ps',
      desc: 'Fast stretching and bending of bonds and angles. These motions are typically averaged out in most experiments, but define the high-frequency limit of protein dynamics.',
      image: `${import.meta.env.BASE_URL}/assets/bond_stretching.gif`,
    },
    {
      time: 5e-11,
      label: 'Side-chain flickers',
      sub: '1 ps – 1 ns',
      desc: 'Local χ-angle rotations and backbone wobbles. They modulate local packing and show up in NMR order parameters and short MD trajectories.',
      image: `${import.meta.env.BASE_URL}/assets/bond_vibrations.gif`
    },
    {
      time: 5e-8,
      label: 'Loop breathing',
      sub: '1 ns – 1 μs',
      desc: 'Opening and closing of loops and turns, altering the exposure of binding pockets, glycosylation sites and epitopes.',
      image: `${import.meta.env.BASE_URL}/assets/dynamics_movie.gif`
    },
    {
      time: 5e-5,
      label: 'Secondary-structure shifts',
      sub: '1 μs – 1 ms',
      desc: 'Helix–coil transitions and β-structure rearrangements. These gradations are central to ambiguous or “fuzzy” protein regions.',
    },
    {
      time: 5e-2,
      label: 'Domain motions',
      sub: '1 ms – 1 s',
      desc: 'Hinge and shear motions between domains that often control allosteric regulation and long-range communication.',
      image: `${import.meta.env.BASE_URL}/assets/p_folding.gif`,
    },
    {
      time: 5e0,
      label: 'Conformational exchange',
      sub: '1 s – 100 s',
      desc: 'Exchange between long-lived conformers. Detected as line broadening and relaxation dispersion in NMR.',
    },
    {
      time: 3e1,
      label: 'Binding / unbinding',
      sub: '1 ms – 100 s',
      desc: 'Association and dissociation of ligands, glycans and partners. Kinetics here link conformational dynamics directly to affinity.',
      image: `${import.meta.env.BASE_URL}/assets/binding.gif`
    },
    {
      time: 5e2,
      label: 'Turnover & remodeling',
      sub: '100 s – 10,000 s',
      desc: 'Slow processes such as folding after synthesis, degradation, trafficking and large-scale remodeling within cells.',
    },
  ];

  const formatTickLabel = (timeInSeconds: number) => {
    if (timeInSeconds < 1e-12) {
      const fs = timeInSeconds / 1e-15;
      return fs === 1 ? '1 fs' : `${Math.round(fs)} fs`;
    }
    if (timeInSeconds < 1e-9) {
      const ps = timeInSeconds / 1e-12;
      return ps === 1 ? '1 ps' : `${Math.round(ps)} ps`;
    }
    if (timeInSeconds < 1e-6) {
      const ns = timeInSeconds / 1e-9;
      return ns === 1 ? '1 ns' : `${Math.round(ns)} ns`;
    }
    if (timeInSeconds < 1e-3) {
      const us = timeInSeconds / 1e-6;
      return us === 1 ? '1 µs' : `${Math.round(us)} µs`;
    }
    if (timeInSeconds < 1) {
      const ms = timeInSeconds / 1e-3;
      return ms === 1 ? '1 ms' : `${Math.round(ms)} ms`;
    }
    if (timeInSeconds < 60) {
      return timeInSeconds === 1 ? '1 s' : `${timeInSeconds} s`;
    }
    if (timeInSeconds < 3600) {
      return `${timeInSeconds / 60} min`;
    }
    return `${timeInSeconds / 3600} h`;
  };

  const rulerTicks: RulerTick[] = [
    1e-15, 1e-14, 1e-13,
    1e-12, 1e-11, 1e-10,
    1e-9, 1e-8, 1e-7,
    1e-6, 1e-5, 1e-4,
    1e-3, 1e-2, 1e-1,
    1, 10, 100, 1000, 10000,
  ].map((time) => ({
    time,
    isMajor: true,
    label: formatTickLabel(time),
  }));

  // Layout constants
  const TRACK_HEIGHT = 460;     // total height of the scroll strip
  const RULER_HEIGHT = 110;     // bottom area reserved for ruler + labels
  const ITEM_BASELINE = 140;    // how far above the bottom items should sit
  const ITEM_WIDTH = 340;       // "card width" without boxes

  return (
    <section className="py-12">
      <div className="mb-8 inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full">
        <span className="uppercase tracking-[0.16em] text-[0.72rem] text-blue-600">
          Protein Dynamics
        </span>
      </div>

      <h2 className="text-[clamp(1.7rem,3vw,2.2rem)] m-0 mb-4 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">
        Protein Time Scales
      </h2>

      <p className="text-[1.05rem] text-slate-600 leading-relaxed mb-8 max-w-4xl">
        Inspired by pixel-accurate solar system maps, this strip places protein motions
        along a single time axis, from femtosecond (fs) bond vibrations to hours-long
        conformational and functional changes. Scroll horizontally to move along the axis.
      </p>

      {/* Header row stays within your main column */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-blue-200">
        <div className="text-[0.85rem] text-slate-600">
          Time scale → from ultrafast vibrations to slow functional motions
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
          <span className="text-[0.85rem] text-slate-600">Current Position:</span>
          <span className="text-[0.9rem] text-blue-600">{timeDisplay}</span>
        </div>
      </div>

      {/* FULL-WIDTH SCROLLER (no boxes) */}
      <div
        ref={scrollerRef}
        className="relative w-screen overflow-x-auto overflow-y-hidden"
        style={{ marginRight: 'calc(40% - 60vw)', marginLeft: 'calc(40% - 60vw)' }}
      >
        <div
          className="relative min-w-[8000px] px-12"
          style={{ height: `${TRACK_HEIGHT}px` }}
        >
          {/* Items: all aligned to the same baseline above the ruler */}
          {timeStops.map((stop, idx) => {
            const leftPercent = getPositionPercent(stop.time);

            return (
              <div
                key={idx}
                className="absolute text-center"
                style={{
                  left: `${leftPercent}%`,
                  bottom: `${ITEM_BASELINE}px`,
                  width: `${ITEM_WIDTH}px`,
                  transform: 'translateX(-50%)',
                }}
              >
                {/* 🔹 VERTICAL CONNECTOR */}
                <div className="absolute left-1/2 bottom-[-80px] w-[2px] bg-blue-300/60" style={{ height: `${ITEM_BASELINE - 30}px`, transform: 'translateX(-50%)' }} />
                  
                <div className="text-blue-600 text-[1rem] mb-2">
                  {stop.label}
                </div>

                {stop.image && (
                  <img
                    src={stop.image}
                    alt={stop.label}
                    className="mx-auto mb-2 max-h-[200px]"
                  />
                )}

                <div className="text-[0.75rem] text-slate-500 mb-2">
                  {stop.sub}
                </div>

                <p className="text-[0.85rem] text-slate-600 leading-[1.6]">
                  {stop.desc}
                </p>
              </div>
            );
          })}

          {/* Ruler area fixed at the bottom of the strip */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: `${RULER_HEIGHT}px` }}
          >
            <div className="absolute top-1/2 left-0 right-0 w-[10px] h-[24px] bg-blue-600 mx-auto rounded-full bg-blue-300 rounded-full" />

            {rulerTicks.map((tick, idx) => {
              const leftPercent = getPositionPercent(tick.time);

              return (
                <div
                  key={idx}
                  className="absolute"
                  style={{
                    left: `${leftPercent}%`,
                    top: '30%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <div className="w-[2px] h-[18px] bg-blue-600 mx-auto rounded-full" />
                  <div className="mt-2 text-[0.7rem] text-blue-700 whitespace-nowrap">
                    {tick.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scrollbar styling (scoped via inline CSS selector) */}
      <style>{`
        .overflow-x-auto::-webkit-scrollbar { height: 14px; }
        .overflow-x-auto::-webkit-scrollbar-track { background: #e2e8f0; border-radius: 10px; }
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #dbeafe, white, #dbeafe);
          border: 2px solid #e2e8f0;
          border-radius: 10px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #bfdbfe, #f8fafc, #bfdbfe);
        }
      `}</style>

      <div className="text-[0.85rem] text-slate-500 mt-4 text-center">
        Scroll horizontally to traverse the axis. Values are positioned on a logarithmic scale
        to emphasize how protein motions span many orders of magnitude in time.
      </div>
    </section>
  );
}
