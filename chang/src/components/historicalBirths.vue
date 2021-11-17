<template>
  <div>
    <ul class="births-container">
      <li class="births-list">Test</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      births: [],
      day: 2,
      month: 15,
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
  },
};
</script>

<style>
</style>