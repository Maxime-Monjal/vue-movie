<template>
  <div>
    <h1 class="text-3xl pt-4 px-4 text-center">
      {{ movie.title }}
    </h1>

    <img
      v-if="movie.backdrop_path"
      class="max-w-screen-xl w-full mx-auto pt-4 px-4"
      :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
      :alt="movie.id"
      width="500"
      height="500"
      loading="lazy"
    />

    <h2 class="text-2xl pt-4 px-4 text-center">
      {{ movie.tagline }}
    </h2>
    <p class="max-w-screen-xl mx-auto pt-2 px-4">
      {{ movie.overview }}
    </p>
    <div
      class="
        flex flex-col
        w-full
        text-center
        place-content-center
        max-w-screen-xl
        mx-auto
      "
    >
      <p class="max-w-screen-xl pt-4 px-4">
        Sorti le:
        <strong>{{ moment(movie.release_date).format("DD/MM/YYYY") }} </strong>
      </p>
      <p class="max-w-screen-xl pt-4">
        Note: <strong>{{ movie.vote_average }} / 10</strong>
      </p>
      <p class="max-w-screen-xl pt-4">
        Nombre de vote: <strong>{{ movie.vote_count }}</strong>
      </p>
      <p class="max-w-screen-xl pt-4">
        Durée du film: <strong>{{ timeConvert(movie.runtime) }}</strong>
      </p>
      <p class="max-w-screen-xl pt-4">
        Budget:
        <strong v-if="movie.budget"
          >{{ movie.budget.toLocaleString() }} $</strong
        >
        <strong v-else-if="!movie.budget || movie.budget === 0"
          >Non renseigné</strong
        >
      </p>
      <p class="max-w-screen-xl pt-4">
        Revenue généré:
        <strong v-if="movie.revenue"
          >{{ movie.revenue.toLocaleString() }} $</strong
        >
        <strong v-else-if="!movie.revenue || movie.revenue === 0"
          >Non renseigné</strong
        >
      </p>
      <div class="max-w-screen-xl pt-4">
        Genre :
        <div class="">
          <span v-for="genre in movie.genres" :key="genre.id" class="px-2">
            <strong class="inline-block">{{ genre.name }}</strong>
          </span>
        </div>
      </div>
    </div>
    <div class="text-center mt-4 max-w-screen-xl mx-auto">
      <router-link
        class="pt-4 self-center"
        :to="`/${this.$route.params.title}/similar/${this.$route.params.id}`"
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
import axios from "axios";

const moment = require("moment");

export default {
  components: { Actor },
  data() {
    return {
      moment: moment,
      movie: [],
      actor: [],
    };
  },
  async mounted() {
    await axios
      .get(
        `https://backend-vue-movie.herokuapp.com/film/${this.$route.params.id}`
      )
      .then((res) => {
        this.movie = res.data;
      });
    await axios
      .get(
        `https://backend-vue-movie.herokuapp.com/actors/${this.$route.params.id}`
      )
      .then((res) => {
        this.actor = res.data;
      });
  },
  methods: {
    timeConvert(n) {
      const num = n;
      const hours = num / 60;
      const rhours = Math.floor(hours);
      const minutes = (hours - rhours) * 60;
      const rminutes = Math.round(minutes);
      return rhours + "h " + rminutes + "m";
    },
  },
};
</script>

<style scoped></style>
