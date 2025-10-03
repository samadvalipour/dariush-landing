<script setup>
import { RouterView } from 'vue-router'
import MainNavbar from './components/MainNavbar.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-base-200 text-base-content">
    <MainNavbar />
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>
