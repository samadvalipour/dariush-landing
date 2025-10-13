<template>
  <section id="products" class="bg-base-200 py-16">
    <div class="container mx-auto flex flex-col gap-10 px-4">
      <header class="space-y-4 text-center">
        <span class="badge badge-secondary badge-outline">محصولات ما</span>
        <h2 class="text-3xl font-bold text-base-content sm:text-4xl">
          محصولات منتخب دکوراسیون داریوش
        </h2>
        <p class="mx-auto max-w-3xl text-base leading-relaxed text-base-content/70">
          مجموعه‌ای از تجهیزات و محصولات آماده فروش که با دقت توسط تیم ما انتخاب شده‌اند تا کیفیت و زیبایی را همزمان به فضای شما بیاورند.
        </p>
      </header>

      <div class="relative">
        <div
          ref="carouselRef"
          class="carousel carousel-center w-full space-x-6 overflow-x-auto rounded-2xl bg-base-100/70 p-6 snap-x snap-mandatory scroll-smooth sm:hidden"
          @scroll="updateActiveIndex"
        >
          <div
            v-for="product in products"
            :key="product.title"
            class="carousel-item w-full flex-shrink-0 snap-start"
            data-product-slide
          >
            <ProductCard
              :title="product.title"
              :desc="product.desc"
              :image="product.image"
              :category="product.category"
            />
          </div>
        </div>

        <div class="mt-4 flex justify-center gap-2 sm:hidden">
          <button
            v-for="(product, index) in products"
            :key="product.title + '-indicator'"
            type="button"
            class="h-2 w-2 rounded-full transition-colors"
            :class="index === activeIndex ? 'bg-secondary' : 'bg-base-content/30 hover:bg-base-content/50'"
            @click="scrollToSlide(index)"
            :aria-label="`نمایش ${product.title}`"
          ></button>
        </div>

        <div class="hidden w-full gap-6 rounded-2xl bg-base-100/70 p-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            v-for="product in products"
            :key="product.title"
            :title="product.title"
            :desc="product.desc"
            :image="product.image"
            :category="product.category"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import ProductCard from './ProductCard.vue'
import { productsData } from '../data/productsData'

const products = productsData

const carouselRef = ref(null)
const activeIndex = ref(0)

const updateActiveIndex = () => {
  const container = carouselRef.value
  if (!container) return

  const items = container.querySelectorAll('[data-product-slide]')
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

  const items = container.querySelectorAll('[data-product-slide]')
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
