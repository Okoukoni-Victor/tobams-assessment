import Image from "next/image";

const features = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevelopmentProgram() {
  return (
    <section className="pb-12">
      <div className="flex flex-col lg:flex-row justify-between mx-6 lg:mx-16 mt-6 md:mt-16 p-4 md:p-10 rounded-[20px] bg-(--color-purple-80)">
        {/* Heading — mobile only */}
        <h2 className="lg:hidden mb-3 text-xl md:text-2xl font-medium text-white">
          Management Development Program
        </h2>

        <Image
          src="/management-development-program.webp"
          alt="Management development program session"
          width={556}
          height={600}
          className="object-cover lg:h-[690px] h-[232px] lg:w-[48%] rounded-[8px]"
        />

        <div className="lg:w-[48%] text-white">
          {/* Heading — desktop only */}
          <h2 className="hidden lg:block md:text-2xl lg:text-[40px] font-medium">
            Management Development Program
          </h2>

          <p className="mt-3 mb-6 text-sm md:text-lg">
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high-performing
            leaders they need to thrive.
            <br /> <br />
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership, strategic thinking, communication, and other essential
            managerial competencies for corporate organisations.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 p-3 rounded-[8px] leading-[150%] text-sm md:text-base lg:text-lg text-white bg-(--color-purple-40)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  aria-hidden={true}
                  focusable={false}
                >
                  <path
                    d="M8.11111 1.5V7.72222H13.4444L6.33333 17.5V11.2778H1L8.11111 1.5Z"
                    fill="#FFFFFF"
                    stroke="#FFFFFF"
                    strokeWidth="1.52381"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>

                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
