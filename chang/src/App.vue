<template lang="en">

  <div class="container">
    <nav>
    <NavBar /> 
    </nav>
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
  background-color: #41528B;
}
</style>

