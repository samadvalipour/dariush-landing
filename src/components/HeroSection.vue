<script setup>
import heroImage from '../assets/hero.png'
</script>

<template>
  <section
    id="home"
    class="hero min-h-screen bg-cover bg-center"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="hero-overlay bg-neutral/60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-xl">
        <h1 class="mb-5 text-5xl font-bold">کابینت و دکوراسیون داریوش</h1>
        <p class="mb-5 text-lg">
          با بهره‌گیری از طراحی‌های مدرن و متریال باکیفیت، فضایی ماندگار و دلنشین برای خانه یا محل کارتان
          خلق می‌کنیم.
        </p>
        <button type="button" class="btn btn-primary">مشاوره رایگان</button>
      </div>
    </div>
  </section>
</template>
