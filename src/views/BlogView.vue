<template>
  <section class="blog">
    <h1 class="blog__title">وبلاگ</h1>
    <p class="blog__description">به زودی مقالات جدید اضافه می‌شوند.</p>
  </section>
</template>

<style scoped>
.blog {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #fef2f2;
  color: #b91c1c;
  text-align: center;
  padding: 1.5rem;
}

.blog__title {
  font-size: 2rem;
  font-weight: 700;
}

.blog__description {
  max-width: 32rem;
  line-height: 1.6;
}
</style>
