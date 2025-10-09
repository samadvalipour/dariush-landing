<template>
  <section id="services" class="bg-base-100 py-16">
    <div class="container mx-auto flex flex-col gap-10 px-4">
      <header class="space-y-4 text-center">
        <span class="badge badge-secondary badge-outline">خدمات ما</span>
        <h2 class="text-3xl font-bold text-base-content sm:text-4xl">
          تخصص ما در خدمت زیبایی فضای شماست
        </h2>
        <p class="mx-auto max-w-3xl text-base leading-relaxed text-base-content/70">
          مجموعه‌ای کامل از خدمات طراحی و اجرای دکوراسیون داخلی برای خانه و محل کارتان.
          هر خدمت توسط متخصصان داریوش و با تمرکز بر کیفیت، زیبایی و دوام ارائه می‌شود.
        </p>
      </header>

      <div class="relative">
        <div
          class="carousel carousel-center w-full space-x-6 overflow-x-auto rounded-2xl bg-base-200/60 p-6 snap-x snap-mandatory scroll-smooth"
        >
          <div
            v-for="service in services"
            :key="service.title"
            class="carousel-item w-full flex-shrink-0 snap-start sm:w-1/2 lg:w-1/3"
          >
            <ServiceCard
              :title="service.title"
              :desc="service.desc"
              :image="service.image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'
import { servicesData } from '../data/servicesData'

const services = servicesData
</script>
