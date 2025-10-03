<script setup>
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import HeroSection from '../components/HeroSection.vue'
import ProductsSection from '../components/ProductsSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
</script>

<template>
  <div class="bg-base-100">
    <main class="space-y-24">
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </main>
  </div>
</template>
