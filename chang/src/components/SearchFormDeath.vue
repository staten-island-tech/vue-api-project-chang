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
    <SearchedDeathData :info="deathData" :arrayIndex="this.index" />
    <NextButton @click.native="increaseIndex" />
    <PreviousButton @click.native="decreaseIndex" v-show="this.index >= 0" />
  </div>
</template>

<script>
import SearchedDeathData from "@/components/SearchedDeathData.vue";
import NextButton from "@/components/NextButton.vue";
import PreviousButton from "@/components/PreviousButton.vue";
export default {
  name: "SearchForm",
  components: {
    SearchedDeathData,
    NextButton,
    PreviousButton,
  },
  data() {
    return {
      index: 0,
      year: ["hi"],
      deathDescription: ["hi"],
      deathData: [],
      day: null,
      month: null,
      isClicked: false,
    };
  },
  methods: {
    fetchData: async function () {
      try {
        const result = await fetch(
          `https://byabbe.se/on-this-day/${this.month}/${this.day}/deaths.json`
        );
        const apiData = await result.json();
        this.year = apiData.deaths[this.index].year;
        this.deathDescription = apiData.deaths[this.index].description;
        this.deathData = apiData;
        console.log(apiData);
        console.log(this.deathDescription);
        console.log(this.year);
        console.log(this.index);
      } catch (error) {
        alert(
          "Looks like you've done something wrong. Make sure you don't : try to click Previous if its the first option, forget to put a number into one or both fields and try to submit "
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