<template>
  <div>
    <div class="death-data">
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

<style>
</style>