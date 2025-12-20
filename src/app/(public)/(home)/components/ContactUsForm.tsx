"use client";
import { FacebookIcon } from "@/icons/FacebookIcon";
import { WhatsappIcon } from "@/icons/WhatsappIcon";
import { YoutubeIcon } from "@/icons/YoutubeIcon";
import { whatsappNumber } from "@global/constants";
import { useState } from "react";

export const ContactUsForm = () => {
  const [sentForm, setSentForm] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSentForm(true);
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const message = formData.get("message");
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Soy ${name}, te contacto de Ackee Beats.%0A%0A${message}`;
    window.open(url, "_blank");
  };
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-2 gradient-text text-center">
        Contáctanos
      </h2>
      <p className="text-gray-600 text-center mb-8 text-sm md:text-base">
        Lleva tu música al siguiente nivel
      </p>

      <form id="contact" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Tu nombre"
            className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-primary focus:outline-none transition-all duration-300 hover:border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Mensaje sobre tu proyecto..."
            className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-primary focus:outline-none transition-all duration-300 hover:border-gray-300 resize-none"
            rows={4}
          ></textarea>
        </div>

        <button
          disabled={sentForm}
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-primary-light text-dark font-bold py-3 px-6 rounded-xl hover-lift hover-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg"
        >
          <div className="flex items-center justify-center gap-2">
            <WhatsappIcon className="w-5 h-5" />
            {sentForm ? "¡Enviado!" : "Enviar WhatsApp"}
          </div>
        </button>

        {/* Social Links */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.youtube.com/channel/UCAVKw7wP-yKPGSbCd1BJ7mw"
              target="_blank"
              className="hover-scale text-primary hover:text-primary-light transition"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/FLProductionscr"
              target="_blank"
              className="hover-scale text-primary hover:text-primary-light transition"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
              target="_blank"
              className="hover-scale text-primary hover:text-primary-light transition"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
