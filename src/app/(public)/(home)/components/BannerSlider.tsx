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
            className=" w-full h-[100vh] flex items-center justify-center text-center bg-primario"
            style={{
              background: `url(${img_link})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" bg-black/60 p-6 rounded-lg text-white max-w-[40rem] backdrop-blur-md flex flex-col items-center">
              <h2 className="text-secundario mb-4">{title}</h2>
              <p className="text-amber-100">{description}</p>
              {link && (
                <div className="mt-4">
                  <Link
                    className=" text-black bg-secundario rounded-xs px-2 py-1 hover:bg-primario transition duration-150"
                    href={link}
                    target="_blank"
                  >
                    Mas información
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
