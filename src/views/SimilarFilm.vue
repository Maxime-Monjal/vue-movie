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
    axios
      .get(
        `https://backend-vue-movie.herokuapp.com/film/similar/${this.$route.params.id}`
      )
      .then((res) => {
        this.movies = res.data;
      });
  },
};
</script>

<style scoped></style>
