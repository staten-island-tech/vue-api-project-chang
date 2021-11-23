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
            <button type="submit"><i class="fa fa-search"></i></button>

            <div class="death-data">
              <h2>
                {{ deathDescription + " died in the year " + year }}
              </h2>
              <button @click="index++">Next</button>
              <button @click="index--">Previous</button>
            </div>
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
      index: 0,
      year: [],
      deathDescription: [],
      day: null,
      month: null,
    };
  },

  // created() {
  //   this.fetchData();
  // },
  name: "Deaths",
  methods: {
    fetchData: async function () {
      try {
        const response = await fetch(
          `https://byabbe.se/on-this-day/${this.month}/${this.day}/deaths.json`
        );
        const data = await response.json();
        this.year = data.deaths[this.index].year;
        this.deathDescription = data.deaths[this.index].description;

        console.log(data);
        console.log(this.deaths);
      } catch (error) {
        alert(error);
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
