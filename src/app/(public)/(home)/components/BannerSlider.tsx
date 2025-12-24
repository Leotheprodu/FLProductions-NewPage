"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

export interface mainBannerSlider {
  img_link: string;
  link?: string;
  title: string;
  description: string;
}
interface Props {
  datos: mainBannerSlider[];
}

export function BannerSlider({ datos }: Props) {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={10000}
        showStatus={false}
        showIndicators={true}
        emulateTouch={false}
        dynamicHeight={true}
        showThumbs={false}
        swipeable={false}
        transitionTime={1000}
      >
        {datos.map(({ img_link, link, title, description }) => (
          <div
            key={title}
            className="relative w-full h-[100vh] flex items-center justify-center text-center overflow-hidden"
            style={{
              background: `url(${img_link})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Gradient Overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

            {/* Content */}
            <div className="relative z-10 glass-dark p-8 md:p-12 rounded-3xl text-white max-w-[50rem] mx-4 border-2 border-primary/30 hover-glow animate-fade-in-up">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                {description}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
                <span className="glass px-4 py-2 rounded-full">
                  ✅ 15+ Años
                </span>
                <span className="glass px-4 py-2 rounded-full">
                  🎵 500+ Proyectos
                </span>
                <span className="glass px-4 py-2 rounded-full">
                  ⭐ Calidad Premium
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-primary to-primary-light text-dark font-bold px-8 py-4 rounded-xl hover-lift hover-glow transition-all text-lg"
                >
                  Contáctanos Ahora
                </a>
                {link && (
                  <Link
                    className="glass border-2 border-primary text-primary font-semibold px-8 py-4 rounded-xl hover:bg-primary hover:text-dark transition-all text-lg"
                    href={link}
                    target="_blank"
                  >
                    Más Información
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
