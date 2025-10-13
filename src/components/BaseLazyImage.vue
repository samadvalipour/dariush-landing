<script setup>
import { computed, useAttrs } from 'vue'

const props = defineProps({
  src: {
    type: [String, Object],
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  loading: {
    type: String,
    default: 'lazy',
  },
  decoding: {
    type: String,
    default: 'async',
  },
})

const attrs = useAttrs()

const forwardedAttrs = computed(() => {
  const { src, alt, loading, decoding, ...rest } = attrs
  return rest
})
</script>

<template>
  <img
    v-bind="forwardedAttrs"
    :src="props.src"
    :alt="props.alt"
    :loading="props.loading"
    :decoding="props.decoding"
  />
</template>
