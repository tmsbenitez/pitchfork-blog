<template>
  <footer
    class="h-72 flex flex-col gap-12 items-center justify-center mt-12 bg-zinc-900 w-full p-6 text-center"
  >
    <h2 class="text-4xl serif text-white font-medium tracking-normal">
      Get Hot Links
    </h2>
    <div class="flex flex-col gap-6">
      <p class="text-red-500 text-sm uppercase font-bold">
        This website was created with educational intentions, without any revenue.
      </p>
      <div class="flex gap-2 flex-col md:flex-row">
        <input
          placeholder="Your Email Address"
          class="text-sm h-12 px-4 md:w-2/3 focus:border-black duration-150 border-2 focus:outline-none"
        />
        <button
          class="bg-red-400 border-2 border-white  rounded md:w-1/3 h-12 font-bold uppercase tracking-wider text-sm hover:border-red-600 hover:bg-red-600 duration-150 hover:text-white"
        >
          Sign up now
        </button>
      </div>
    </div>
  </footer>
</template>
