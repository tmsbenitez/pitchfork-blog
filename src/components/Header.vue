<script setup>
</script>

<template>
  <header class="pb-2 pt-4 px-6 mb-12 flex justify-between shadow-lg bg-zinc-900 text-white items-center">
    <div class="flex gap-2 items-center text-lg">
      <router-link :to="'/'" class="serif text-3xl font-medium">Pitchfork</router-link>
    </div>
    <nav>
      <ul class="flex gap-8 items-center font-bold text-xs">
        <a href="https://pitchfork.com/news/" target="_blank" class="opacity-60 hover:opacity-100 duration-150 cursor-pointer uppercase">Pitchfork</a>
      </ul>
    </nav>
  </header>
</template>