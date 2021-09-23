<template>
  <div>
    <h1 class="text-3xl pt-4 px-4 text-center">
      {{ movie.title }}
    </h1>
    <img
      class="max-w-screen-xl w-full mx-auto pt-4 px-4"
      :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`"
      :alt="movie.id"
      width="500"
      height="500"
      loading="lazy"
    />
    <h2 class="text-2xl pt-4 px-4 text-center">
      {{ movie.tagline }}
    </h2>
    <p class="max-w-screen-xl mx-auto pt-4 px-4">
      {{ movie.overview }}
    </p>
    <DescriptionFilm :movie="movie" />
    <div class="text-center mt-4 max-w-screen-xl mx-auto">
      <router-link
        class="pt-4 self-center"
        :to="
          `/${movie.title.toLowerCase().replace(/ /g, '_')}/similar/${movie.id}`
        "
      >
        <button
          class="
            bg-indigo-500
            px-5
            py-3
            text-sm
            shadow-sm
            font-medium
            tracking-wider
            border
            text-indigo-100
            rounded-full
            hover:shadow-lg hover:bg-indigo-600
          "
        >
          Voir des films similaire à {{ movie.title }}
        </button></router-link
      >
    </div>

    <h3 class="text-3xl text-center pt-4 px-4">Acteur</h3>
    <Actor :actors="actor" />
  </div>
</template>

<script>
import Actor from "../components/Actor.vue";
import DescriptionFilm from "../components/DescriptionFilm.vue";
import axios from "axios";

export default {
  components: { Actor, DescriptionFilm },
  data() {
    return {
      movie: [],
      actor: [],
    };
  },
  mounted() {
    const BASE_URL = process.env.VUE_APP_BASE_URL;
    const API_SECRET = process.env.VUE_APP_API_SECRET;
    axios
      .get(
        `${BASE_URL}${this.$route.params.id}?api_key=${API_SECRET}&language=fr`
      )
      .then((res) => {
        this.movie = res.data;
      });
    axios
      .get(
        `${BASE_URL}${this.$route.params.id}/credits?api_key=${API_SECRET}&language=fr`
      )
      .then((res) => {
        this.actor = res.data.cast;
      });
  },
};
</script>

<style scoped></style>
