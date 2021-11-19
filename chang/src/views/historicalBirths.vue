<template>
  <div>
    <div class="background">
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
            <div class="birth-data" v-for="birth in births" :key="birth.year">
              <h2>
                {{ birth.description + " was born in the year " + birth.year }}
              </h2>
              <h2></h2>
            </div>
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
      </div>
      <div class="column2"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      births: [],
      day: null,
      month: null,
    };
  },

  created() {
    this.fetchData();
  },
  name: "Births",
  methods: {
    fetchData: async function () {
      try {
        const response = await fetch(
          `https://byabbe.se/on-this-day/${this.month}/${this.day}/births.json`
        );
        const data = await response.json();
        this.births = data.births;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    submitEvent() {
      let day = this.day;
      console.log(day);
      this.day = null;
      let month = this.month;
      console.log(month);
      this.month = null;
    },
  },
};
</script>

<style>
.background {
  background-image: linear-gradient(0, #E1E5EE, #767b91),
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
