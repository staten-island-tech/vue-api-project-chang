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
          <div class="birth-data">
            <h2>
              {{ birthDescription + " was born in " + year }}
            </h2>
            <button @click="increaseIndex">Next</button>
            <button @click="decreaseIndex">Previous</button>
          </div>
        </form>
      </div>
    </div>
    <div class="column2"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      year: [],
      birthDescription: [],
      day: 1,
      month: 1,
      isClicked: false,
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
        this.year = data.births[this.index].year;
        this.birthDescription = data.births[this.index].description;
        let today = new Date();
        let systemMonth = today.getMonth() + 1;
        console.log(systemMonth);
        console.log(data);
        console.log(this.birthDescription);
        console.log(this.index);
      } catch (error) {
        alert(
          "Looks like you've done something wrong, try not to click Previous if its the first option"
        );
        return;
      }
    },

    preventNegativeIndex() {
      if (this.index < 0) {
        alert("you can't do that");
      }
    },
    increaseIndex() {
      this.index++;

      if (this.index > this.index.length) {
        alert("you can't do that");
        return;
      }
    },
    decreaseIndex() {
      this.index--;
      if (this.index < 0) {
        alert("you can't do that");
        return;
      }
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
  font-size: 2.28rem;
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

.search-bar {
  padding: 2rem;
}
</style>
