<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';
import Article from '../components/Article.vue'
import BLOGENTRIES from '../statics/data/blogs.json'
</script>

<template>
  <Header />
  <section class="max-w-6xl mx-auto w-full flex flex-col gap-6 px-6">
    <h2 class="font-bold text-zinc-700 uppercase text-sm border-b border-zinc-200 pb-2">
      News
    </h2>
    <div class="flex flex-col gap-10 lg:flex md:grid md:grid-cols-2">
      <Article v-for="entry in BLOGENTRIES" v-bind:entry="entry" />
    </div>
  </section>
  <Footer />
</template>
