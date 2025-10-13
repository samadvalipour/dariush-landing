<template>
  <article
    class="card h-full w-full border border-base-300 bg-base-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
  >
    <figure class="h-48 w-full overflow-hidden rounded-t-2xl">
      <img :src="image" :alt="title" class="h-full w-full object-cover" loading="lazy" />
    </figure>
    <div class="card-body flex flex-col gap-4">
      <div class="space-y-2">
        <span class="badge badge-outline badge-secondary">{{ category }}</span>
        <h3 class="card-title justify-start text-2xl font-bold text-base-content">
          {{ title }}
        </h3>
        <p class="text-base leading-relaxed text-base-content/70">
          {{ desc }}
        </p>
      </div>
      <div class="mt-auto pt-2">
        <a
          href="#contact"
          class="btn btn-secondary btn-block"
          :aria-label="`مشاوره و خرید ${title}`"
        >
          مشاوره و خرید
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
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
  category: {
    type: String,
    required: true,
  },
})
</script>
