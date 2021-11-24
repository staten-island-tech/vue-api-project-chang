<template>

<div class="container">
   <h2> {{ title }} </h2>
</div>

</template>

<script>
export default {
    data() {
        return{
            title: 'Welcome to Birthday Match!'
        }
    }
}
</script>

<style scoped>
h2 {
  font-family: 'Quicksand', sans-serif;
  font-size: 2rem;
  text-align: center;
  color: #8288A1;
  margin: auto;
}
</style>