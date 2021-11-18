<template>
  <div>
    <section class="background">
      <div class="column1">
        <div class="search-bar">
          <form @submit="fetchData">
            <input
              id="search"
              type="text"
              placeholder="Enter Month"
              v-model="day"
            />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
      </div>
      <div class="column2"></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      births: [],
      day: null,
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
          `https://byabbe.se/on-this-day/${this.day}/${this.month}/births.json`
        );
        const data = await response.json();
        this.births = data.births;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    submitEvent() {
      let day = this.day;
      console.log(day);
      this.day = null;
    },
  },
};
</script>

<style>
</style>