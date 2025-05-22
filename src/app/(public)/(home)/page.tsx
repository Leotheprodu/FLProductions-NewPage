import { ContactUsForm } from "./components/ContactUsForm";
import { BeatsSection } from "./components/BeatsSection";

export default function Home() {
  return (
    <>
      <section className="text-center py-20 px-6">
        <div>
          <h1 className="md:text-5xl text-3xl font-bold mb-4 md:w-1/2 w-full mx-auto">
            FLProductions, Estudio de Grabación y Producción Musical en Costa
            Rica
          </h1>
          <p className="text-gray-600 mb-6 md:w-1/2 w-full mx-auto">
            Bienvenidos a FLProductions, somos un estudio de Grabación y
            producción Musical de Costa Rica, con mas de 15 años de experiencia
          </p>
        </div>

        <ul className="text-left text-gray-600 max-w-2xl mx-auto mt-20">
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span>Realizamos grabaciones con
            equipos de alta calidad
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Ofrecemos Producción,
            Edición, Mezcla y Mastering Profesional
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Trabajamos la mayoría de
            géneros musicales
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Somos Músicos
            multidisciplinarios
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Somos expertos en el uso
            de Melodyne
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Ofrecemos asesoría en
            marketing y publicidad musical para impulsar tu carrera
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Contamos con un equipo de
            fotógrafos y de producción audiovisual de alto nivel
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Beats y producción
            musical originales y con los mejores estándares de calidad
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Asesoría y consultoría
            Musical
          </li>
        </ul>
      </section>
      <BeatsSection />
      <div className="flex flex-col md:flex-row items-center gap-5 bg-primario p-6">
        <section
          id="about"
          className="md:w-2/3 w-full text-white p-6 flex flex-col items-center rounded-lg"
          style={{
            backgroundImage: "url('/leo_estudio_dibujo.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-black/60 p-6 rounded-lg">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primario">
                Sobre FLProductions
              </h2>
              <p className="max-w-2xl">
                FLProductions es un estudio de grabación y producción musical
                ubicado en la Herediana de Siquirres, Limón, Costa Rica. Nos
                especializamos en ofrecer servicios de grabación, mezcla,
                mastering y producción musical de alta calidad. Comprometidos a
                ayudar a los artistas a alcanzar su máximo potencial. Trabajamos
                con una variedad de géneros musicales y estamos siempre
                dispuestos a explorar nuevas ideas y sonidos. En FLProductions,
                creemos que la música es una forma de arte poderosa y estamos
                aquí para ayudarte a contar tu historia a través de ella.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-6 text-primario">
                Sobre LeoTheProdu
              </h2>
              <p className="max-w-2xl">
                Soy Leo, un productor musical costarricense apasionado por la
                música y la producción. Con más de 15 años de experiencia en la
                industria, he trabajado con una variedad de artistas y géneros
                musicales. Mi enfoque es crear un sonido único y auténtico para
                cada proyecto. Mi objetivo es que cada artista se sienta cómodo
                y inspirado en el estudio, para que juntos podamos crear algo
                extraordinario. Estoy comprometido a ofrecer un servicio de alta
                calidad y a trabajar de cerca contigo en cada paso del proceso.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-col items-center justify-center w-full md:w-1/3"
        >
          <div className="w-full h-full mb-6 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2268.886137957426!2d-83.55804507982572!3d10.131148626326205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x572d591623657f53!2sFLProductions!5e0!3m2!1ses!2scr!4v1667294867121!5m2!1ses!2scr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>

          <ContactUsForm />
        </section>
      </div>
    </>
  );
}
