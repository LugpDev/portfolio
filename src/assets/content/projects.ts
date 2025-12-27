import type { ImageMetadata } from 'astro';

import vasiImage from '@images/projects/vasi.png';
import pasariImage from '@images/projects/pasari.png';
import lugpdevImage from '@images/projects/lugpdev.png';
import nextflixImage from '@images/projects/nextflix.png';

export interface Project {
  title: string;
  image: ImageMetadata;
  description: {
    en: Description;
    es: Description;
  };
  techStack: string[];
  url: string;
}

type Description = {
  mainText: string;
  bullets: string[];
};

export const projects: Project[] = [
  {
    title: 'VASI',
    image: vasiImage,
    description: {
      en: {
        mainText:
          'I developed an educational quiz platform with AI that automatically generates questions and allows practicing different subjects interactively.',
        bullets: [
          'Complete authentication with NextAuth.js',
          'Automatic question generation using AI',
          'OCR with Tesseract.js',
          'Modular architecture with Server Actions',
          'Reusable components built with custom hooks',
          'Complete testing with Jest and Cypress',
        ],
      },
      es: {
        mainText:
          'Desarrollé una plataforma educativa de quizzes con IA que genera preguntas automáticamente y permite practicar distintas materias de forma interactiva.',
        bullets: [
          'Autenticación completa con NextAuth.js',
          'Generación automática de preguntas usando IA',
          'OCR con Tesseract.js',
          'Arquitectura modular con Server Actions',
          'Componentes reutilizables construidos con custom hooks',
          'Testing completo con Jest y Cypress',
        ],
      },
    },
    techStack: [
      'Nextjs',
      'TypeScript',
      'Prisma',
      'Tailwindcss',
      'Vercel AI SDK',
    ],
    url: 'https://vasi.vercel.app',
  },
  {
    title: 'Pasari RPI',
    image: pasariImage,
    description: {
      en: {
        mainText:
          'I developed the official website for the Pasari RPI team, with focus on multilingual content, performance and responsive design.',
        bullets: [
          'Complete internationalization (ES/EN) with dynamic routes',
          'Filtering system using query parameters',
          'Performance optimization with Astro Islands and static generation',
          'Reusable components with type safety in TypeScript',
          'Responsive and modular design with Tailwind CSS',
        ],
      },
      es: {
        mainText:
          'Desarrollé el sitio web oficial del equipo Pasari RPI, con enfoque en contenido multilingüe, rendimiento y diseño responsivo.',
        bullets: [
          'Internacionalización completa (ES/EN) con rutas dinámicas',
          'Sistema de filtrado utilizando query parameters',
          'Optimización de rendimiento con Astro Islands y generación estática',
          'Componentes reutilizables con type safety en TypeScript',
          'Diseño responsivo y modular con Tailwind CSS',
        ],
      },
    },
    techStack: ['Astro', 'React', 'Tailwindcss', 'TypeScript'],
    url: 'https://pasarirpi.com',
  },
  {
    title: 'Lugp.dev',
    image: lugpdevImage,
    description: {
      en: {
        mainText:
          'I developed a personal technical blog to share web development learnings, with search and content filtering system.',
        bullets: [
          'Content management in Markdown through Astro Content Collections',
          'Search system and filtering by categories',
          'Architecture based on reusable components',
          'CI/CD integration with GitHub Actions',
          'Unit testing with Vitest and end-to-end tests with Cypress',
        ],
      },
      es: {
        mainText:
          'Desarrollé un blog técnico personal para compartir aprendizajes de desarrollo web, con sistema de búsqueda y filtrado de contenido.',
        bullets: [
          'Gestión de contenido en Markdown mediante Astro Content Collections',
          'Sistema de búsqueda y filtrado por categorías',
          'Arquitectura basada en componentes reutilizables',
          'Integración de CI/CD con GitHub Actions',
          'Testing unitario con Vitest y pruebas end-to-end con Cypress',
        ],
      },
    },
    techStack: ['Astro', 'TypeScript', 'Tailwindcss', 'Cypress'],
    url: 'https://www.lugp.dev',
  },
  {
    title: 'Nextflix',
    image: nextflixImage,
    description: {
      en: {
        mainText:
          'I developed a functional Netflix clone focused on authentication, API consumption and streaming platform structure.',
        bullets: [
          'Authentication and protected routes with NextAuth.js and middleware',
          'Internationalization (ES/EN) with dynamic routes',
          'Integration with TMDB API for dynamic content',
          'Subscription system with multiple plans',
          'Form validation with Formik and Yup',
          'Interface built with Shadcn UI and Tailwind CSS',
        ],
      },
      es: {
        mainText:
          'Desarrollé un clon funcional de Netflix enfocado en autenticación, consumo de APIs y estructura de una plataforma de streaming',
        bullets: [
          'Autenticación y rutas protegidas con NextAuth.js y middleware',
          'Internacionalización (ES/EN) con rutas dinámicas',
          'Integración con TMDB API para contenido dinámico',
          'Sistema de suscripción con múltiples planes',
          'Validación de formularios con Formik y Yup',
          'Interfaz construida con Shadcn UI y Tailwind CSS',
        ],
      },
    },
    techStack: ['Nextjs', 'Prisma', 'Tailwind', 'Typescript'],
    url: 'https://nextflix-lugpdev.vercel.app/en/landing',
  },
];
