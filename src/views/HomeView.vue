<script setup>
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import Dock from '../components/Dock.vue'
import HeroSection from '../components/HeroSection.vue'
import ProductsSection from '../components/ProductsSection.vue'
import ServicesCarousel from '../components/ServicesCarousel.vue'
</script>

<template>
  <div class="bg-base-100">
    <main class="space-y-24">
      <HeroSection />
      <ServicesCarousel />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </main>
    <div class="flex justify-center pb-12">
      <Dock />
    </div>
  </div>
</template>
