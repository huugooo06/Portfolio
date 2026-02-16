<template>
  <v-container class="py-10">
    <v-row>
      <v-col class="text-center mb-10" cols="12">
        <h1 class="text-h4 text-md-h2 font-weight-bold" style="color: #00ff99; text-shadow: 0 0 15px rgba(0, 255, 153, 0.7);">
          Mis Conocimientos
        </h1>
        <div class="intro-text-container mt-6">
          <p class="text-h6 typewriter">
            {{ typedText }}
          </p>
        </div>
      </v-col>
    </v-row>

    <div v-for="category in skills" :key="category.name">
      <v-row>
        <v-col class="text-left mb-4" cols="12">
          <h2 class="text-h4 category-title">{{ category.name }}</h2>
        </v-col>
      </v-row>
      <v-row justify="start">
        <v-col
          v-for="(skill, i) in category.skills"
          :key="skill.name"
          cols="12"
          lg="3"
          md="4"
          sm="6"
        >
          <div
            class="skill-card"
            :style="{ animationDelay: `${i * 0.1}s` }"
          >
            <div class="skill-card-inner">
              <div class="skill-card-front">
                <div class="svg-container" v-html="skill.svg" />
                <h3 class="text-h5 font-weight-bold mt-4">{{ skill.name }}</h3>
              </div>
              <div class="skill-card-back">
                <h4 class="text-h6 font-weight-bold">{{ skill.level }}</h4>
                <p class="mt-2 text-body-2">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

  </v-container>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { skills } from '@/data'

  const fullText = 'Actualmente estoy cursando un Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM), donde estoy adquiriendo una base sólida en el desarrollo de software y diseño de aplicaciones.'
  const typedText = ref('')
  let charIndex = 0

  function typeWriter () {
    if (charIndex < fullText.length) {
      typedText.value += fullText.charAt(charIndex)
      charIndex++
      setTimeout(typeWriter, 50)
    }
  }

  onMounted(() => {
    typeWriter()
  })
</script>

<style lang="scss" scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.category-title {
  color: #fff;
  padding-left: 1rem;
  border-left: 4px solid #00ff99;
  margin-top: 2rem;
}
.intro-text-container {
  border-left: 3px solid #00ff99;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: left;
}
.typewriter {
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
}
.skill-card {
  perspective: 1000px;
  margin-bottom: 2rem;
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
  cursor: pointer;
}
.skill-card-inner {
  position: relative;
  width: 100%;
  height: 200px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.skill-card:hover .skill-card-inner {
  transform: rotateY(180deg);
}
.skill-card-front,
.skill-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transition: all 0.4s ease;
  color: #fff;
  padding: 1rem;
  text-align: center;
}
.skill-card-front {
  background-color: rgba(28, 28, 28, 0.7);
  border: 2px solid #00ff99;
  box-shadow: 0 0 20px rgba(0, 255, 153, 0.5);
}
.skill-card-back {
  background: linear-gradient(135deg, #00ff99, #00b36b);
  color: #101010;
  border: 2px solid #00ff99;
  box-shadow: 0 0 30px rgba(0, 255, 153, 0.7);
  transform: rotateY(180deg);
  padding: 2rem;
}
.svg-container {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.7));
}
.svg-container::v-deep svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 600px) {
  .intro-text-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .svg-container {
    width: 60px;
    height: 60px;
  }
}
</style>
