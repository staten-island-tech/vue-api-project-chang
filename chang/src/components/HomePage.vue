<template>

<div class="container">
   <h2> {{ title }} </h2>
   <hr>
   <div class="row">
       <div class="column">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>
       <div class="column1">
           <div class="review">
               <img src="../assets/sage.png"> <p> "Great Work!" </p>
           </div>
           <div class="review">
               <img src="../assets/sova.png"> <p> "Great Work!" </p>
           </div>
           <div class="review">
               <img src="../assets/reyna.png"> <p> "Great Work!" </p>
           </div>
       </div>
   </div>
  <div class="footer">
      <p>Contact Us</p>
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

img {
    width: 14rem;
}
.row {
    display: flex;
    flex-direction: column;
    width: 60%;
    text-align: center;
    margin: 0 auto;
    padding: 3rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    gap: 3rem;

}
.column {
    background-color: #C7CCDB;
    padding: 3rem;
    border-radius: 3rem;
    color: #2A324B;
    font-size: 1.2rem;
}

.column1 {
    background-color:white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
h2 {
  font-family: 'Quicksand', sans-serif;
  font-size: 3rem;
  text-align: center;
  color: #8288A1;
  margin: auto;
}

.footer {
    background-color:black;
}
</style>