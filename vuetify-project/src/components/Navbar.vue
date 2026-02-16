<template>
  <v-app-bar
    app
    class="glass-nav"
    color="transparent"
    elevation="0"
    fixed
  >
    <v-container class="d-flex align-center">
      <h3 class="text-h6 font-weight-bold" style="color: #00ff99; cursor: pointer;" @click="scrollTo('home')">
        HUGO<span class="white--text"> CÓRDOBA</span>
      </h3>
      <v-spacer />

      <!-- Desktop Menu -->
      <div class="hidden-sm-and-down">
        <v-btn class="nav-btn" text @click="scrollTo('home')">Inicio</v-btn>
        <v-btn class="nav-btn" text @click="scrollTo('proyectos')">Proyectos</v-btn>
        <v-btn class="nav-btn" text @click="scrollTo('conocimientos')">Habilidades</v-btn>
      </div>

      <!-- Mobile Menu -->
      <v-menu
        v-model="drawer"
        class="hidden-md-and-up"
        :close-on-content-click="true"
        location="bottom end"
      >
        <template #activator="{ props }">
          <v-app-bar-nav-icon
            v-bind="props"
            class="hidden-md-and-up"
            color="#00ff99"
            variant="text"
          />
        </template>

        <v-list class="glass-menu" dark>
          <v-list-item @click="scrollTo('home')">
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>
          <v-list-item @click="scrollTo('proyectos')">
            <v-list-item-title>Proyectos</v-list-item-title>
          </v-list-item>
          <v-list-item @click="scrollTo('conocimientos')">
            <v-list-item-title>Habilidades</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(false)

  function scrollTo (id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>

<style scoped>
.glass-nav {
  background: rgba(16, 16, 16, 0.7) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 255, 153, 0.1);
  transition: all 0.3s ease;
}

.nav-btn {
  color: #fff !important;
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-left: 10px;
  transition: color 0.3s ease;
}

.nav-btn:hover {
  color: #00ff99 !important;
}

.glass-menu {
  background: rgba(28, 28, 28, 0.95) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 153, 0.2);
}

.glass-menu .v-list-item-title {
  color: #fff;
}

.glass-menu .v-list-item:hover .v-list-item-title {
  color: #00ff99;
}
</style>
