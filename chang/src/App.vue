
<template>
  <div class="container">
    <router-link to="/births">Births</router-link> |
    <router-link to="/about">About</router-link>
    <section class="background">
      <div class="column1">
        <div class="search-bar">
          <form>
            <input
              id="search"
              type="text"
              placeholder="Search a name.."
              name="search"
            />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
      </div>
      <div class="column2"></div>
    </section>
    <Births />
  </div>
</template>
<script>
import Births from "../src/components/historicalBirths.vue";
export default {
  data() {
    return {
      day: 1,
      month: 14,
    };
  },

  components: {
    Births,
  },
};
</script>


<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

.background {
  background-image: linear-gradient(0, #2a324b, #767b91),
    url("./assets/vaporwave.jpg");
  background-blend-mode: screen;
  background-size: cover;
  margin: 0 auto;
}

.search-bar input {
  font-size: 2rem;
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
