<template>
  <div>
    <h1 class="text-3xl max-w-screen-xl mx-auto pt-4 px-4">
      Les films les mieux notés
    </h1>
    <Movie :movie="movies" />
  </div>
</template>
<script>
import Movie from "../components/Movie.vue";
import axios from "axios";

export default {
  name: "Home",
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
      .get(`${BASE_URL}top_rated?api_key=${API_SECRET}&language=fr&page=1`)
      .then((res) => {
        this.movies = res.data.results;
      });
  },
};
</script>

<style scoped></style>
