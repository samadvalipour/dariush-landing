<template>
  <article
    class="card h-full w-full bg-base-100 border border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
  >
    <figure class="h-48 w-full overflow-hidden rounded-t-2xl">
      <BaseLazyImage
        :src="image"
        :alt="title"
        class="h-full w-full object-cover"
      />
    </figure>
    <div class="card-body gap-3">
      <h3 class="card-title justify-start text-2xl font-bold text-base-content">
        {{ title }}
      </h3>
      <p class="text-base leading-relaxed text-base-content/70">
        {{ desc }}
      </p>
    </div>
  </article>
</template>

<script setup>
import BaseLazyImage from './BaseLazyImage.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>
