<template>
  <div>
    <div class="birth-data">
      <h2>
        {{ birthDescription + " was born in " + year }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     index: 0,
  //     year: [],
  //     birthDescription: [],
  //     day: null,
  //     month: null,
  //     isClicked: false,
  //   };
  // },

  // created() {
  //   this.fetchData();
  // },

  // methods: {
  //   fetchData: async function () {
  //     let todayMonth = new Date();
  //     let systemMonth = todayMonth.getMonth() + 1;
  //     this.month = systemMonth;
  //     let today = new Date();
  //     let systemDay = today.getDate();
  //     this.day = systemDay;
  //     try {
  //       const response = await fetch(
  //         `https://byabbe.se/on-this-day/${this.month}/${this.day}/births.json`
  //       );
  //       const data = await response.json();
  //       this.year = data.births[this.index].year;
  //       this.birthDescription = data.births[this.index].description;

  //       console.log(data);
  //       console.log(this.birthDescription);
  //       console.log(this.index);
  //     } catch (error) {
  //       alert(
  //         "Looks like you've done something wrong. Make sure you don't : try to click Previous if its the first option, forget to put a number into one or both fields and try to submit "
  //       );
  //       return;
  //     }
  //   },
  // },
};
</script>

<style>
</style>