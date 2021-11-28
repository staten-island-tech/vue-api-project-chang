<template>
  <div>
    <SearchForm />
    <div class="column1">
      <div class="birth-data">
        <!-- <NextButton @click.native="increaseIndex" /> -->
      </div>
    </div>
    <div class="column2"></div>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";

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
    SearchForm,
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
