<template>
  <div class="container">
    <NavBar> </NavBar>

    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  data() {
    return {};
  },

  components: {
    NavBar,
 
  },
};
</script>


<style>
body {
  margin: 0 auto;
  background-color: #42507B;
}
</style>

