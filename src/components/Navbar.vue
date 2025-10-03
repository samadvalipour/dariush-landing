<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const links = [
  { href: '/', label: 'صفحه اصلی' },
  { href: '/#services', label: 'خدمات ما' },
  { href: '/#products', label: 'محصولات ما' },
  { href: '/#about', label: 'درباره ما' },
  { href: '/#contact', label: 'تماس با ما' }
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header class="bg-base-100 shadow-sm">
    <div class="navbar bg-base-100">
      <div class="container mx-auto flex flex-row-reverse items-center justify-between gap-4">
        <a href="/" class="btn btn-ghost text-xl font-bold normal-case">
          daisyUI
        </a>
        <button
          type="button"
          class="btn btn-ghost btn-circle lg:hidden"
          aria-label="toggle navigation menu"
          @click="toggleMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <div class="border-t border-base-200 bg-base-100">
      <div class="container mx-auto">
        <ul class="menu menu-horizontal hidden justify-end gap-2 py-2 lg:flex">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" class="rounded-btn px-4 py-2 font-medium">
              {{ link.label }}
            </a>
          </li>
        </ul>

        <transition name="fade">
          <ul
            v-if="isMenuOpen"
            class="menu menu-vertical gap-2 py-4 lg:hidden"
          >
            <li v-for="link in links" :key="link.href">
              <a :href="link.href" class="rounded-btn px-4 py-2 font-medium" @click="closeMenu">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
