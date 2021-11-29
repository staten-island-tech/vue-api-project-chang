<template>
  <div>
    <div class="birth-data">
      <img :src ="require('../assets/match.png')" alt="Its a Match!">
      <h2>
        {{
          info.births[arrayIndex].description +
          " was born in the year " +
          info.births[arrayIndex].year
        }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info", "arrayIndex"],
  data() {
    return {
      index: 0,
    };
  },
};
</script>

<style scoped>

.birth-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7e7b6;
  font-family: 'Quicksand', sans-serif;
  color: #a17d12;
  width: 80%;
  text-align: center;
  border-radius: 3rem;
  padding: 1rem;
  margin: 3rem;
}


</style>