<template>
<div class="app">
  <HomePage />
    <router-view/>
</div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'
export default {
    components: {
    HomePage,
  },
}

</script>

<style>


</style>