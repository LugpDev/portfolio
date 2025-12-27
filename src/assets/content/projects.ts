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
          'Web app with AI-generated quizzes for learning multiple subjects.',
        bullets: [],
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
          'Official website for Pasari, a student Formula SAE team. Features include team info, car designs, sponsors, results, filtering, multilingual support, and responsive design.',
        bullets: [],
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
          'Blog personal desarrollado con Astro y TypeScript para compartir aprendizajes sobre desarrollo web.',
        bullets: [],
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
        mainText: 'Netflix Clone built for educational purposes.',
        bullets: [],
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
