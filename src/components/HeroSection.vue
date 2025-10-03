<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="home" class="hero min-h-[calc(100vh-5rem)] bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-xl space-y-6">
        <h1 class="text-4xl font-bold">به داریوش خوش آمدید</h1>
        <p class="text-base-content/70">
          این یک صفحه فرود ساده است که با استفاده از
          <span class="font-semibold">daisyUI</span>
          و <span class="font-semibold">Tailwind CSS</span> ساخته شده تا بتوانید به سرعت رابط‌های
          کاربری زیبا ایجاد کنید.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <RouterLink to="/blog" class="btn btn-primary">مشاهده بلاگ</RouterLink>
          <button type="button" class="btn btn-outline">شروع کنید</button>
        </div>
      </div>
    </div>
  </section>
</template>
