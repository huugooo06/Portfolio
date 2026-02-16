<template>
  <section id="home" class="home">
    <v-container class="h-100">
      <v-row align="center" class="h-100" justify="center">
        <v-col class="text-center" cols="12" md="5">
          <div class="img-container">
            <img alt="Foto-HugoCórdoba" class="img-content" src="@/img/FOTOPORTADA.JPG">
          </div>
        </v-col>
        <v-col class="text-center text-md-left" cols="12" md="5">
          <div class="home-content-text">
            <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-bold mb-4">Soy Hugo</h1>
            <h3 class="text-h6 text-sm-h5 text-md-h4 font-weight-bold mb-4" style="color: #00ff99;">Desarrollador Full Stack</h3>
            <p class="text-body-1 text-sm-h6 mb-4">Bienvenido a mi portfolio, un espacio para mostrar mis proyectos y habilidades.</p>
            <p class="text-caption text-sm-body-1">Me apasiona crear soluciones innovadoras y eficientes. ¡Espero que disfrutes tu visita!</p>

            <v-btn
              class="mt-6"
              color="#00ff99"
              download
              href="/dummy-cv.pdf"
              variant="outlined"
            >
              Descargar CV
              <v-icon right>mdi-download</v-icon>
            </v-btn>

            <ul class="social-icons">
              <li v-for="social in socialLinks" :key="social.name">
                <a :aria-label="social.name" class="link" :href="social.url" target="_blank">
                  <v-icon :icon="social.icon" />
                </a>
              </li>
            </ul>

          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
  import { defineEmits } from 'vue'
  import { socialLinks } from '@/data'

  defineEmits(['scroll-to-projects', 'scroll-to-skills'])
</script>

<style scoped>
.home {
  background: linear-gradient(-45deg, #000000, #1c1c1c, #000000, #1c1c1c);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.img-content {
  width: clamp(200px, 80vw, 300px);
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  border: 7px solid #00ff99;
  box-shadow: 0 0 30px rgba(0, 255, 153, 0.7);
  transition: all 0.4s ease-in-out;
}

.img-content:hover {
  transform: scale(1.05) rotate(5deg);
  box-shadow: 0 0 50px rgba(0, 255, 153, 1);
}

.social-icons {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
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
  0% { transform: scale(1); box-shadow: 0 0 15px rgba(0, 255, 153, 0.4); }
  50% { transform: scale(1.03); box-shadow: 0 0 25px rgba(0, 255, 153, 0.7); }
  100% { transform: scale(1); box-shadow: 0 0 15px rgba(0, 255, 153, 0.4); }
}

.cta-button {
  box-shadow: 0 0 15px rgba(0, 255, 153, 0.4);
  animation: pulse-glow 2.5s infinite ease-in-out;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 35px rgba(0, 255, 153, 1);
  animation-play-state: paused;
}
</style>
