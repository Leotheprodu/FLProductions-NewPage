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
    <div>
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <form id="contact" onSubmit={handleSubmit} className="w-80 grid gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Nombre"
          className="border p-3 rounded"
        />
        <textarea
          name="message"
          required
          placeholder="Mensaje"
          className="border p-3 rounded"
          rows={5}
        ></textarea>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/channel/UCAVKw7wP-yKPGSbCd1BJ7mw"
              target="_blank"
            >
              <YoutubeIcon className="w-6 h-6 text-secundario  hover:cursor-pointer hover:text-secundario/50 transition" />
            </a>
            <a href="https://www.facebook.com/FLProductionscr" target="_blank">
              <FacebookIcon className="w-6 h-6 text-secundario  hover:cursor-pointer hover:text-secundario/50 transition" />
            </a>
          </div>
          <button
            disabled={sentForm}
            type="submit"
            className="bg-secundario py-2 px-4 rounded hover:bg-secundario/50 transition w-28 hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <div className="flex items-center gap-2">
              Enviar
              <WhatsappIcon className="w-6 h-6" />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};
