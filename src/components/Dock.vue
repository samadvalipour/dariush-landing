<script setup>
import { computed } from "vue";
import BaseLazyImage from "./BaseLazyImage.vue";
import baladIcon from "../assets/svg/balad_bw.svg";
import divarIcon from "../assets/svg/divar_bw.svg";
import instagramIcon from "../assets/svg/instagram_bw.svg";
import neshanIcon from "../assets/svg/neshan_bw.svg";
import { PhoneIcon } from "../utils/lucide-icons";

const props = defineProps({
  links: {
    type: Array,
    default: () => [
      {
        id: "neshan",
        label: "مسیر در نشان",
        href: "https://nshn.ir/f2_bvTH6pxSrb5",
        icon: neshanIcon,
        alt: "مسیر کارگاه در نشان",
        type: "asset",
        external: true,
      },
      {
        id: "balad",
        label: "مسیر در بلد",
        href: "https://balad.ir/p/Ptp5Hc4Kk1tN6s",
        icon: baladIcon,
        alt: "مسیر کارگاه در بلد",
        type: "asset",
        external: true,
      },
      {
        id: "instagram",
        label: "اینستاگرام",
        href: "http://www.instagram.com/dariushdecor.ir",
        icon: instagramIcon,
        alt: "صفحه اینستاگرام داریوش",
        type: "asset",
        external: true,
      },
      {
        id: "divar",
        label: "دیوار",
        href: "https://divar.ir/pro/weMYJqef",
        icon: divarIcon,
        alt: "صفحه دیوار داریوش",
        type: "asset",
        external: true,
      },
      {
        id: "phone",
        label: "تماس تلفنی",
        href: "tel:09127658701",
        icon: PhoneIcon,
        alt: "تماس تلفنی مستقیم",
        type: "component",
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
    type: item.type ?? "asset",
  }))
);
</script>

<template>
  <nav
    class="dock w-auto rounded-box border border-gray-300/40 bottom-4 left-4 right-4 bg-base-100/95 shadow-md backdrop-blur lg:hidden"
    aria-label="لینک‌های دسترسی سریع"
  >
    <a
      v-for="item in dockItems"
      :key="item.id"
      :href="item.href"
      class="dock-item"
      :target="item.external ? '_blank' : undefined"
      :rel="item.external ? 'noopener noreferrer' : undefined"
      :aria-label="item.alt || item.label"
    >
      <span class="flex size-[2.4em] items-center justify-center text-base-content">
        <template v-if="item.type === 'asset'">
          <BaseLazyImage :src="item.icon" :alt="item.alt || item.label" class="size-10" />
        </template>
        <component v-else :is="item.icon" class="size-6" />
      </span>
    </a>
  </nav>
</template>
