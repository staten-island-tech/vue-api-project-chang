<template>
  <div class="container">
    <div class="birth-data">
      <img :src="require('../assets/cake.png')" alt="Slice of cake"/>
      <h2>
        {{
          "Today, on " +
          month +
          "/" +
          day +
          ", " +
          birthDescription +
          " was born in " +
          year
        }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      year: [],
      birthDescription: [],
      day: null,
      month: null,
      isClicked: false,
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData: async function () {
      let todayMonth = new Date();
      let systemMonth = todayMonth.getMonth() + 1;
      this.month = systemMonth;
      let today = new Date();
      let systemDay = today.getDate();
      this.day = systemDay;
      try {
        const response = await fetch(
          `https://byabbe.se/on-this-day/${this.month}/${this.day}/births.json`
        );
        const data = await response.json();
        this.year = data.births[this.index].year;
        this.birthDescription = data.births[this.index].description;

        console.log(data);
        console.log(this.birthDescription);
        console.log(this.index);
        console.log(this.year);
      } catch (error) {
        alert(
          "Looks like you've done something wrong. Make sure you don't : try to click Previous if its the first option, forget to put a number into one or both fields and try to submit "
        );
        return;
      }
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.birth-data{
  background-color: #5064aa;
  padding: 3rem;
  width: 30%;
  border-radius: 20%;
  text-align: center;
  color: #d5daeb;
  margin-top: 3rem;
  
}

.birth-data img:hover {
  transform: scale(1.3);
}

.birth-data img {
  width: 20rem;
  transition: transform .2s;
}
</style>