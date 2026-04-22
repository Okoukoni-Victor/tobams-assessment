import Image from "next/image";
import Link from "next/link";

export default function LearningManagementSystem() {
  return (
    <section className="mt-16 mb-5 lg:mb-16 p-6 lg:px-16 lg:py-12 bg-primary-10">
      <h2 className="lg:hidden pb-5 leading-[150%] text-xl md:text-2xl lg:text-[40px] font-semibold text-primary">
        Learning Management System
      </h2>

      <div className=" lg:flex items-center gap-x-16 rounded-lg">
        <div className="hidden lg:block flex-1">
          <Image
            src="/learning-management-system.webp"
            alt="learning management system"
            width={533.44}
            height={568}
            className="object-cover h-[568px] w-[556.88px] rounded-full"
          />
        </div>

        <div className="flex-1">
          <h2 className="hidden lg:block pb-5 leading-[150%] whitespace-nowrap text-2xl lg:text-[40px] font-semibold text-primary">
            Learning Management System
          </h2>

          <div className="lg:hidden flex justify-center pb-6">
            <Image
              src="/learning-management-system.webp"
              alt="learning management system"
              width={327}
              height={327}
              className="object-cover h-[327px] w-[327px] rounded-full"
            />
          </div>

          <div className="p-6 space-y-3 rounded-md bg-primary-10">
            <p className="text-sm md:text-base lg:text-lg">
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today's competitive tech
              landscape.
            </p>

            <h3
              id="courses-heading"
              className="leading-[150%] lg:text-lg font-bold text-primary"
            >
              Some of our courses include:
            </h3>

            <ul
              aria-labelledby="courses-heading"
              className="flex flex-col lg:flex-row lg:justify-between lg:flex-wrap gap-3 ps-6 leading-[150%] text-sm lg:text-base list-disc"
            >
              <li className="">Business Analysis</li>
              <li className="">Design Thinking</li>
              <li className="">Effective Communication</li>
              <li className="">Entrepreneurship</li>
              <li className="">Career Development</li>
              <li className="">Business Model</li>
            </ul>

            <Link
              href="#"
              className="md:hidden inline-flex justify-center items-center gap-2 mt-5 px-6 py-[10.5px] rounded text-sm font-semibold text-white bg-primary"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-rotate-45"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                focusable="false"
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

          <Link
            href="#"
            className="hidden md:inline-flex justify-center items-center gap-2 mt-5 px-6 py-[10.5px] rounded text-sm lg:text-lg font-semibold text-white bg-primary"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-rotate-45"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
              focusable="false"
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
    </section>
  );
}
