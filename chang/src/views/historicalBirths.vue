<template>

  <div>
    <SearchForm />
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


</style>
