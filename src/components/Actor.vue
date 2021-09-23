<template>
  <div class="pt-8">
    <div
      class="grid grid grid-cols-2 gap-2 sm:grid-cols-4 max-w-screen-xl mx-auto"
    >
      <div
        v-for="actor in actors"
        :key="actor.id"
        class="mb-10 mx-4 shadow-3xl"
      >
        <img
          :src="
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : `http://cvestavayer.ch/wp-content/uploads/2020/01/CLUB_No_picture_available.png`
          "
          :alt="
            actor.profile_path ? `${actor.name}` : `pas de photo disponible`
          "
          width="500"
          height="500"
          loading="lazy"
        />
        <p class="text-center py-2">{{ actor.name }}</p>
        <p class="text-center pb-2">Rôle : {{ actor.character }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Actor",
  props: ["actors"],
};
</script>

<style scoped></style>
