<template>
  <div class="main-container">
    <!-- Home Section -->
    <section id="home" class="home">
      <v-container class="h-100">
        <v-row align="center" justify="center" class="h-100">
          <v-col cols="12" md="5" class="text-center">
            <div class="img-container">
              <img class="img-content" src="@/img/FOTOPORTADA.JPG" alt="Foto-HugoCórdoba" />
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <div class="home-content-text">
              <h1 class="text-h1 font-weight-bold mb-4">Soy Hugo</h1>
              <h3 class="text-h3 font-weight-bold mb-4" style="color: #00ff99;">Desarrollador Full Stack</h3>
              <p class="text-h5 mb-4">Bienvenido a mi portfolio, un espacio para mostrar mis proyectos y habilidades.</p>
              <p class="text-h6">Me apasiona crear soluciones innovadoras y eficientes. ¡Espero que disfrutes tu visita!</p>
              
              <v-btn
                variant="outlined"
                color="#00ff99"
                class="mt-6"
                href="/dummy-cv.pdf" 
                download
              >
                Descargar CV
                <v-icon right>mdi-download</v-icon>
              </v-btn>

              <ul class="social-icons">
                <li v-for="social in socialLinks" :key="social.name">
                  <a :href="social.url" :aria-label="social.name" class="link" target="_blank">
                    <v-icon :icon="social.icon"></v-icon>
                  </a>
                </li>
              </ul>
              <v-row justify="center" class="mt-8" style="gap: 1rem;">
                <v-btn
                  class="cta-button"
                  color="#00ff99"
                  size="x-large"
                  dark
                  @click="scrollToProjects"
                >
                  Ver Proyectos
                  <v-icon right>mdi-arrow-down</v-icon>
                </v-btn>
                <v-btn
                  class="cta-button"
                  color="#00ff99"
                  size="x-large"
                  dark
                  @click="scrollToConocimientos"
                >
                  Ver Conocimientos
                  <v-icon right>mdi-arrow-down</v-icon>
                </v-btn>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Proyectos Section -->
    <section id="proyectos">
      <v-container class="py-10">
        <h1 class="text-h2 font-weight-bold text-center mb-12" style="color: #00ff99; text-shadow: 0 0 15px rgba(0, 255, 153, 0.7);">Mis Proyectos</h1>
        <v-row justify="center">
          <v-col v-for="project in projects" :key="project.title" cols="12" sm="8" md="6" lg="4">
            <Card :project="project" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Conocimientos Section -->
    <section id="conocimientos">
      <Skills />
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from '@/components/Card.vue';
import Skills from '@/components/Skills.vue';
import trainAiImg from '@/img/TRAINAI.png';
import chatbotImg from '@/img/CHATBOT.png';
import apiPeliculaImg from '@/img/API PELICULA.png';

const socialLinks = ref([
  { name: 'WhatsApp', icon: 'mdi-whatsapp', url: 'https://wa.me/34682130451' },
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/hugo-c%C3%B3rdoba-574a19256/' },
  { name: 'Gmail', icon: 'mdi-email', url: 'mailto:hugocor0609@gmail.com' },
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com/hugooocc?tab=repositories' }
]);

const projects = ref([
  {
    title: 'TRAIN AI',
    description: 'Aplicación de gestión de datos vinculada a una BDD para un gimnasio, permitiendo crear y gestionar rutinas de entrenamiento.',
    image: trainAiImg,
    url: 'https://trainai.dam.inspedralbes.cat/',
    technologies: [
        { name: 'Vuetify', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#1697f6" d="M65.3 34.414 40.84 76.79 64 116.926l30.672-53.13 30.66-53.128H79Zm0 0"/><path fill="#aeddff" d="m33.34 63.797 1.605 2.793 22.88-39.649 9.402-16.273H2.668Zm0 0"/><path fill="#1867c0" d="M79 10.668C90.594 48.82 64 116.926 64 116.926L40.84 76.789Zm0 0"/><path fill="#7bc6ff" d="M67.227 10.668c-48.844 0-32.282 55.922-32.282 55.922Zm0 0"/></svg>` },
        { name: 'Docker', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"/><path fill="#00AADA" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"/><path fill="#28B8EB" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"/><path fill="#028BB8" d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"/><path fill="#019BC6" d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#D4EEF1" d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"/><path fill="#BFDBE0" d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"/><path fill="#D4EEF1" d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"/></svg>` },
        { name: 'Node.js', svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"><path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path></svg>` },
        { name: 'Git', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/></svg>` },
        { name: 'JavaScript', svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>` }
    ]
  },
  {
    title: 'Chatbot conectado con IA',
    description: 'Creador de rutinas automáticas conectado con la IA de Google (Gemini). Incluye un CRUD para modificar las opciones del chatbot.',
    image: chatbotImg,
    url: 'http://fitsplus-plans.dam.inspedralbes.cat/index.html',
    technologies: [
        { name: 'HTML', svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 48 48"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path></svg>` },
        { name: 'CSS', svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path></svg>` },
        { name: 'Bootstrap', svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"><path fill="#7c4dff" d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"></path><path fill="#fff" d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"></path></svg>` },
        { name: 'JavaScript', svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>` },
        { name: 'Node.js', svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"><path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path></svg>` }
    ]
  },
  {
    title: 'Conexión con API Peliculas',
    description: 'Buscador de películas funcional conectado a una API para obtener información y pósteres de películas en tiempo real.',
    image: apiPeliculaImg,
    url: 'http://buscadorpelishugo.dam.inspedralbes.cat/',
    technologies: [
        { name: 'HTML', svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 48 48"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path></svg>` },
        { name: 'CSS', svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path></svg>` },
        { name: 'JavaScript', svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>` }
    ]
  }
]);

const scrollToProjects = () => {
  const projectsSection = document.getElementById('proyectos');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToConocimientos = () => {
  const conocimientosSection = document.getElementById('conocimientos');
  if (conocimientosSection) {
    conocimientosSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.main-container {
  background: #101010;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

.home, #proyectos, #conocimientos {
  background: linear-gradient(-45deg, #000000, #1c1c1c, #000000, #1c1c1c);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.img-content {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 7px solid #00ff99;
  box-shadow: 0 0 30px rgba(0, 255, 153, 0.7);
  transition: all 0.4s ease-in-out;
}

.img-content:hover {
  transform: scale(1.05) rotate(5deg);
  box-shadow: 0 0 50px rgba(0, 255, 153, 1);
}

.home-content-text {
  /* padding-left: 2rem; */ /* This was removed to make the layout more compact */
}

.social-icons {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
}

.social-icons .link {
  color: #fff;
  font-size: 2rem;
  transition: all 0.3s ease;
}

.social-icons .link:hover {
  color: #00ff99;
  transform: translateY(-5px);
}

@keyframes pulse-glow {
  0% {
    transform: scale(1);
    box-shadow: 0 0 15px rgba(0, 255, 153, 0.4);
  }
  50% {
    transform: scale(1.03);
    box-shadow: 0 0 25px rgba(0, 255, 153, 0.7);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 15px rgba(0, 255, 153, 0.4);
  }
}

.cta-button {
  box-shadow: 0 0 15px rgba(0, 255, 153, 0.4);
  animation: pulse-glow 2.5s infinite ease-in-out;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 35px rgba(0, 255, 153, 1);
  animation-play-state: paused; /* Pause the pulse on hover for a more stable glow */
}
</style>

