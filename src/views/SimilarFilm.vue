<template>
  <div>
    <h1 class="text-3xl max-w-screen-xl mx-auto pt-4 px-4">
      Films similaire à
      {{ $route.params.title.replace(/_/g, " ") }}
    </h1>
    <Movie :movie="movies" />
  </div>
</template>

<script>
import Movie from "../components/Movie.vue";
import axios from "axios";

export default {
  components: { Movie },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    const BASE_URL = process.env.VUE_APP_BASE_URL;
    const API_SECRET = process.env.VUE_APP_API_SECRET;
    axios
      .get(
        `${BASE_URL}${this.$route.params.id}/similar?api_key=${API_SECRET}&language=fr`
      )
      .then((res) => {
        console.log(res.data.results);
        this.movies = res.data.results;
      });
  },
};
</script>

<style scoped></style>
