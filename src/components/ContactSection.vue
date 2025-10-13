<script setup>

import BaseLazyImage from "./BaseLazyImage.vue";
import baladIcon from "../assets/svg/balad_rgb.svg";
import divarIcon from "../assets/svg/divar_rgb.svg";
import instagramIcon from "../assets/svg/instagram_rgb.svg";
import neshanIcon from "../assets/svg/neshan_rgb.svg";
import { ClockIcon, MapPinIcon, PhoneIcon } from "../utils/lucide-icons";

const contactDetails = [
  {
    id: "phone",
    label: "تلفن تماس مستقیم",
    value: "0912 765 8701",
    href: "tel:09127658701",
    icon: PhoneIcon,
  },
  {
    id: "address",
    label: "آدرس کارگاه و دفتر",
    value: "استان البرز، اتوبان کرج به قزوین (آزاد راه شهید فلاحی)، شهر هشتگرد، ینگه امام، میدان شورا (چسبیده به اتوبان)",
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
    label: "مسیریابی در نشان",
    href: "https://nshn.ir/f2_bvTH6pxSrb5",
    icon: neshanIcon,
    type: "asset",
  },
  {
    id: "balad",
    label: "مسیریابی در بلد",
    href: "https://balad.ir/p/Ptp5Hc4Kk1tN6s",
    icon: baladIcon,
    type: "asset",
  },
  {
    id: "instagram",
    label: "صفحه اینستاگرام ما",
    href: "http://www.instagram.com/dariushdecor.ir",
    icon: instagramIcon,
    type: "asset",
  },
  {
    id: "divar",
    label: "صفحه دیوار ما",
    href: "https://divar.ir/pro/weMYJqef",
    icon: divarIcon,
    type: "asset",
  },
  {
    id: "phone",
    label: "تماس تلفنی مستقیم",
    href: "tel:09127658701",
    icon: PhoneIcon,
    type: "component",
  },
];
</script>

<template>
  <section id="contact" class="bg-base-200 py-16">
    <div class="container mx-auto px-4">
      <div>
        <div class="space-y-4 text-center">
          <h2 class="text-3xl font-bold text-base-content">
            تماس با دکوراسیون داریوش
          </h2>
          <p class="text-base text-base-content/70">
            برای مشاوره رایگان، استعلام قیمت یا هماهنگی پروژه با ما در تماس
            باشید.
          </p>
        </div>

        <div class="mt-10 grid gap-4 lg:flex lg:justify-center">
          <component v-for="item in contactDetails" :key="item.id" :is="item.href ? 'a' : 'div'" :href="item.href"
            class="group flex items-start gap-4 rounded-2xl border border-base-300/60 bg-white/70 pl-6 pr-4 py-5 text-right transition"
            :target="item.href?.startsWith('http') ? '_blank' : undefined"
            :rel="item.href?.startsWith('http') ? 'noopener noreferrer' : undefined">
            <span class="flex size-12 items-center justify-center rounded-full text-primary">
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

        <div class="mt-10 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6">
          <div class="flex flex-col gap-2 text-center">
            <h3 class="text-xl font-semibold text-base-content">دسترسی سریع</h3>
            <p class="text-sm text-base-content/70">
              مسیر، شبکه‌های اجتماعی و تماس فوری 
              <span class="font-bold">
              فقط با یک کلیک
              </span>
              .
            </p>
          </div>
          <div class="mt-6 grid lg:flex lg:justify-center gap-3 sm:grid-cols-2">
            <a v-for="action in quickActions" :key="action.id" :href="action.href"
              class="group flex items-center gap-3 rounded-2xl border border-base-300/60 bg-white/80 pl-6 pr-4 py-3 text-base-content transition hover:-translate-y-1"
              :target="action.href.startsWith('http') ? '_blank' : undefined"
              :rel="action.href.startsWith('http') ? 'noopener noreferrer' : undefined">
              <span
                class="flex size-11 items-center justify-center rounded-2xl text-base-content">
                <template v-if="action.type === 'asset'">
                  <BaseLazyImage :src="action.icon" :alt="action.label" class="size-10" />
                </template>
                <component v-else :is="action.icon" class="size-7" />
              </span>
              <span class="font-medium">{{ action.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
