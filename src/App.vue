<script setup>
import { RouterView } from 'vue-router'

import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-base-200 text-base-content">
    <Navbar />
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>
