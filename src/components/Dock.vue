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
  <nav class="dock rounded-box bg-base-100/80 backdrop-blur" aria-label="لینک های شبکه اجتماعی">
    <a
      v-for="item in dockItems"
      :key="item.id"
      :href="item.href"
      class="dock-item"
      :class="{ 'dock-active': item.isActive }"
      :target="item.external ? '_blank' : undefined"
      :rel="item.external ? 'noopener noreferrer' : undefined"
      :aria-label="item.label"
    >
      <img :src="item.icon" :alt="item.alt" class="size-[1.2em]" />
      <span class="dock-label">{{ item.label }}</span>
    </a>
  </nav>
</template>
