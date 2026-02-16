<template>
  <div class="main-container">
    <Navbar />

    <!-- Home Section -->
    <HomeSection
      @scroll-to-projects="scrollToProjects"
      @scroll-to-skills="scrollToConocimientos"
    />

    <!-- Proyectos Section -->
    <section id="proyectos" class="reveal-section">
      <v-container class="py-10">
        <h1 class="text-h4 text-sm-h3 text-md-h2 font-weight-bold text-center mb-0" style="color: #00ff99; text-shadow: 0 0 15px rgba(0, 255, 153, 0.7);">Mis Proyectos</h1>
        
        <v-row justify="center" class="mt-n2">
          <v-col cols="12" md="10" lg="8" xl="6">
        <v-carousel
          hide-delimiter-background
          show-arrows="hover"
          height="600"
          class="project-carousel mx-auto"
          style="max-width: 580px;"
        >
              <template v-slot:prev="{ props }">
                <v-btn
                  variant="text"
                  @click="props.onClick"
                  class="carousel-nav-btn prev-btn"
                >
                  <v-icon size="40">mdi-chevron-left</v-icon>
                </v-btn>
              </template>
              <template v-slot:next="{ props }">
                <v-btn
                  variant="text"
                  @click="props.onClick"
                  class="carousel-nav-btn next-btn"
                >
                  <v-icon size="40">mdi-chevron-right</v-icon>
                </v-btn>
              </template>

              <v-carousel-item
                v-for="project in projects"
                :key="project.title"
                transition="carousel-3d"
                reverse-transition="carousel-3d-reverse"
                class="carousel-item-3d"
              >
                <div class="d-flex justify-center align-center h-100 py-4 px-4">
                  <div style="width: 100%; max-width: 450px;">
                    <Card :project="project" />
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>

      </v-container>
    </section>

    <!-- Conocimientos Section -->
    <section id="conocimientos" class="reveal-section">
      <Skills />
    </section>
  </div>
</template>

<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import Card from '@/components/Card.vue'
  import HomeSection from '@/components/HomeSection.vue'
  import Navbar from '@/components/Navbar.vue'
  import Skills from '@/components/Skills.vue'
  import { projects } from '@/data'

  function scrollToProjects () {
    const projectsSection = document.querySelector('#proyectos')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function scrollToConocimientos () {
    const conocimientosSection = document.querySelector('#conocimientos')
    if (conocimientosSection) {
      conocimientosSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Intersection Observer for Reveal on Scroll
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: 0.15
    })

    const sections = document.querySelectorAll('.reveal-section')
    sections.forEach(section => {
      observer.observe(section)
    })
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
</script>

<style scoped>
.main-container {
  background: #101010;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

#proyectos, #conocimientos {
  scroll-margin-top: 80px;
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

/* Reveal Animation */
.reveal-section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out;
}

.reveal-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Carousel Customization */
.project-carousel {
  overflow: visible; 
}

.carousel-nav-btn {
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.3); /* Slight background for better visibility */
  color: #00ff99;
  border-radius: 50%;
  display: flex !important;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 5px rgba(0, 255, 153, 0.5));
  transition: all 0.3s ease;
  z-index: 10;
}

.carousel-nav-btn:hover {
  background: rgba(0, 255, 153, 0.1);
  transform: scale(1.1);
  filter: drop-shadow(0 0 10px rgba(0, 255, 153, 0.8));
}

.carousel-item-3d {
  perspective: 1000px;
}

/* 3D Slide Transition - Forward */
.carousel-3d-enter-active,
.carousel-3d-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  position: absolute;
  width: 100%;
}

.carousel-3d-enter-from {
  transform: translateX(100%) rotateY(-20deg) scale(0.8);
  opacity: 0;
}

.carousel-3d-leave-to {
  transform: translateX(-100%) rotateY(20deg) scale(0.8);
  opacity: 0;
}

/* 3D Slide Transition - Reverse */
.carousel-3d-reverse-enter-active,
.carousel-3d-reverse-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  position: absolute;
  width: 100%;
}

.carousel-3d-reverse-enter-from {
  transform: translateX(-100%) rotateY(20deg) scale(0.8);
  opacity: 0;
}

.carousel-3d-reverse-leave-to {
  transform: translateX(100%) rotateY(-20deg) scale(0.8);
  opacity: 0;
}

</style>
