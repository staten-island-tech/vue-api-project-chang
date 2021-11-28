<template>
  <div>
    <div class="background">
      <SearchFormDeath />
    </div>
  </div>
</template>

<script>
import SearchFormDeath from "@/components/SearchFormDeath.vue";
export default {
  components: {
    SearchFormDeath,
  },
  name: "Deaths",
};
</script>

<style>
.search-bar input {
  font-size: 2.25rem;
  width: 50rem;
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
