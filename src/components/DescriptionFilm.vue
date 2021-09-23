<template>
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
      <strong>{{ $moment(movie.release_date).format("DD/MM/YYYY") }} </strong>
    </p>

    <p class="max-w-screen-xl pt-4">
      Note: <strong>{{ movie.vote_average }} / 10</strong>
    </p>
    <p class="max-w-screen-xl pt-4">
      Nombre de vote: <strong>{{ movie.vote_count.toLocaleString() }}</strong>
    </p>
    <p class="max-w-screen-xl pt-4">
      Durée du film: <strong>{{ timeConvert(movie.runtime) }}</strong>
    </p>
    <p class="max-w-screen-xl pt-4">
      Budget: <strong>{{ movie.budget.toLocaleString() }} $</strong>
    </p>
    <p class="max-w-screen-xl pt-4">
      Revenue généré: <strong>{{ movie.revenue.toLocaleString() }} $</strong>
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
</template>

<script>
export default {
  name: "DescriptionFilm",
  props: ["movie"],
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
