<script setup>
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import Dock from '../components/Dock.vue'
import HeroSection from '../components/HeroSection.vue'
import ProductsCarousel from '../components/ProductsCarousel.vue'
import ServicesCarousel from '../components/ServicesCarousel.vue'
</script>

<template>
  <div class="bg-base-100">
    <main class="space-y-24 pb-10">
      <HeroSection />
      <ServicesCarousel />
      <ProductsCarousel />
      <AboutSection />
      <ContactSection />
    </main>
    <div class="flex justify-center">
      <Dock />
    </div>
  </div>
</template>
