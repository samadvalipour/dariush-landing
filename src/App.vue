<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

const navigationLinks = [
  { to: '/', label: 'خانه' },
  { to: '/blog', label: 'بلاگ' }
]
</script>

<template>
  <div class="flex min-h-screen flex-col bg-base-200 text-base-content">
    <nav class="navbar bg-base-100 shadow">
      <div class="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <RouterLink to="/" class="btn btn-ghost text-xl font-bold normal-case">
          داریوش
        </RouterLink>
        <div class="flex flex-wrap gap-2">
          <RouterLink
            v-for="link in navigationLinks"
            :key="link.to"
            :to="link.to"
            class="btn btn-ghost btn-sm"
            :class="{ 'btn-active': route.path === link.to }"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </nav>
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>
