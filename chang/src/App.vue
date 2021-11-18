
<template>
  <div class="container">
    <div class="buttons">
      <div class="test">
      <router-link to="/births"><button> Births</button> </router-link> 
      <router-link to="/about"><button> About </button> </router-link>
      <router-view />
      </div>
    </div>
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

body {
  margin: 0 auto;
  background-color: #2A324B;
}

.test {
  background-color: #C7CCDB;
  /* margin: 0 auto; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.container {
    margin: 0 auto;
    position: relative;
    height: 200px;
}
</style>

