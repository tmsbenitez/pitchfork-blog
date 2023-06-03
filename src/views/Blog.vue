<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import VueMarkdown from 'vue-markdown-render'
import { posts } from '../posts/index'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const Post = ref(posts.find(post => route.query.tag === Object.keys(post)[0]))
</script>

<template>
  <main>
    <Header />
    <section class="lg:ml-44 mx-6 flex flex-col gap-10">
      <div class="flex flex-col gap-2 max-w-6xl">
        <router-link
          :to="'/'"
          class="uppercase font-bold text-xs hover:underline w-fit"
          >news</router-link
        >
        <h2 class="serif text-3xl lg:text-5xl font-bold tracking-wide leading-snug">
          {{ route.query.longTitle }}
        </h2>
      </div>
      <span class="h-[2px] w-28 bg-red-500" />
      <p class="text-xl font-medium text-zinc-700">
        {{ route.query.description }}
      </p>
      <div class="flex flex-col gap-2 text-sm font-medium">
        <p>
          By
          <span
            class="hover:underline duration-300 hover:decoration-red-500 hover:text-red-500"
            >{{ route.query.writer }}</span
          >
        </p>
        <p class="text-zinc-500">
          {{ route.query.date }}
        </p>
      </div>
      <div class="flex flex-col lg:w-3/5 gap-6">
        <div class="flex flex-col gap-2">
          <img :src="route.query.img" />
          <span class="text-sm font-medium text-zinc-500">{{ route.query.photographer }}</span>
        </div>
        <div
          class="flex flex-col gap-10 max-w-2xl text-lg leading-8 mt-6 mx-auto w-full"
        >
          <vue-markdown
            :source="Post[route.query.tag]"
            :options="{ html: true }"
            class="blog-post"
          />
        </div>
      </div>
    </section>
    <router-view />
  </main>
  <Footer />
</template>
