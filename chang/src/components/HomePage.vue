<template>


<div class="container">
   <div id="homeimg"></div>
    <div id="titlescreen">
        <div id="title">
            <h2> {{ title }} </h2>
        </div>
        <div class="infographic">
            <p> {{info}} </p>
        </div>
    </div>

   <div class="row">
       <div class="column">
           <p>Have you ever wondered who you shared your special day with? With the help of Birthday Match, we can match your birthday with a figure from history. We don't just stop there, we can also find out who passed on your birthday. What are you waiting for? Go ahead and find your birthday twin!</p>
       </div>
       <div class="column1">
           <div class="review">
               <img src="../assets/elsa.png" alt="Elsa From Frozen"> <div class="review-text">Rating: ★★★★★</div> <p>"OMG! I share the same birthday with Mr. Whalen! KEKW" - (REAL) Elsa </p>
           </div>
           <div class="review">
               <img src="../assets/sova.png"> <div class="review-text">Rating: ★★★★★ </div>
           </div>
           <div class="review">
               <img src="../assets/reyna.png"> <div class="review-text">Rating: ★★★★★ </div>
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
            title: 'Welcome to Birthday Match',
            info: 'Find your match today. Click above to get started!'
        }
    }
}
</script>

<style scoped>

#titlescreen{
    position: absolute;
    height: 50vh;
    top: 35vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 4rem;
}

.infographic {
    font-size: 2rem;
}
#homeimg {
    position: relative;
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    background-image: linear-gradient(to left,#e1e5ee 0%, #767b91 0%), url('../assets/background.jpg');
    background-blend-mode: screen;
}
.row {
    display: flex;
    flex-direction: column;
    width: 65%;
    text-align: center;
    margin: 0 auto;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    gap: 3rem;

}
.column {
    background-color: #C7CCDB;
    padding: 3rem;
    border-radius: 3rem;
    color: #2A324B;
    font-size: 1.2rem;
    margin-bottom: 4rem;
}

.column1 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
h2 {
  font-family: 'Quicksand', sans-serif;
  font-size: 3.5rem;
  text-align: center;
  color: rgb(103, 116, 167);
  margin: auto;
}

.footer {
    background-color:black;
}
.review img {
    width: 14rem;
}
.review {
    width: 30%;
    font-size: 1.3rem;
    position: relative;
    background-color: #C7CCDB;
    padding: 2rem .8rem;
    border-radius: 10%;
    color: #2A324B;
}

.review-text {
    position: absolute;
    background: black;
    color: white;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s, opacity 0.5s linear;
    bottom: 8rem;
    right: 3rem;;
}

.review:hover {
    cursor: pointer;
}

.review:hover .review-text {
    width: 10rem;
    visibility: visible;
    opacity: 0.7;
    padding: 8px 15px;
   
}
</style>