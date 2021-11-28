<template>
  <div>
    <SearchFormBirth />
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
.search-bar input {
  font-size: 2.25rem;
}

.search-bar button {
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 2rem;
  border: none;
  cursor: pointer;
}

.search-bar button:hover {
  background: #ccc;
}
</style>
