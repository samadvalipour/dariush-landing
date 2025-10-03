<script setup>
import { ref } from 'vue'

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
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <!-- بخش شروع -->
    <div class="flex-none">
      <!-- منوی موبایل -->
      <div class="dropdown">
        <button
          tabindex="0"
          role="button"
          class="btn btn-ghost lg:hidden"
          @click="toggleMenu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul
          v-if="isMenuOpen"
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
        >
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" @click="closeMenu">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <!-- لوگو -->
      <a href="/" class="btn btn-ghost text-xl">daisyUI</a>
    </div>

    <!-- بخش وسط (لینک‌ها در دسکتاپ) -->
    <div class="grow hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
