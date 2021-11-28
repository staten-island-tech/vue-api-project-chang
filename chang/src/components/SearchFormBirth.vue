<template>
  <div class="search-bar">
    <form @submit.prevent="fetchData">
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
    <NextButton @click.native="increaseIndex" />
    <PreviousButton @click.native="decreaseIndex" v-show="this.index >= 0" />
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
        console.log(apiData);
        console.log(this.birthDescription);
        console.log(this.year);
        console.log(this.index);
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