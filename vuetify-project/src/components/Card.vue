<template>
  <div class="card">
    <div class="card-visual">
      <!-- Diseño para TRAIN AI -->
      <div v-if="project.title === 'TRAIN AI'" class="train-ai-visual">
        <canvas :id="'canvas-' + project.title.replace(/\s+/g, '-')" />
      </div>
      <!-- Diseño para Chatbot con IA -->
      <div v-else-if="project.title === 'Chatbot conectado con IA'" class="chatbot-ia-visual">
        <canvas :id="'canvas-' + project.title.replace(/\s+/g, '-')" />
      </div>
      <!-- Diseño para API Peliculas -->
      <div v-else-if="project.title === 'Conexión con API Peliculas'" class="api-peliculas-visual">
        <canvas :id="'canvas-' + project.title.replace(/\s+/g, '-')" />
      </div>
      <!-- Diseño para Imagen del Proyecto (Logos/Covers) -->
      <div v-else-if="project.image" class="image-visual">
        <img :src="project.image" :alt="project.title" class="project-image" />
      </div>
      <!-- Diseño para API Random User (Fallback) -->
      <div v-else class="random-user-visual">
        <div v-for="i in 50" :key="i" class="digit">
          {{ Math.round(Math.random()) }}
        </div>
        <div class="user-icon">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </div>
    </div>
    <div class="card__content">
      <p class="card__title">{{ project.title }}</p>
      <p class="card__description">{{ project.description }}</p>
      <a class="download-btn" :href="project.url" target="_blank">
        Abrir Proyecto
      </a>
      <p class="subcard-tittle">Tecnologias Usadas</p>
      <div class="logos-proyectos-container">
        <div v-for="tech in project.technologies" :key="tech.name" class="logos-proyectos" v-html="tech.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
    import { defineProps, onMounted, onUnmounted, ref } from 'vue'

  const props = defineProps({
    project: {
      type: Object,
      required: true,
    },
  })

  let animationFrameId
  let observer

  const initCanvas = () => {
    const canvasId = 'canvas-' + props.project.title.replace(/\s+/g, '-')
    const canvas = document.getElementById(canvasId)

    if (canvas && canvas.offsetWidth > 0) {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      
      const ctx = canvas.getContext('2d') // This might be null if 3D context is used on same canvas, but we use different divs
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      switch (props.project.title) {
        case 'TRAIN AI': {
          let squatPos = 0
          const drawFullRobot = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.strokeStyle = '#00ff99'
            ctx.fillStyle = '#00ff99'
            ctx.shadowColor = '#00ff99'
            ctx.shadowBlur = 15
            ctx.lineWidth = 2

            const squatOffset = Math.sin(squatPos) * 15
            const centerX = canvas.width / 2
            const startY = canvas.height / 2 - 30

            // Barbell
            const barbellY = startY + 10 + squatOffset
            ctx.lineWidth = 4
            ctx.beginPath()
            ctx.moveTo(centerX - 50, barbellY)
            ctx.lineTo(centerX + 50, barbellY)
            ctx.stroke()

            // Head
            ctx.strokeRect(centerX - 12, startY - 20 + squatOffset, 24, 18)
            
            // Body - Simplified for performance/clarity in small size
            ctx.beginPath()
            ctx.moveTo(centerX, startY + squatOffset)
            ctx.lineTo(centerX, startY + 35 + squatOffset)
            ctx.stroke()

            // Arms
            ctx.beginPath()
            ctx.moveTo(centerX, startY + 10 + squatOffset)
            ctx.lineTo(centerX - 35, startY - 5 + squatOffset) // Elbow
            ctx.lineTo(centerX - 35, barbellY) // hand
            ctx.moveTo(centerX, startY + 10 + squatOffset)
            ctx.lineTo(centerX + 35, startY - 5 + squatOffset)
            ctx.lineTo(centerX + 35, barbellY)
            ctx.stroke()

            // Legs
            ctx.beginPath()
            ctx.moveTo(centerX, startY + 35 + squatOffset)
            ctx.lineTo(centerX - 15, startY + 60 + squatOffset / 2)
            ctx.lineTo(centerX - 15, startY + 80 + squatOffset / 4)
            ctx.moveTo(centerX, startY + 35 + squatOffset)
            ctx.lineTo(centerX + 15, startY + 60 + squatOffset / 2)
            ctx.lineTo(centerX + 15, startY + 80 + squatOffset / 4)
            ctx.stroke()
          }
          const animate = () => {
            squatPos += 0.05
            drawFullRobot()
            animationFrameId = requestAnimationFrame(animate)
          }
          animate()
          break
        }
        case 'Chatbot conectado con IA': {
          const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.random() * 0.5 - 0.25,
            vy: Math.random() * 0.5 - 0.25,
            radius: Math.random() * 1.5 + 1,
          }))
          const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
              p.x += p.vx
              p.y += p.vy
              if (p.x < 0 || p.x > canvas.width) p.vx *= -1
              if (p.y < 0 || p.y > canvas.height) p.vy *= -1
              ctx.beginPath()
              ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
              ctx.fillStyle = 'rgba(0, 255, 153, 0.7)'
              ctx.fill()
            })
            // Draw connections
            ctx.beginPath()
            ctx.strokeStyle = 'rgba(0, 255, 153, 0.15)'
            for (let i = 0; i < particles.length; i++) {
              for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y)
                if (dist < 80) {
                  ctx.moveTo(particles[i].x, particles[i].y)
                  ctx.lineTo(particles[j].x, particles[j].y)
                }
              }
            }
            ctx.stroke()
            animationFrameId = requestAnimationFrame(animate)
          }
          animate()
          break
        }
        case 'Conexión con API Peliculas': {
          const stars = Array.from({ length: 80 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.3 + 0.2,
          }))
          const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            stars.forEach(s => {
              s.y += s.speed
              if (s.y > canvas.height) {
                s.y = 0
                s.x = Math.random() * canvas.width
              }
              ctx.beginPath()
              ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(0, 255, 153, ${s.alpha})`
              ctx.fill()
            })
            animationFrameId = requestAnimationFrame(animate)
          }
          animate()
          break
        }
      }
    }
  }

  onMounted(() => {
    // Setup observer to init canvas only when visible and has layout
    observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          initCanvas()
        }
      }
    })
    
    const canvasId = 'canvas-' + props.project.title.replace(/\s+/g, '-')
    const canvas = document.getElementById(canvasId)
    if (canvas) {
      observer.observe(canvas)
    }
  })

  onUnmounted(() => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId)
    if (observer) observer.disconnect()
    
  })
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 450px;
  height: fit-content; /* Auto height to fit content exactly */
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-bottom: 2rem;
  border: 1px solid #00ff99;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 255, 153, 0.3);
}

.card-visual {
  width: 100%;
  height: 200px; /* Increased visual height as requested */
  background: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

/* Canvas Styles */
.train-ai-visual, .chatbot-ia-visual, .api-peliculas-visual {
  width: 100%;
  height: 100%;
}

.train-ai-visual canvas, .chatbot-ia-visual canvas, .api-peliculas-visual canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.image-visual {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000; /* Black background for logos */
  padding: 10px; /* Padding to prevent logo touching edges */
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensure full logo is visible */
  transition: transform 0.4s ease;
}

.card:hover .project-image {
  transform: scale(1.1);
}

/* Random User API Style */
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
  font-size: 8px;
  color: rgba(0, 255, 153, 0.4);
  animation: flicker 2s infinite;
}
@keyframes flicker {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
.user-icon {
  position: absolute;
  width: 60px;
  height: 60px;
  color: #00ff99;
  filter: drop-shadow(0 0 15px #00ff99);
  animation: pulse 2s infinite ease-in-out;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.card__content {
  padding: 0.8rem;
  text-align: center;
  /* Removed flex-grow: 1 to prevent expanding */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Pack content to top */
  gap: 0.5rem; /* Consistent spacing between elements */
}

.card__title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #00ff99;
  margin: 0; /* Handled by gap */
}

.card__description {
  font-size: 0.85rem;
  color: #ccc;
  margin: 0; /* Handled by gap */
  /* Removed flex-grow */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
}

.download-btn {
  background: linear-gradient(45deg, #00ff99, #00b36b);
  color: #101010;
  font-weight: bold;
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  align-self: center;
  margin: 0; /* Handled by gap */
}

.download-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0, 255, 153, 0.5);
}

.subcard-tittle {
  margin-top: 0.2rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: #00ff99;
  margin-bottom: 0.2rem;
}

.logos-proyectos-container {
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  margin-top: 0.2rem;
}

.logos-proyectos {
  width: 28px;
  height: 28px;
  transition: transform 0.3s ease;
}

.logos-proyectos:deep(svg) {
  width: 100%;
  height: 100%;
}

.logos-proyectos:hover {
  transform: scale(1.2);
}

@media (max-width: 400px) {
  .card__title {
    font-size: 1.1rem;
  }

  .logos-proyectos {
    width: 24px;
    height: 24px;
  }
}
</style>
