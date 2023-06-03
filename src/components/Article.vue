<script setup>
const props = defineProps({
  entry: {}
})
</script>

<template>
  <router-link
    :to="{ path: entry.id, query: entry }"
    class="gap-2 flex flex-col text-center h-full lg:w-3/4 lg:flex-row lg:text-left lg:pr-6 relative duration-150 items-center group h-52"
  >
    <picture class="flex lg:w-2/4 h-full">
      <img :src="entry.img" class="w-96" />
    </picture>
    <div class="flex flex-col gap-12 lg:w-2/4">
      <h3
        class="group-hover:underline tracking-tight decoration-red-500 text-xl font-bold max-w-sm"
      >
        {{ entry.title }}
      </h3>
      <div class="uppercase text-xs gap-2 flex flex-col font-bold">
        <p>By: {{ entry.writer }}</p>
        <p class="text-zinc-400">{{ entry.date }}</p>
      </div>
    </div>
  </router-link>
</template>
