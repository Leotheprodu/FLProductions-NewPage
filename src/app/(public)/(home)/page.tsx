import { ContactUsForm } from "./components/ContactUsForm";
import { BeatsSection } from "./components/BeatsSection";
import { BannerSlider } from "./components/BannerSlider";
import { ServicesGrid } from "./components/ServicesGrid";
import { StatsSection } from "./components/StatsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { bannerSliderHomeData } from "@global/bannerSliderHomeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ExperienceIcon,
  EquipmentIcon,
  VersatilityIcon,
} from "@/components/ui/Icons";

export default function Home() {
  return (
    <>
      {/* Hero Section - Truly Full Width */}
      <BannerSlider datos={bannerSliderHomeData} />

      <div className="w-full">
        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              <span className="gradient-text">FLProductions</span> - Estudio de
              Grabación y Producción Musical en{" "}
              <span className="text-primary">Costa Rica</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Bienvenidos a FLProductions, el estudio líder de grabación y
              producción musical de Costa Rica. Con más de{" "}
              <span className="font-bold text-primary">
                15 años de experiencia
              </span>
              , transformamos tus ideas musicales en obras maestras
              profesionales.
            </p>

            {/* Why Choose Us */}
            <div className="mt-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-12">
                ¿Por Qué Somos Tu{" "}
                <span className="gradient-text">Mejor Opción</span>?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
                <div className="glass-light p-8 rounded-3xl hover-lift border-2 border-primary/10">
                  <div className="text-primary mb-6">
                    <ExperienceIcon className="w-16 h-16" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gray-900">
                    Experiencia Comprobada
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Más de 15 años perfeccionando el arte de la producción
                    musical con 500+ proyectos exitosos y artistas de renombre.
                  </p>
                </div>
                <div className="glass-light p-8 rounded-3xl hover-lift border-2 border-primary/10">
                  <div className="text-primary mb-6">
                    <EquipmentIcon className="w-16 h-16" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gray-900">
                    Equipos de Primer Nivel
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Tecnología profesional de última generación y acústica
                    tratada que garantiza una calidad sonora de nivel mundial.
                  </p>
                </div>
                <div className="glass-light p-8 rounded-3xl hover-lift border-2 border-primary/10">
                  <div className="text-primary mb-6">
                    <VersatilityIcon className="w-16 h-16" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gray-900">
                    Versatilidad Total
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Dominamos todos los géneros musicales, desde urbano hasta
                    rock, aplicando los mismos estándares de excelencia técnica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid />

        {/* Stats Section */}
        <StatsSection />

        {/* Portfolio/Music Section */}
        <section id="songs" className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeader
              title="Nuestro Portfolio"
              subtitle="Escucha algunos de los trabajos realizados en nuestro estudio"
              gradient={true}
              centered={true}
              subtitleMaxWidth="max-w-5xl"
            />
            <div className="mt-12">
              <BeatsSection />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* About & Contact Section - Improved Layout and Compactness */}
        <section className="bg-gray-50 py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
              {/* About Column */}
              <div
                id="about"
                className="lg:col-span-8 relative min-h-[500px] flex flex-col justify-center p-8 md:p-16 text-white"
                style={{
                  backgroundImage: "url('/leo_estudio_dibujo.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for depth and readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent"></div>

                <div className="relative z-10 max-w-5xl space-y-10">
                  <div className="glass-dark-strong p-8 md:p-12 rounded-[2rem] border border-white/10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                      Sobre FLProductions
                    </h2>
                    <p className="leading-relaxed text-gray-200 text-xl md:text-2xl font-medium">
                      FLProductions es el estudio de grabación y producción
                      musical líder en la zona Atlántica de Costa Rica.
                    </p>
                    <p className="leading-relaxed text-gray-300 mt-6 text-lg md:text-xl">
                      Ubicados en la Herediana de Siquirres, nos especializamos
                      en servicios de{" "}
                      <span className="text-primary font-bold">
                        grabación, mezcla, mastering y producción musical
                      </span>{" "}
                      con estándares internacionales.
                    </p>
                  </div>

                  <div className="glass-dark-strong p-8 md:p-12 rounded-[2rem] border border-white/10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                      LeoTheProdu
                    </h2>
                    <p className="leading-relaxed text-gray-200 text-xl md:text-2xl font-medium">
                      Con más de{" "}
                      <span className="text-primary font-extrabold">
                        15 años de trayectoria
                      </span>
                      , Leo aporta pasión técnica y artística a cada proyecto
                      para crear sonidos auténticos y potentes.
                    </p>
                    <p className="leading-relaxed text-gray-300 mt-6 text-lg md:text-xl">
                      Su compromiso es brindar un acompañamiento personalizado
                      en cada etapa del proceso creativo, asegurando que cada
                      artista encuentre su propia voz y alcance su máximo
                      potencial sonoro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Column */}
              <div
                id="contact"
                className="lg:col-span-4 bg-white flex flex-col pt-0"
              >
                {/* Map Section */}
                <div className="w-full h-64 grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2268.886137957426!2d-83.55804507982572!3d10.131148626326205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x572d591623657f53!2sFLProductions!5e0!3m2!1ses!2scr!4v1667294867121!5m2!1ses!2scr"
                    loading="lazy"
                    className="w-full h-full border-b"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Form Section */}
                <div className="p-8 md:p-10 flex flex-col justify-center flex-grow">
                  <ContactUsForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
