<template>
  <main class="container restaurant">
    <h1> Restaurants </h1>
    <AppRestaurantInfo />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";

export default {
  components: {
    AppRestaurantInfo,
    AppHeader,
  },
};
</script>

<style></style>
