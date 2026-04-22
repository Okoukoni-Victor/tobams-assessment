import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <Image
        src="/hero.webp"
        alt="Training and Development"
        width={1440}
        height={598}
        className="object-cover w-full h-[395px] lg:h-[518px]"
        priority
      />

      <div className="absolute inset-0 bg-(--color-black-overlay)" />

      <div className="absolute inset-6 top-1 flex flex-col justify-center items-center gap-[30px] lg:gap-12 text-center">
        <div className="flex flex-col items-center gap-3">
          <span className="w-fit leading-[150%] px-12 py-3 rounded-full text-sm font-semibold bg-(--color-white-10) text-(--color-white)">
            WHAT WE DO
          </span>

          <h1 className="leading-[130%] text-2xl md:text-3xl lg:text-[56px] font-bold text-(--color-white)">
            Training and Development
          </h1>

          <p className="md:px-20 text-sm lg:text-lg font-semibold text-(--color-white)">
            Our comprehensive range of programs and resources is designed to
            enhance skills, broaden knowledge, and propel careers forward in
            today's ever-evolving landscape.
          </p>
        </div>

        <Link
          href="#"
          className="inline-flex justify-center items-center w-auto px-6 lg:px-8 py-3 lg:py-2 rounded text-sm lg:text-lg font-semibold bg-(--color-primary) text-(--color-white)"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
