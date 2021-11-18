
<template>
  <div class="container">
    <router-link to="/births">Births</router-link> |
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      day: null,
      month: 14,
    };
  },

  components: {},
};
</script>


<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";


</style>
