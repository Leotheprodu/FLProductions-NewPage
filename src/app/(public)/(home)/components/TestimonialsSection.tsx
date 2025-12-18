"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  projectType: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Rodríguez",
    role: "Artista de Reggaeton",
    text: "El mejor estudio de grabación en el que he trabajado. La calidad del sonido es increíble y Leo sabe exactamente cómo sacar lo mejor de cada artista. Totalmente profesional.",
    rating: 5,
    projectType: "Single - Reggaeton",
  },
  {
    name: "María Sánchez",
    role: "Cantautora",
    text: "FLProductions transformó completamente mi música. La atención al detalle en la mezcla y mastering es impresionante. Recomendado al 100%.",
    rating: 5,
    projectType: "EP - Pop/Balada",
  },
  {
    name: "DJ Tropical",
    role: "Productor Musical",
    text: "He comprado varios beats de Leo y siempre son de la más alta calidad. Originales, frescos y listos para trabajar. El mejor productor de la zona.",
    rating: 5,
    projectType: "Beats - Dancehall/Trap",
  },
  {
    name: "Banda Los Viajeros",
    role: "Banda Musical",
    text: "Grabamos nuestro primer álbum con FLProductions y superó todas nuestras expectativas. El equipo, la experiencia de Leo y el ambiente del estudio son de primer nivel.",
    rating: 5,
    projectType: "Álbum Completo - Rock",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeader
          title="Lo Que Dicen Nuestros Clientes"
          subtitle="La satisfacción de nuestros artistas es nuestra mayor recompensa"
          gradient={true}
          subtitleMaxWidth="max-w-5xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              variant="glass"
              hover={true}
              className={`animate-fade-in-up stagger-${(index % 4) + 1}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <div className="mt-2 inline-block">
                  <span className="text-xs bg-primary/10 text-primary-dark px-3 py-1 rounded-full font-medium">
                    {testimonial.projectType}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-4">
            ¿Listo para crear música de nivel profesional?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary to-primary-light text-dark font-bold px-8 py-4 rounded-xl hover-lift hover-glow transition-all"
          >
            Contáctanos Ahora
          </a>
        </div>
      </div>
    </section>
  );
};
