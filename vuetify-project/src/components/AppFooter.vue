<template>
  <v-footer app height="40">
    <div class="text-center w-100">
      &copy; {{ new Date().getFullYear() }} — <strong>Hugo Córdoba</strong>
    </div>
  </v-footer>
</template>

<script setup>
// No script needed for this simple footer
</script>

<style scoped>
.v-footer {
  background-color: #f5f5f5;
  color: #333;
}
</style>
