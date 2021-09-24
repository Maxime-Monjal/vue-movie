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
    axios
      .get(`https://backend-vue-movie.herokuapp.com/toprated`)
      .then((res) => {
        this.movies = res.data;
      });
  },
};
</script>

<style scoped></style>
