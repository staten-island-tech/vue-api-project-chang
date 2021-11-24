<template>

<div class="container">
   <h2> {{ title }} </h2>
   <hr>
   <div class="row">
       
       <div class="column">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>
       <div class="column2">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>
   </div>
   
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
.column {
    background-color:white;
}

.column1 {
    background-color:white;
}
h2 {
  font-family: 'Quicksand', sans-serif;
  font-size: 2rem;
  text-align: center;
  color: #8288A1;
  margin: auto;
}
</style>