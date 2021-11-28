<template>
  <div class="search-bar">
    <form
      @submit.prevent="
        switchStatement();
        fetchData();
      "
    >
      <input
        id="search"
        type="text"
        placeholder="Enter Month"
        v-model="month"
      />
      <input id="search" type="text" placeholder="Enter Day" v-model="day" />
      <button type="submit">
        <i class="fa fa-search"></i>
      </button>
    </form>
    <SearchedBirthData :info="birthData" :arrayIndex="this.index" />
    <NextButton
      @click.native="increaseIndex"
      v-show="this.index < this.apiLength"
    />
    <PreviousButton @click.native="decreaseIndex" v-show="this.index > 0" />
  </div>
</template>

<script>
import SearchedBirthData from "@/components/SearchedBirthData.vue";
import NextButton from "@/components/NextButton.vue";
import PreviousButton from "@/components/PreviousButton.vue";
export default {
  name: "SearchForm",
  components: {
    SearchedBirthData,
    NextButton,
    PreviousButton,
  },
  data() {
    return {
      index: 0,
      year: ["hi"],
      birthDescription: ["hi"],
      birthData: [],
      day: null,
      month: null,
      isClicked: false,
      apiLength: null,
      value: "",
    };
  },
  methods: {
    fetchData: async function () {
      try {
        const result = await fetch(
          `https://byabbe.se/on-this-day/${this.month}/${this.day}/births.json`
        );
        const apiData = await result.json();
        this.year = apiData.births[this.index].year;
        this.birthDescription = apiData.births[this.index].description;
        this.birthData = apiData;
        this.apiLength = apiData.births.length;
        console.log(apiData);
        console.log(this.birthDescription);
        console.log(this.year);
        console.log(this.index);
        console.log(apiData.births.length);
      } catch (error) {
        alert(
          "Looks like you've done something wrong. Make sure you put a number from 1-12 in the months area and a number from 1-31 depending on the month in the day area."
        );
        return;
      }
    },
    increaseIndex() {
      this.index++;

      if (this.index > this.index.length) {
        alert(
          "you can't do that because there is nothing next, the only way is backwards"
        );
        return;
      }
    },
    decreaseIndex() {
      this.index--;
      if (this.index < 0) {
        alert(
          "you can't do that because there is nothing to go back to, the only way is forward"
        );
        return;
      }
    },
    switchStatement() {
      switch (this.month) {
        case "January":
          this.month = "1";
          break;
        case "january":
          this.month = "1";
          break;
        case "February":
          this.month = "2";
          break;
        case "february":
          this.month = "2";
          break;
        case "March":
          this.month = "3";
          break;
        case "march":
          this.month = "3";
          break;
        case "April":
          this.month = "4";
          break;
        case "april":
          this.month = "4";
          break;
        case "May":
          this.month = "5";
          break;
        case "may":
          this.month = "5";
          break;
        case "June":
          this.month = "6";
          break;
        case "june":
          this.month = "6";
          break;
        case "July":
          this.month = "7";
          break;
        case "july":
          this.month = "7";
          break;
        case "August":
          this.month = "8";
          break;
        case "august":
          this.month = "8";
          break;
        case "September":
          this.month = "9";
          break;
        case "september":
          this.month = "9";
          break;
        case "October":
          this.month = "10";
          break;
        case "october":
          this.month = "10";
          break;
        case "November":
          this.month = "11";
          break;
        case "november":
          this.month = "11";
          break;
        case "December":
          this.month = "12";
          break;
        case "december":
          this.month = "12";
          break;
      }
    },
  },
};
</script>

<style>
.search-bar input {
  font-size: 2.28rem;
}

.search-bar {
  padding: 2rem;
}
</style>