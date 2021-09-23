<template>
  <div class="bg-black text-white">
    <div
      class="
        flex
        justify-around
        items-center
        max-w-screen-xl
        h-28
        py-5
        px-4
        mx-auto
      "
    >
      <router-link to="/">
        <img
          class="hidden sm:block"
          width="100"
          height="100"
          src="../assets/img/MDB.svg"
          alt="powered by the movie db"
        />
      </router-link>
      <router-link to="/">
        <span class="md:text-2xl">Welcome to Vue Movie</span>
      </router-link>
      <img
        width="122"
        height="100"
        src="../assets/img/MDB.png"
        alt="powered by the movie db"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
