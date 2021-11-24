<template>
  <div class="container">
    <NavBar />
    <router-view />
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
export default {
  data() {
    return {
      day: null,
      month: null,
    };
  },

  components: {
    NavBar,
  }
};
</script>


<style>

body {
  margin: 0 auto;
  background-color: #2a324b;
}


</style>

