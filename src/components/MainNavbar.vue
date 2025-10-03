<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const navigationLinks = [
  { hash: '', label: 'صفحه اصلی' },
  { hash: 'services', label: 'خدمات ما' },
  { hash: 'products', label: 'محصولات ما' },
  { hash: 'about', label: 'درباره ما' },
  { hash: 'contact', label: 'تماس با ما' }
]

const route = useRoute()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const buildLinkTarget = (hash) => ({
  name: 'home',
  ...(hash ? { hash: `#${hash}` } : {})
})

const isActive = (hash) => {
  if (hash) {
    return route.name === 'home' && route.hash === `#${hash}`
  }

  return route.name === 'home' && !route.hash
}
</script>

<template>
  <header class="bg-base-100 shadow">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <div class="flex items-center gap-2">
          <button
            class="btn btn-ghost lg:hidden"
            type="button"
            @click="toggleMenu"
            aria-label="باز کردن منو"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <RouterLink to="/" class="btn btn-ghost text-xl font-bold normal-case">
            داریوش
          </RouterLink>
        </div>
      </div>

      <nav class="hidden justify-center pb-4 lg:flex">
        <ul class="menu menu-horizontal rounded-box bg-base-200/60 px-2">
          <li v-for="link in navigationLinks" :key="link.label">
            <RouterLink
              :to="buildLinkTarget(link.hash)"
              class="px-4"
              :class="{ active: isActive(link.hash) }"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <transition name="fade">
        <nav v-if="isMenuOpen" class="pb-4 lg:hidden">
          <ul class="menu rounded-box bg-base-200/60 p-2">
            <li v-for="link in navigationLinks" :key="link.label">
              <RouterLink
                :to="buildLinkTarget(link.hash)"
                :class="{ active: isActive(link.hash) }"
                @click="closeMenu"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
