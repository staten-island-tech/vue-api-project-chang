<template>
  <div>
    <div class="birth-data">
      <img :src ="require('../assets/uhoh.png')" alt="Uh oh!">
      <h2>
        {{
          info.deaths[arrayIndex].description +
          " died in the year " +
          info.deaths[arrayIndex].year
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
.birth-data img {
  width: 30rem;
}
.birth-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Quicksand', sans-serif;
  width: 80%;
  text-align: center;
  border-radius: 3rem;
  padding: 1rem;
  margin: 3rem;
  height: 40vh;
  background-color:#f1acc4;
  color: #87012f;
}




</style>