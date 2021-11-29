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
.birth-data{
  background-color:#f1acc4;
  color: #87012f;
}


</style>