<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <nav class="app__nav">
      <RouterLink to="/" class="app__link">خانه</RouterLink>
      <RouterLink to="/blog" class="app__link">بلاگ</RouterLink>
    </nav>
    <main class="app__content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app__nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1.5rem;
  background-color: #111827;
}

.app__link {
  color: #f9fafb;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 150ms ease-in-out;
}

.app__link.router-link-active {
  opacity: 1;
}

.app__link:not(.router-link-active) {
  opacity: 0.7;
}

.app__link:hover {
  opacity: 1;
}

.app__content {
  flex: 1;
}
</style>
