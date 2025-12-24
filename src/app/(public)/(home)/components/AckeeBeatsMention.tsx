"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { StarIcon } from "@/icons/StarIcon";
import { PianoIcon } from "@/icons/PianoIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const AckeeBeatsMention: React.FC = () => {
  return (
    <section
      id="ackee-beats"
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Ackee Beats"
          subtitle="Nuestra Tienda de Beats Online: Estilo exótico, Sonido Ackee."
          gradient={false}
          light={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content side */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Producción de{" "}
                <span className="text-orange-500 italic">Élite</span> para
                Artistas Exigentes
              </h3>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Descubre instrumentales únicos creados en{" "}
                <strong>FLProductions</strong>. Desde Trap y Reggaetón hasta
                Afrobeat y Pop,
                <strong> Ackee Beats</strong> es el destino número uno para tu
                próximo hit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-orange-600/20 text-orange-500 border border-orange-500/20">
                  <PianoIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">
                    Catálogo Exclusivo
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Instrumentales de alta calidad listos para grabar.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-orange-600/20 text-orange-500 border border-orange-500/20">
                  <StarIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">
                    Sonido de Vanguardia
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Producciones modernas que definen tendencias.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://www.ackeebeats.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] group"
              >
                Explorar Tienda de Beats
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Visual side - Dynamic Mockup/Card */}
          <div className="relative group animate-fade-in stagger-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <Card
              variant="glass-dark-strong"
              hover={false}
              className="relative aspect-video flex flex-col items-center justify-center border-orange-500/20 overflow-hidden"
            >
              {/* Decorative Ackee Pattern Placeholder */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="grid grid-cols-6 gap-4 p-4">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="text-orange-500 flex justify-center"
                    >
                      <PianoIcon className="w-12 h-12 rotate-45" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center z-10 px-8">
                <div className="w-24 h-24 mb-6 mx-auto rounded-3xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-2xl">
                  <PianoIcon className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  ACKEE BEATS
                </h4>
                <p className="text-orange-500 font-medium tracking-widest uppercase text-xs">
                  Premium Instrumental Store
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
