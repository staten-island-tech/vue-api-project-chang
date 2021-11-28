<template>
  <div>
    <div class="birth-data">
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

<style>
</style>