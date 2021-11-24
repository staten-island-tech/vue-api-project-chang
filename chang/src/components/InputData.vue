<template>
    <div class="search-bar">

        <input id="search" type="text" placeholder="Enter Month" v-model="month" />
        <input id="search" type="text" placeholder="Enter Day" v-model="day"/>
        <button type="submit" v-on:click="$emit('click', $fetchData)"> <i class="fa fa-search"></i></button>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
input {
  font-size: 2.28rem;
}

.search-bar button {
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 2rem;
  border: none;
  cursor: pointer;
}

.search-bar button:hover {
  background: #ccc;
}

.search-bar {
  padding: 2rem;
  text-align: center;
}
</style>