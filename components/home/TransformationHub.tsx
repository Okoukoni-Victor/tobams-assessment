import Image from "next/image";
import Link from "next/link";

const features = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    <section className="px-6 lg:px-16 py-10 lg:py-16 bg-(--color-white)">
      <div className="p-6 lg:p-10 rounded-2xl bg-(--color-secondary-20)">
        <p className="mb-2 text-sm lg:text-xl italic font-semibold text-(--color-pending)">
          Learning With Our CEO:
        </p>

        <h2 className="mb-4 lg:mb-6 leading-[130%] text-xl lg:text-[32px] italic font-semibold text-(--color-primary)">
          Transformation Hub With Jite Newton
        </h2>

        <p className="mb-6 lg:mb-10 text-sm md:text-base lg:text-lg">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you're seeking to advance your career or enhance your
          leadership skills, the Transformation Hub provides a transformative
          learning experience to unlock your full potential and drive success in
          your endeavours.
        </p>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[32px]">
          <Image
            src="/transformation-hub.webp"
            alt="Transformation Hub with Jite Newton"
            width={556}
            height={400}
            className="w-full lg:w-[45%] shrink-0 object-cover rounded-lg"
          />

          <div className="flex flex-col lg:flex-1 gap-6 rounded-lg p-5 lg:py-8 bg-(--color-white-30)">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-x-6">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-[10px] p-4 rounded-xl leading-[150%] text-sm lg:text-base bg-(--color-white)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="none"
                    aria-hidden={true}
                    focusable={false}
                  >
                    <path
                      d="M10.3333 1V9.16667H17.3333L8 22V13.8333H1L10.3333 1Z"
                      fill="#DDD0DA"
                      stroke="#571244"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="inline-flex items-center gap-2 w-fit px-6 py-[10.5px] rounded leading-[150%] text-sm lg:text-lg font-semibold text-(--color-white) bg-(--color-primary)"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-rotate-45"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden={true}
                focusable={false}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3528 4.91498C11.0599 4.62209 10.5851 4.62209 10.2922 4.91498C9.99929 5.20788 9.99929 5.68275 10.2922 5.97564L13.5644 9.24786H2.625C2.21079 9.24786 1.875 9.58365 1.875 9.99786C1.875 10.4121 2.21079 10.7479 2.625 10.7479H13.5643L10.2922 14.02C9.99929 14.3129 9.99929 14.7877 10.2922 15.0806C10.5851 15.3735 11.0599 15.3735 11.3528 15.0806L15.9053 10.5281C16.046 10.3875 16.125 10.1967 16.125 9.99781C16.125 9.7989 16.046 9.60813 15.9053 9.46748L11.3528 4.91498Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
