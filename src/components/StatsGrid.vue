<script setup>
const props = defineProps({
  stats: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-3">
    <div
      v-for="stat in props.stats"
      :key="stat.label"
      class="group relative overflow-hidden rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div class="flex items-baseline justify-between">
        <span class="text-sm font-medium text-base-content/60">{{ stat.label }}</span>
        <span class="text-xs font-medium text-primary/70">{{ stat.description }}</span>
      </div>
      <div class="mt-4 text-3xl font-bold text-base-content">{{ stat.value }}</div>
      <p class="mt-3 text-sm leading-6 text-base-content/70">{{ stat.subtitle }}</p>
      <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/70 via-primary to-secondary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  </div>
</template>
