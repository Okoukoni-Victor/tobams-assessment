import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#", hasChevron: true, isActive: true },
  { label: "What We Do", href: "#", hasChevron: true, isActive: false },
  { label: "Jobs", href: "#", hasChevron: true, isActive: false },
  { label: "Projects", href: "#", hasChevron: false, isActive: false },
  { label: "TG Academy", href: "#", hasChevron: false, isActive: false },
  {
    label: "Strategic Partnership",
    href: "#",
    hasChevron: false,
    isActive: false,
  },
  { label: "Pricing", href: "#", hasChevron: false, isActive: false },
  {
    label: "Book a Consultation",
    href: "#",
    hasChevron: false,
    isActive: false,
  },
];

export default function Navbar() {
  return (
    <header className="shadow-(--shadow-navbar) bg-(--color-white)">
      <div className="flex items-center justify-between w-full px-6 lg:px-16 border-b border-(--color-purple-10)">
        <Link href="/">
          <Image
            src="/tobams-logo.png"
            alt="Tobams Group logo"
            width={165}
            height={64}
            priority
          />
        </Link>

        <button
          type="button"
          className="lg:hidden inline-flex justify-center items-center"
          aria-label="Open navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.952 24.7147C3.90667 26.6667 7.048 26.6667 13.3333 26.6667C19.6187 26.6667 22.7613 26.6667 24.7133 24.7133C26.6667 22.7627 26.6667 19.6187 26.6667 13.3333C26.6667 7.048 26.6667 3.90533 24.7133 1.952C22.7627 0 19.6187 0 13.3333 0C7.048 0 3.90533 0 1.952 1.952C0 3.90667 0 7.048 0 13.3333C0 19.6187 0 22.7627 1.952 24.7147ZM22.3333 18.6667C22.3333 18.9319 22.228 19.1862 22.0404 19.3738C21.8529 19.5613 21.5985 19.6667 21.3333 19.6667H5.33333C5.06812 19.6667 4.81376 19.5613 4.62623 19.3738C4.43869 19.1862 4.33333 18.9319 4.33333 18.6667C4.33333 18.4014 4.43869 18.1471 4.62623 17.9596C4.81376 17.772 5.06812 17.6667 5.33333 17.6667H21.3333C21.5985 17.6667 21.8529 17.772 22.0404 17.9596C22.228 18.1471 22.3333 18.4014 22.3333 18.6667ZM21.3333 14.3333C21.5985 14.3333 21.8529 14.228 22.0404 14.0404C22.228 13.8529 22.3333 13.5985 22.3333 13.3333C22.3333 13.0681 22.228 12.8138 22.0404 12.6262C21.8529 12.4387 21.5985 12.3333 21.3333 12.3333H5.33333C5.06812 12.3333 4.81376 12.4387 4.62623 12.6262C4.43869 12.8138 4.33333 13.0681 4.33333 13.3333C4.33333 13.5985 4.43869 13.8529 4.62623 14.0404C4.81376 14.228 5.06812 14.3333 5.33333 14.3333H21.3333ZM22.3333 8C22.3333 8.26522 22.228 8.51957 22.0404 8.70711C21.8529 8.89464 21.5985 9 21.3333 9H5.33333C5.06812 9 4.81376 8.89464 4.62623 8.70711C4.43869 8.51957 4.33333 8.26522 4.33333 8C4.33333 7.73478 4.43869 7.48043 4.62623 7.29289C4.81376 7.10536 5.06812 7 5.33333 7H21.3333C21.5985 7 21.8529 7.10536 22.0404 7.29289C22.228 7.48043 22.3333 7.73478 22.3333 8Z"
              fill="#151515"
            />
          </svg>
        </button>

        <div className="hidden lg:flex items-center gap-6">
          <button
            type="button"
            className="inline-flex justify-between items-center  rounded border border-(--color-primary) px-4 py-2 whitespace-nowrap md:text-lg font-semibold bg-(--color-primary) text-(--color-white) cursor-pointer"
          >
            <span className="inline-flex justify-center items-center w-7 h-7 rounded-full me-3 bg-(--color-purple-10) text-(--color-primary)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M1 19V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H9C10.0609 13 11.0783 13.4214 11.8284 14.1716C12.5786 14.9217 13 15.9391 13 17V19M3 5C3 6.06087 3.42143 7.07828 4.17157 7.82843C4.92172 8.57857 5.93913 9 7 9C8.06087 9 9.07828 8.57857 9.82843 7.82843C10.5786 7.07828 11 6.06087 11 5C11 3.93913 10.5786 2.92172 9.82843 2.17157C9.07828 1.42143 8.06087 1 7 1C5.93913 1 4.92172 1.42143 4.17157 2.17157C3.42143 2.92172 3 3.93913 3 5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span>Account</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-90 ms-1"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>

          <Link
            href="#"
            className="inline-flex justify-center items-center rounded px-4 py-2 whitespace-nowrap md:text-lg font-semibold bg-(--color-secondary) text-(--color-white) cursor-pointer"
          >
            Take Assessment
          </Link>
        </div>
      </div>

      <nav
        className="hidden lg:flex justify-center items-center w-full px-16 py-5"
        aria-label="Main navigation"
      >
        <ul className="flex items-center space-x-4 xl:space-x-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`inline-flex items-center text-sm xl:text-lg
                  ${
                    link.isActive
                      ? "border-b border-(--color-primary) font-semibold text-(--color-primary)"
                      : "text-(--color-text-main) hover:text-(--color-primary)"
                  }`}
              >
                {link.label}
                {link.hasChevron && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-90 ms-1"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
