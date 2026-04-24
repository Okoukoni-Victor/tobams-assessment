import Link from "next/link";

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function TrainingTheConsultant() {
  return (
    <section className="mt-6 py-12 px-6 lg:px-16 bg-(--color-primary-10)">
      <div className="space-y-3 lg:space-y-5">
        <h2 className="leading-[130%] text-2xl lg:text-[40px]font-semibold text-primary">
          Training The Consultant
        </h2>

        <h3 className="leading-[150%] text-base lg:text-lg font-semibold text-primary">
          Maximise Your Potential as a Certified Trainer:
        </h3>

        <p className="text-sm lg:text-lg">
          With the help of our Business Analysis Training Consultants program,
          take a revolutionary step toward becoming a distinguished certified
          trainer. Learn from professionals in the field, immerse yourself in a
          thorough curriculum, and hone your training methods through
          interactive workshops. Participating in our program will enable you to
          gain expertise in Business Analysis while also developing the
          abilities to mentor and encourage others in their career advancement.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-6 mb-8 p-6 rounded-xl text-white bg-primary">
        {features.map((feature) => (
          <div key={feature.title}>
            <h4 className="pb-3 md:text-lg font-bold">{feature.title}</h4>

            <p className="text-sm md:text-base">{feature.description}</p>
          </div>
        ))}
      </div>

      <Link
        href="#"
        className="inline-flex justify-center items-center gap-2 w-fit px-6 py-[10.5px] rounded text-sm lg:text-lg font-semibold text-white bg-primary"
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
    </section>
  );
}
