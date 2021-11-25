<template>
  <div>
    <div class="column1">
      <div class="search-bar">
        <form @submit.prevent="fetchData">
          <input
            id="search"
            type="text"
            placeholder="Enter Month"
            v-model="month"
          />
          <input
            id="search"
            type="text"
            placeholder="Enter Day"
            v-model="day"
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div class="birth-data">
        <BirthData />
        <DataButtons />
      </div>
    </div>
    <div class="column2"></div>
  </div>
</template>

<script>
import DataButtons from "@/components/Buttons.vue";
import BirthData from "@/components/birthsData.vue";
export default {
  name: "Births",

  components: {
    DataButtons,
    BirthData,
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
  font-size: 2.28rem;
}

.search-bar {
  padding: 2rem;
}
</style>
