
<template>
  <div class="container">
    <section class="background">
      <div class="column1">
        <div class="search-bar">
          <form> 
              <input type="text" placeholder="Search a name.." name="search">
              <button type="submit" ><i class="fa fa-search"></i></button> 
          </form>
        </div>
      </div>
      <div class="column2">
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return{

        }
    },

    components: {

    },
          
          methods: {
            async getData() {
              try {
                const response = await fetch("https://byabbe.se/on-this-day/10/10/births.json");
                const data = await response.json();
                console.log(data);
              
              } catch (error) {
              console.log(error);
              }
            }
          },
          mounted() {
            this.getData();
          }
  }
  

</script>

<style>

@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

.background {
  background-image:   linear-gradient(0,#2A324B, #767B91), url('./assets/vaporwave.jpg');
  background-blend-mode: screen;
  background-size: cover;
  margin: 0 auto;
}

.search-bar input{
  font-size: 2rem;
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
</style>
