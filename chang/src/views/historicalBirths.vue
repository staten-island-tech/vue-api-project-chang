<template>
  <div>
    <SearchFormBirth />
    <div class="column1">
      <div class="birth-data"></div>
    </div>
    <div class="column2"></div>
  </div>
</template>

<script>
import SearchFormBirth from "@/components/SearchFormBirth.vue";

export default {
  name: "Births",
  components: {
    SearchFormBirth,
  },
};
</script>

<style>
.background {
  background-image: linear-gradient(0, #e1e5ee, #767b91),
    url("../assets/vaporwave.jpg");
  background-blend-mode: screen;
  background-size: cover;
  margin: 0 auto;
  height: 83vh;
}
</style>
