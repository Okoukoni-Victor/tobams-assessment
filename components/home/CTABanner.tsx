import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-6 md:py-12 px-6 lg:px-[90px] bg-white">
      <div className="flex flex-col items-center gap-8 rounded-lg py-8 px-6 lg:px-16 text-center text-white bg-primary">
        <p className="tracking-[3%] text-base lg:text-xl font-semibold">
          Want to accelerate professional growth and development at your
          organisation?
          <br /> See how we can help.
        </p>

        <Link
          className="inline-flex justify-center items-center py-3 px-6 rounded-sm border border-primary leading-[150%] lg:leading-[120%] tracking-[3%] lg:tracking-[0%] text-sm lg:text-lg font-semibold text-primary bg-white"
          href="#"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
