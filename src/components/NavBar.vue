<template>
  <div>
    <ul class="flex max-w-screen-xl mx-auto">
      <li class="flex-1 mr-2 ml-4">
        <router-link
          to="/"
          class="w-full text-center block rounded py-2 px-4 text-blue-500"
        >
          <span class="max-w-screen-xl md:text-4xl pt-8 sm:pl-4"
            >Films du moment</span
          >
        </router-link>
      </li>
      <li class="flex-1 mr-2">
        <router-link
          to="/top_rated"
          class="w-full text-center block rounded py-2 px-4 text-blue-500"
        >
          <span class="max-w-screen-xl md:text-4xl pt-8 sm:pl-4"
            >Films les mieux notés</span
          >
        </router-link>
      </li>
      <li class="flex-1 mr-2">
        <router-link
          to="/upcoming"
          class="w-full text-center block rounded py-2 px-4 text-blue-500"
        >
          <span class="max-w-screen-xl md:text-4xl pt-8 sm:pl-4"
            >Films à venir</span
          >
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style></style>
