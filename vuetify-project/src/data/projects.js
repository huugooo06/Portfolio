
import apiPeliculaImg from '@/img/API PELICULA.png'
import chatbotImg from '@/img/CHATBOT.png'
import trainAiImg from '@/img/TRAINAI.png'
import axisImg from '@/img/axis-logo.png'
import betsImg from '@/img/bets-logo.png'
import fitaiImg from '@/img/fitai-logo.jpg'
import imaxisImg from '@/img/imaxis-logo.png'
import tr2Img from '@/img/tr2-logo.png'
import voiceImg from '@/img/voice-logo.png'

import {
  bootstrapSvg, cssSvg, dockerSvg, gitSvg, htmlSvg, jsSvg, nodeSvg,
  reactSvg, viteSvg, tailwindSvg, rabbitSvg, ollamaSvg, piniaSvg, electronSvg,
  mysqlSvg, mongoSvg, vueSvg, socketSvg
} from './svgs'

export const projects = [
  {
    title: 'Fit AI',
    description: 'Aplicación de gestión de datos vinculada a una BDD para un gimnasio, permitiendo crear y gestionar rutinas de entrenamiento.',
    image: trainAiImg,
    url: 'https://trainai.dam.inspedralbes.cat/',
    technologies: [
      { name: 'Vue.js', svg: vueSvg },
      { name: 'Docker', svg: dockerSvg },
      { name: 'Node.js', svg: nodeSvg },
      { name: 'Git', svg: gitSvg },
      { name: 'JavaScript', svg: jsSvg },
    ],
  },
  {
    title: 'Chatbot conectado con IA',
    description: 'Creador de rutinas automáticas conectado con la IA de Google (Gemini). Incluye un CRUD para modificar las opciones del chatbot.',
    image: chatbotImg,
    url: 'http://fitsplus-plans.dam.inspedralbes.cat/index.html',
    technologies: [
      { name: 'HTML', svg: htmlSvg },
      { name: 'CSS', svg: cssSvg },
      { name: 'Bootstrap', svg: bootstrapSvg },
      { name: 'JavaScript', svg: jsSvg },
      { name: 'Node.js', svg: nodeSvg },
    ],
  },
  {
    title: 'Conexión con API Peliculas',
    description: 'Buscador de películas funcional conectado a una API para obtener información y pósteres de películas en tiempo real.',
    image: apiPeliculaImg,
    url: 'http://buscadorpelishugo.dam.inspedralbes.cat/',
    technologies: [
      { name: 'HTML', svg: htmlSvg },
      { name: 'CSS', svg: cssSvg },
      { name: 'JavaScript', svg: jsSvg },
    ],
  },
  {
    title: 'Landing Page Axis',
    description: 'Página de aterrizaje corporativa para Axis.',
    image: axisImg,
    url: '/axis/',
    technologies: [
      { name: 'React', svg: reactSvg },
      { name: 'Tailwind', svg: tailwindSvg },
      { name: 'Vite', svg: viteSvg },
    ],
  },
  {
    title: 'TR2 Project',
    description: 'Proyecto avanzado con microservicios, RabbitMQ y Ollama.',
    image: tr2Img,
    url: '/tr2/',
    technologies: [
      { name: 'React', svg: reactSvg },
      { name: 'Node.js', svg: nodeSvg },
      // RabbitMQ removed as requested
      // Ollama removed (often paired with RabbitMQ in "bad" icons context)
      { name: 'Docker', svg: dockerSvg },
    ],
  },
  {
    title: 'Voice Controller',
    description: 'Control por voz para aplicaciones web.',
    image: voiceImg,
    url: '/voice/',
    technologies: [
      { name: 'Vue.js', svg: vueSvg },
      { name: 'Electron', svg: electronSvg },
    ],
  },
  {
    title: 'Córdoba Bets',
    description: 'Plataforma de apuestas deportivas.',
    image: betsImg,
    url: '/bets/',
    technologies: [
      { name: 'Vue.js', svg: vueSvg },
      { name: 'Node.js', svg: nodeSvg },
      { name: 'MongoDB', svg: mongoSvg },
      { name: 'Docker', svg: dockerSvg },
    ],
  },
]
