<script setup>
import baladIcon from "../assets/balad.svg";
import divarIcon from "../assets/divar.svg";
import instagramIcon from "../assets/instagram.svg";
import neshanIcon from "../assets/neshan.svg";
import { ClockIcon, MapPinIcon, PhoneIcon } from "../utils/lucide-icons";

const contactDetails = [
  {
    id: "phone",
    label: "تلفن تماس مستقیم",
    value: "0912 345 6789",
    href: "tel:09123456789",
    icon: PhoneIcon,
  },
  {
    id: "address",
    label: "آدرس کارگاه و دفتر",
    value: "هشتگرد – خیابان نمونه – کارگاه دکوراسیون داریوش",
    icon: MapPinIcon,
  },
  {
    id: "hours",
    label: "ساعت کاری",
    value: "همه‌روزه ۹ صبح تا ۸ شب (به‌جز جمعه‌ها)",
    icon: ClockIcon,
  },
];

const quickActions = [
  {
    id: "neshan",
    label: "مسیر در نشان",
    href: "https://neshan.org/maps/places/dariush-decor",
    icon: neshanIcon,
    type: "asset",
  },
  {
    id: "balad",
    label: "مسیر در بلد",
    href: "https://balad.ir/p/dariush-decor",
    icon: baladIcon,
    type: "asset",
  },
  {
    id: "instagram",
    label: "اینستاگرام",
    href: "https://www.instagram.com/",
    icon: instagramIcon,
    type: "asset",
  },
  {
    id: "divar",
    label: "دیوار",
    href: "https://divar.ir/",
    icon: divarIcon,
    type: "asset",
  },
  {
    id: "phone",
    label: "تماس تلفنی مستقیم",
    href: "tel:09123456789",
    icon: PhoneIcon,
    type: "component",
  },
];
</script>

<template>
  <section id="contact" class="bg-base-200 py-16">
    <div class="container mx-auto px-4">
      <div
        class="mx-auto max-w-4xl rounded-3xl border border-base-300/60 bg-base-100/80 p-8 shadow-lg backdrop-blur"
      >
        <div class="space-y-4 text-center">
          <h2 class="text-3xl font-bold text-base-content">
            تماس با دکوراسیون داریوش
          </h2>
          <p class="text-base text-base-content/70">
            برای مشاوره رایگان، استعلام قیمت یا هماهنگی پروژه با ما در تماس
            باشید.
          </p>
        </div>

        <div class="mt-10 grid gap-4">
          <component
            v-for="item in contactDetails"
            :key="item.id"
            :is="item.href ? 'a' : 'div'"
            :href="item.href"
            class="group flex items-start gap-4 rounded-2xl border border-base-300/60 bg-white/70 p-5 text-right transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-md"
            :target="item.href?.startsWith('http') ? '_blank' : undefined"
            :rel="item.href?.startsWith('http') ? 'noopener noreferrer' : undefined"
          >
            <span
              class="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary"
            >
              <component :is="item.icon" class="size-6" />
            </span>
            <div class="space-y-1">
              <p class="text-sm font-medium text-base-content/70">
                {{ item.label }}
              </p>
              <p class="font-semibold text-base-content">
                {{ item.value }}
              </p>
            </div>
          </component>
        </div>

        <div
          class="mt-10 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6"
        >
          <div class="flex flex-col gap-2 text-center">
            <h3 class="text-xl font-semibold text-base-content">دسترسی سریع</h3>
            <p class="text-sm text-base-content/70">
              مسیر، شبکه‌های اجتماعی و تماس فوری فقط با یک کلیک.
            </p>
          </div>
          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              v-for="action in quickActions"
              :key="action.id"
              :href="action.href"
              class="group flex items-center gap-3 rounded-2xl border border-base-300/60 bg-white/80 px-4 py-3 text-base-content transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:text-primary"
              :target="action.href.startsWith('http') ? '_blank' : undefined"
              :rel="action.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            >
              <span
                class="flex size-11 items-center justify-center rounded-2xl bg-base-200 text-base-content transition group-hover:bg-primary/10 group-hover:text-primary"
              >
                <template v-if="action.type === 'asset'">
                  <img :src="action.icon" :alt="action.label" class="size-6" />
                </template>
                <component v-else :is="action.icon" class="size-5" />
              </span>
              <span class="font-medium">{{ action.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
