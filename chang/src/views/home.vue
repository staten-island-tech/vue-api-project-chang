<template>
  <div class="app">
    <HomePage />
    <TodaysBirthData />
    <router-view />
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";
import TodaysBirthData from "@/components/TodaysBirthsData.vue";
export default {
  components: {
    HomePage,
    TodaysBirthData,
  },
};
</script>

<style>
</style>