<template>
  <div class="card">
    <div class="card-visual">
      <!-- Diseño para TRAIN AI -->
      <div v-if="project.title === 'TRAIN AI'" class="train-ai-visual">
        <canvas :id="'canvas-' + project.title.replace(/\s+/g, '-')"></canvas>
      </div>
      <!-- Diseño para Chatbot con IA -->
      <div v-else-if="project.title === 'Chatbot conectado con IA'" class="chatbot-ia-visual">
        <canvas :id="'canvas-' + project.title.replace(/\s+/g, '-')"></canvas>
      </div>
       <!-- Diseño para API Peliculas -->
      <div v-else-if="project.title === 'Conexión con API Peliculas'" class="api-peliculas-visual">
         <canvas :id="'canvas-' + project.title.replace(/\s+/g, '-')"></canvas>
      </div>
      <!-- Diseño para API Random User -->
      <div v-else class="random-user-visual">
        <div v-for="i in 50" :key="i" class="digit">
          {{ Math.round(Math.random()) }}
        </div>
        <div class="user-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="card__content">
      <p class="card__title">{{ project.title }}</p>
      <p class="card__description">{{ project.description }}</p>
      <a :href="project.url" target="_blank" class="download-btn">
        Abrir Proyecto
      </a>
      <p class="subcard-tittle">Tecnologias Usadas</p>
      <div class="logos-proyectos-container">
        <div v-for="tech in project.technologies" :key="tech.name" v-html="tech.svg" class="logos-proyectos"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, defineProps, nextTick } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

onMounted(() => {
  nextTick(() => {
    const canvasId = 'canvas-' + props.project.title.replace(/\s+/g, '-');
    const canvas = document.getElementById(canvasId);

    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      if (props.project.title === 'TRAIN AI') {
        let squatPos = 0;
        
        function drawFullRobot() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.strokeStyle = '#00ff99';
          ctx.fillStyle = '#00ff99';
          ctx.shadowColor = '#00ff99';
          ctx.shadowBlur = 15;
          ctx.lineWidth = 2;

          const squatOffset = Math.sin(squatPos) * 15;
          const centerX = canvas.width / 2;
          const startY = canvas.height / 2 - 40;

          // Barbell
          const barbellY = startY + 10 + squatOffset;
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(centerX - 60, barbellY);
          ctx.lineTo(centerX + 60, barbellY);
          ctx.stroke();

          // Weights
          ctx.lineWidth = 1;
          ctx.fillRect(centerX - 70, barbellY - 15, 10, 30);
          ctx.fillRect(centerX + 60, barbellY - 15, 10, 30);
          ctx.fillRect(centerX - 85, barbellY - 10, 15, 20);
          ctx.fillRect(centerX + 70, barbellY - 10, 15, 20);

          // Head
          ctx.strokeRect(centerX - 15, startY - 20 + squatOffset, 30, 20);
          ctx.fillRect(centerX - 5, startY - 15 + squatOffset, 10, 5); // Eyes

          // Body
          ctx.beginPath();
          ctx.moveTo(centerX, startY + squatOffset);
          ctx.lineTo(centerX, startY + 40 + squatOffset);
          ctx.stroke();
          
          // Arms
          ctx.beginPath();
          ctx.moveTo(centerX, startY + 10 + squatOffset);
          ctx.lineTo(centerX - 40, startY - 5 + squatOffset);
          ctx.lineTo(centerX - 40, barbellY);
          
          ctx.moveTo(centerX, startY + 10 + squatOffset);
          ctx.lineTo(centerX + 40, startY - 5 + squatOffset);
          ctx.lineTo(centerX + 40, barbellY);
          ctx.stroke();

          // Legs
          ctx.beginPath();
          ctx.moveTo(centerX, startY + 40 + squatOffset);
          ctx.lineTo(centerX - 20, startY + 70 + squatOffset/2); // Thigh
          ctx.lineTo(centerX - 20, startY + 90 + squatOffset/4); // Calf
          
          ctx.moveTo(centerX, startY + 40 + squatOffset);
          ctx.lineTo(centerX + 20, startY + 70 + squatOffset/2); // Thigh
          ctx.lineTo(centerX + 20, startY + 90 + squatOffset/4); // Calf
          ctx.stroke();
        }

        function animateFullRobot() {
          squatPos += 0.05;
          drawFullRobot();
          requestAnimationFrame(animateFullRobot);
        }
        animateFullRobot();

      } else if (props.project.title === 'Chatbot conectado con IA') {
        let particles = [];
        const numParticles = 70;
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.random() * 0.5 - 0.25,
            vy: Math.random() * 0.5 - 0.25,
            radius: Math.random() * 1.5 + 1,
          });
        }
        function animateChatbot() {
          requestAnimationFrame(animateChatbot);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 255, 153, 0.7)';
            ctx.fill();
          });
          ctx.beginPath();
          for (let i = 0; i < particles.length; i++) {
            for (let j = i; j < particles.length; j++) {
              const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
              if (dist < 100) {
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
              }
            }
          }
          ctx.strokeStyle = 'rgba(0, 255, 153, 0.2)';
          ctx.stroke();
        }
        animateChatbot();
      } else if (props.project.title === 'Conexión con API Peliculas') {
        let stars = [];
        const numStars = 100;
        for (let i = 0; i < numStars; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.2 + 0.1
          });
        }
        function animateMovies() {
          requestAnimationFrame(animateMovies);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          stars.forEach(s => {
            s.y += s.speed;
            if (s.y > canvas.height) {
              s.y = 0;
              s.x = Math.random() * canvas.width;
            }
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 153, ${s.alpha})`;
            ctx.fill();
          });
        }
        animateMovies();
      }
    }
  });
});
</script>

<style scoped>
.card {
  background-color: #1a1a1a;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-bottom: 2rem;
  border: 1px solid #00ff99;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 255, 153, 0.3);
}

.card-visual {
  width: 100%;
  height: 180px;
  background: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

/* Diseños de Canvas */
.train-ai-visual, .chatbot-ia-visual, .api-peliculas-visual {
  width: 100%;
  height: 100%;
}

.train-ai-visual canvas, .chatbot-ia-visual canvas, .api-peliculas-visual canvas {
  width: 100%;
  height: 100%;
  display: block;
}


/* Diseño para Random User API */
.random-user-visual {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2px;
}
.digit {
  font-family: 'Courier New', Courier, monospace;
  font-size: 10px;
  color: rgba(0, 255, 153, 0.4);
  animation: flicker 2s infinite;
}
@keyframes flicker {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
.user-icon {
  position: absolute;
  width: 80px;
  height: 80px;
  color: #00ff99;
  filter: drop-shadow(0 0 15px #00ff99);
  animation: pulse 2s infinite ease-in-out;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}


.card__content {
  padding: 1.5rem;
  text-align: center;
}

.card__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00ff99;
  margin-bottom: 1rem;
}

.card__description {
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 1.5rem;
}

.download-btn {
  background: linear-gradient(45deg, #00ff99, #00b36b);
  color: #101010;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.download-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0, 255, 153, 0.5);
}

.subcard-tittle {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #00ff99;
}

.logos-proyectos-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.logos-proyectos {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
}

.logos-proyectos:deep(svg) {
  width: 100%;
  height: 100%;
}

.logos-proyectos:hover {
  transform: scale(1.2);
}
</style>
