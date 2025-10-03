<script setup>
import { computed } from "vue";
import instagramIcon from "../assets/instagram.svg";
import divarIcon from "../assets/divar.svg";
import phoneIcon from "../assets/phone.svg";

const props = defineProps({
  links: {
    type: Array,
    default: () => [
      {
        id: "instagram",
        label: "اینستاگرام",
        href: "https://www.instagram.com/",
        icon: instagramIcon,
        alt: "صفحه اینستاگرام داریوش",
        external: true,
      },
      {
        id: "divar",
        label: "دیوار",
        href: "https://divar.ir/",
        icon: divarIcon,
        alt: "صفحه دیوار داریوش",
        external: true,
      },
      {
        id: "contact",
        label: "تماس",
        href: "/#contact",
        icon: phoneIcon,
        alt: "ارتباط با داریوش",
        external: false,
      },
    ],
  },
  active: {
    type: String,
    default: "instagram",
  },
});

const dockItems = computed(() =>
  props.links.map((item) => ({
    ...item,
    isActive: item.id === props.active,
    external: item.external ?? true,
  }))
);
</script>

<template>
  <nav class="lg:hidden dock rounded-box border-none bg-base-100/90 backdrop-blur w-auto bottom-4 right-4 left-4" aria-label="لینک های شبکه اجتماعی">
    <a
      v-for="item in dockItems"
      :key="item.id"
      :href="item.href"
      class="dock-item"
      :target="item.external ? '_blank' : undefined"
      :rel="item.external ? 'noopener noreferrer' : undefined"
    >
      <img :src="item.icon" :alt="item.alt" class="size-[2em]" />
    </a>
  </nav>
</template>
