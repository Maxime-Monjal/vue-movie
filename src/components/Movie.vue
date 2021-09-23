<template>
  <div class="pt-8">
    <div
      class="
        grid grid-cols-2
        gap-2
        sm:grid-cols-4 sm:gap-4
        max-w-screen-xl
        mx-auto
      "
    >
      <div
        v-for="film in movie"
        :key="film.id"
        class="mb-10 mx-4 bg-black cursor-pointer shadow-3xl"
      >
        <router-link
          :to="`/${film.title.toLowerCase().replace(/ /g, '_')}/${film.id}`"
        >
          <img
            :src="
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                : `http://cvestavayer.ch/wp-content/uploads/2020/01/CLUB_No_picture_available.png`
            "
            :alt="
              film.poster_path ? `${film.title}` : `pas de photo disponible`
            "
            width="500"
            height="500"
            loading="lazy"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: ["movie"],
};
</script>

<style scoped></style>
