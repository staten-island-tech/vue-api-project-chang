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

    <div class="moreinfo">
        <div class="info">
        <h2>How Does This Work?</h2>
        <p>Curiosity never killed the cat. We can do it all. </p>
        </div>
        <div class="cards">
        <div class="flipcard">
            <div class="flipcard-inner">
                <div class="flipcard-front">
                    <img :src="require('../assets/birthday.png')">
                </div>
                <div class="flipcard-back">
                    <p>Have you ever wondered who you shared your special day with? With the help of Birthday Match, we can match your birthday with a figure from history. What are you waiting for? Go ahead and find your birthday twin!</p>
                </div>
            </div>
        </div>

        <div class="flipcard">
            <div class="flipcard-inner">
                <div class="flipcard-front">
                    <img :src="require('../assets/death.png')">
                </div>
                <div class="flipcard-back">
                    <p>We don't just stop there, we can also find out who passed on your birthday. It is like they say, "When one legend dies, another is born." What are you waiting for? Go ahead and find out!</p>
                </div>
            </div>
        </div>
        </div>
    </div>

    <div id="recent"> 
     <h2>Daily Special Shoutout</h2>  
        <div class="recent-card">
             <TodaysBirthData />
        </div> 
    </div>
   <div id="row">
       <h2> Reviews </h2>
       
       <div class="column1">
           <div class="review">
               <img src="../assets/elsa.png" alt="Elsa From Frozen"> <div class="review-text">Rating: ★★★★★</div> <p>"OMG! I share the same birthday as Mr. Whalen! KEKW" - (REAL) Elsa </p>
           </div>
           <div class="review">
               <img src="../assets/joji.jpg" alt= "Cat"> <div class="review-text">Rating: ★★★★★ </div> <p>"Meow Meow Meow Meow Really Good Meow Meow Meow " - Joji </p>
           </div>
           <div class="review">
               <img src="../assets/twin.jpg" alt= "Cole Sprouse from Zack and Cody"> <div class="review-text">Rating: ★★★★★ </div> <p> "Super helpful. I always wondered who else shared the same birthday as me! " - Cole Sprouse </p>
           </div>
       </div>
   </div>

<Footer />
</div>
 

</template>

<script>
import TodaysBirthData from "@/components/TodaysBirthsData.vue";
import Footer from "@/components/Footer.vue";
export default {
    data() {
        return{
            title: 'Welcome to Birthday Match',
            info: 'Find your match today. Click above to get started!'
        }
    },
    components: {
        TodaysBirthData,
        Footer
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&family=Raleway:wght@500&family=Source+Sans+Pro&display=swap');

.info p {
    text-align: center;
    font-size: 1.5rem;
    color: #E1E5EE;
    font-family: 'EB Garamond', serif;
    margin:0 auto;
}
.moreinfo {
    padding: 3.5rem;
}
.cards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

}

.flipcard img {
    width: 25rem;
}
.flipcard {
    background-color: transparent;
    width: 30rem;
    height: 18rem;
    perspective: 100rem;
    padding: 2rem;

}

.flipcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flipcard:hover .flipcard-inner {
  transform: rotateY(180deg);
}

.flipcard-front, .flipcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.flipcard-front {
  background-color: #99a7d1;
  color: black;
}

.flipcard-back {
  background-color: #f6e2a8;;
  color: #7485B8;
  margin: 0 auto;
  transform: rotateY(180deg);
 font-family: 'EB Garamond', serif;
 text-align: center;
 font-size: 1.7rem;
}

#titlescreen{
    position: absolute;
    height: 50vh;
    top: 35vh;
    display: flex;
    flex-direction: column;
    left: 4rem;

}

.recent-card {
    text-align: center;
}
#recent {
    background-color: #7485B8;
    margin: 0 auto;
    padding: 3rem;
    font-family: 'EB Garamond', serif;
    

}

#recent h2 {
    color: #404f7a;
}


.infographic {
    font-size: 2rem;
    margin-top: -1.5rem;
    color: rgb(60, 66, 95);
    font-family: 'EB Garamond', serif;


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
#row {
    display: flex;
    flex-direction: column;
    width: 75%;
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
    margin-bottom: 10rem;
}
h2 {
  font-family: 'Quicksand', sans-serif;
  font-size: 3.5rem;
  text-align: center;
  color: #F3548C;
  margin: auto;
}


.review img {
    width: 14rem;
}
.review {
    width: 30%;
    font-size: 1.3rem;
    position: relative;
    background-color: #C7CCDB;
    padding: 2.5rem .5rem;
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
    bottom: 10rem;
    right: 6rem;;
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