<template>
  <div>
    <div class="column1">
      <div class="search-bar">
        <form @submit.prevent="fetchData">
          <input id="search" type="text" placeholder="Enter Month" v-model="month" />
          <input id="search" type="text" placeholder="Enter Day" v-model="day" />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div class="birth-data">
        <NextButton @click.native="increaseIndex" />
      </div>
    </div>
    <div class="column2"></div>
  </div>
</template>

<script>
import NextButton from "@/components/NextButton.vue";

export default {
  name: "Births",
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
  components: {
    NextButton,
  },
  methods: {
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

.search-bar {
  padding: 2rem;
}
</style>
