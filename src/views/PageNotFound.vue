<template>
  <div class="flex flex-col items-center">
    <h3 class="max-w-screen-xl text-4xl py-8">Page introuvable</h3>
    <span>Code erreur: 404</span>
    <p>La page que vous recherchez n'existe pas !</p>
    <p class="pt-2">PS: Mon film préféré c'est Fight Club</p>

    <button
      class="
        bg-indigo-500
        px-5
        py-3
        my-8
        text-sm
        shadow-sm
        w-25
        font-medium
        tracking-wider
        border
        text-indigo-100
        rounded-full
        hover:shadow-lg hover:bg-indigo-600
      "
    >
      <router-link to="/">
        <span class="md:text-2xl">Revenir à l'accueil</span>
      </router-link>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
