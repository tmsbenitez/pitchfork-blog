<script setup></script>

<template>
  <main id="app">
    <img
      :src="'/pitchfork.png'"
      class="absolute -z-10 opacity-[2%] -top-96 -left-96"
    />
    <router-view />
  </main>
</template>
