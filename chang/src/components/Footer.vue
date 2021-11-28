<template>
<div class="container">
  <div class="footer">
     
      <div class="top">
        <a href = "https://github.com/"> <img :src="require('../assets/github.jpeg')"> </a>
         <a href= "https://gmail.com"><img :src="require('../assets/email.jpeg')"></a>
         <a href= "https://twitter.com"><img :src="require('../assets/twitter.jpeg')"></a>
     </div>

      <div class="bottom">
          <p>{{footer}}</p>
      </div>
    </div>
</div>    
</template>

<script>
export default {
    data() {
    return{
    name: "Footer",
    footer:  "contact us: muhammad chaudhry and julissa liang"
    }
    }
}
</script>

<style scoped>

.top {
    margin: 0 auto;
}

img {
    width: 2.5rem;
}
.footer {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

}

.container {
    background-color: #bcc4dd;
    color: black;
    font-family: 'Quicksand', sans-serif;
    width: 100%;
    padding: 2rem 0;
}
</style>