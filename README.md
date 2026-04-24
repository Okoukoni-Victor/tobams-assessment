# Frontend Developer Intern Assessment – Tobams Group

## Overview

This project is a pixel-perfect implementation of the provided Figma design as part of the Frontend Developer Intern assessment for Tobams Group.

The goal of this task was to translate a UI design into a fully responsive, production-ready application using modern frontend tools while ensuring clean, maintainable code and accessibility best practices.

## Live Demo

🔗 Live URL: https://tobams-assessment-one.vercel.app/

## Repository

📁 GitHub: https://github.com/Okoukoni-Victor/tobams-assessment

## Figma Design

🎨 Design Source: https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0

---

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript

---

## Setup Instructions

To run this project locally:

1. Clone the repository:

```bash
git clone https://github.com/Okoukoni-Victor/tobams-assessment.git
```

2. Navigate into the project directory:

```bash
cd tobams-assessment
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit:

```
http://localhost:3000
```

---

## Key Features

- Pixel-perfect implementation of the Figma design
- Fully responsive layout across:
  - Mobile (425px)
  - Tablet (768px)
  - Desktop (1280px and above)

- Component-based architecture for reusability and scalability
- Semantic HTML structure for accessibility
- Keyboard-navigable UI elements
- Optimized images and fonts using Next.js features

---

## Component Structure

The application is structured into reusable components located in the `/components` directory. Each UI section is modularized to improve maintainability and readability.

---

## Design Decisions & Assumptions

- Tailwind CSS utility classes were used exclusively for styling to comply with the requirements (no external CSS frameworks or inline styles).
- Responsive behavior was implemented using Tailwind’s breakpoint system (`sm`, `md`, `lg`) without custom media queries.

---

## Accessibility

- Semantic HTML elements such as `<nav>`, `<main>`, `<section>`, and `<footer>` were used appropriately.
- All images include descriptive `alt` attributes.
- Interactive elements (buttons, links) are fully keyboard accessible and focusable.

---

## Code Quality

- No inline styles — all styling handled via Tailwind CSS
- Clean and consistent naming conventions
- No unused imports or dead code
- Organized file structure
- Meaningful commit history

---

## Deployment

The application is deployed on Vercel and is publicly accessible via the link above.

---

## Author

Victor Okoukoni
Frontend Developer
