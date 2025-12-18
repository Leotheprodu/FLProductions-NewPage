"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StarIcon } from "@/components/ui/Icons";

interface Service {
  // ...
  image: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    image: "/recording_service_v2.png",
    title: "Grabación Profesional",
    description:
      "Grabaciones de alta calidad con equipos profesionales de última generación",
  },
  {
    image: "/mixing_service_v2.png",
    title: "Mezcla Profesional",
    description:
      "Mezcla y edición profesional para darle vida y balance perfecto a tu música",
  },
  {
    image: "/mastering_service_v2.png",
    title: "Mastering de Alto Nivel",
    description:
      "Mastering profesional que hace que tu música suene increíble en cualquier plataforma",
  },
  {
    image: "/production_service_v2.png",
    title: "Producción Musical",
    description:
      "Producción musical original adaptada a tu estilo y visión artística",
  },
  {
    image: "/beats_service_v2.png",
    title: "Beats Originales",
    description:
      "Beats y pistas instrumentales únicas con los mejores estándares de calidad",
  },
  {
    image: "/consultation_service_v2.png",
    title: "Consultoría Musical",
    description:
      "Asesoría experta para llevar tu proyecto musical al siguiente nivel",
  },
  {
    image: "/marketing_service_v2.png",
    title: "Marketing Musical",
    description:
      "Estrategias de marketing y publicidad para impulsar tu carrera artística",
  },
  {
    image: "/video_service_v2.png",
    title: "Foto & Video",
    description:
      "Producción audiovisual profesional y fotografía de alto nivel para tus proyectos",
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="section-padding bg-dark">
      <div className="container-custom">
        <SectionHeader
          title="Servicios Profesionales"
          subtitle="Todo lo que necesitas para llevar tu música al más alto nivel"
          gradient={true}
          light={true}
          subtitleMaxWidth="max-w-5xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              variant="glass-dark"
              hover={true}
              className={`overflow-hidden group animate-fade-in-up stagger-${
                (index % 6) + 1
              } p-0 flex flex-col`}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Special Highlight - Improved Contrast and Icons */}
        <div className="mt-20 text-center">
          <Card
            variant="glass-dark-strong"
            hover={false}
            className="max-w-6xl mx-auto border-primary/20 py-8 md:py-10 shadow-glow-primary"
          >
            <div className="flex items-center justify-center gap-8 flex-wrap px-6">
              <StarIcon className="text-primary w-10 h-10 hidden md:block" />
              <p className="text-2xl md:text-3xl font-bold gradient-text max-w-4xl leading-tight">
                Especialistas en Melodyne - Corrección y edición de afinación
                profesional
              </p>
              <StarIcon className="text-primary w-10 h-10 hidden md:block" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
