"use client";

import React from "react";

interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    number: "15",
    suffix: "+",
    label: "Años de Experiencia",
  },
  {
    number: "500",
    suffix: "+",
    label: "Proyectos Completados",
  },
  {
    number: "300",
    suffix: "+",
    label: "Artistas Satisfechos",
  },
  {
    number: "20",
    suffix: "+",
    label: "Géneros Musicales",
  },
];

const AnimatedCounter: React.FC<{
  target: number;
  duration?: number;
  delay?: number;
}> = ({ target, duration = 2000, delay = 0 }) => {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setHasStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  React.useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function for smoother finish
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * target);

      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return <span ref={elementRef}>{count}</span>;
};

export const StatsSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-dark via-dark-light to-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(0, 217, 255, 0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Nuestra Trayectoria
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Más de una década transformando ideas musicales en obras maestras
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center animate-fade-in-up stagger-${index + 1}`}
            >
              <div className="mb-4">
                <span className="text-5xl md:text-7xl font-bold gradient-text block">
                  <AnimatedCounter
                    target={parseInt(stat.number)}
                    delay={index * 200}
                  />
                  {stat.suffix && (
                    <span className="text-primary-light">{stat.suffix}</span>
                  )}
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-300 font-bold uppercase tracking-widest px-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 glass-dark px-10 py-5 rounded-full border border-primary/20 shadow-2xl">
            <span className="text-3xl">🏆</span>
            <p className="text-white text-lg font-bold tracking-tight">
              Estudio de Grabación Líder en la Zona Atlántica de Costa Rica
            </p>
            <span className="text-3xl">🏆</span>
          </div>
        </div>
      </div>
    </section>
  );
};
