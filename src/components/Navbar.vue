<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import logo from "../assets/logo-black.svg";
import instagram from "../assets/instagram.svg";
import divar from "../assets/divar.svg";
import phone from "../assets/phone.svg";

const links = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/#services", label: "خدمات ما" },
  { href: "/#products", label: "محصولات ما" },
  { href: "/#about", label: "درباره ما" },
  { href: "/#contact", label: "تماس با ما" },
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <header class=" z-1 rounded-box border-none bg-base-100/90 backdrop-blur fixed !w-auto top-4 right-4 left-4">
    <div class="navbar">
      <div class="container mx-auto flex flex-row items-center justify-between gap-4">
        <!-- دکمه منوی موبایل -->
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
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- لوگو -->
        <a href="/" class="btn btn-ghost normal-case text-xl">
          <img :src="logo" alt="لوگو" class="h-7 md:h-10 w-auto" />
        </a>

        <div class="hidden lg:flex flex-horizental gap-2">
          <a href="" class="btn btn-circle btn-ghost">
            <img :src="instagram" alt="ارتباط با ما در اینستاگرام" class="h-8" />
          </a>
          <a href="" class="btn btn-circle btn-ghost">
            <img :src="divar" alt="ارتباط با ما دیوار" class="h-8" />
          </a>
          <a href="" class="btn btn-circle btn-ghost">
            <img :src="phone" alt="تماس با ما" class="h-8" />
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-base-200 rounded-box">
      <div class="container mx-auto justify-center">
        <!-- منوی دسکتاپ -->
        <ul class="menu menu-horizontal hidden justify-end gap-2 py-2 lg:flex">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" class="rounded-btn px-4 py-2 font-medium">
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- منوی موبایل -->
        <transition name="fade">
          <ul v-if="isMenuOpen" class="menu menu-vertical gap-2 py-4 lg:hidden">
            <li v-for="link in links" :key="link.href">
              <a
                :href="link.href"
                class="rounded-btn px-4 py-2 font-medium"
                @click="closeMenu"
              >
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
