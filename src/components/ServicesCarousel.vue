<template>
  <section id="services" class="bg-base-100 py-16">
    <div class="container mx-auto flex flex-col gap-10 px-4">
      <header class="space-y-4 text-center">
        <span class="badge badge-secondary badge-outline">خدمات ما</span>
        <h2 class="text-3xl font-bold text-base-content sm:text-4xl">
          تخصص ما، در خدمت زیبایی فضای شماست
        </h2>
        <p class="mx-auto max-w-3xl text-base leading-relaxed text-base-content/70">
          مجموعه‌ای کامل از خدمات طراحی و اجرای دکوراسیون داخلی برای خانه و محل کارتان.
          هر خدمت توسط متخصصان داریوش و با تمرکز بر کیفیت، زیبایی و دوام ارائه می‌شود.
        </p>
      </header>

      <div class="relative">
        <div
          ref="carouselRef"
          class="carousel carousel-center w-full space-x-6 overflow-x-auto rounded-2xl bg-base-200/60 p-6 snap-x snap-mandatory scroll-smooth sm:hidden"
          @scroll="updateActiveIndex"
        >
          <div
            v-for="service in services"
            :key="service.title"
            class="carousel-item w-full flex-shrink-0 snap-start"
            data-service-slide
          >
            <ServiceCard
              :title="service.title"
              :desc="service.desc"
              :image="service.image"
            />
          </div>
        </div>

        <div class="mt-4 flex justify-center gap-2 sm:hidden">
          <button
            v-for="(service, index) in services"
            :key="service.title + '-indicator'"
            type="button"
            class="h-2 w-2 rounded-full transition-colors"
            :class="
              index === activeIndex
                ? 'bg-secondary'
                : 'bg-base-content/30 hover:bg-base-content/50'
            "
            @click="scrollToSlide(index)"
            :aria-label="`نمایش ${service.title}`"
          ></button>
        </div>

        <div class="hidden w-full gap-6 rounded-2xl bg-base-200/60 p-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            v-for="service in services"
            :key="service.title"
            :title="service.title"
            :desc="service.desc"
            :image="service.image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import ServiceCard from './ServiceCard.vue'
import { servicesData } from '../data/servicesData'

const services = servicesData

const carouselRef = ref(null)
const activeIndex = ref(0)

const updateActiveIndex = () => {
  const container = carouselRef.value
  if (!container) return

  const items = container.querySelectorAll('[data-service-slide]')
  if (!items.length) return

  const containerRect = container.getBoundingClientRect()
  let closestIndex = 0
  let closestDistance = Number.POSITIVE_INFINITY

  items.forEach((item, index) => {
    const rect = item.getBoundingClientRect()
    const distance = Math.abs(rect.left - containerRect.left)

    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
  })

  activeIndex.value = closestIndex
}

const scrollToSlide = (index) => {
  const container = carouselRef.value
  if (!container) return

  const items = container.querySelectorAll('[data-service-slide]')
  const target = items[index]

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }
}

const handleResize = () => {
  nextTick(() => updateActiveIndex())
}

onMounted(() => {
  updateActiveIndex()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
