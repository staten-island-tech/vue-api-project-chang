<template>
<div class="container">
  <div class="footer">
      <div class="left">
          <p>{{footer}}</p>
      </div>
      <div class="right">
        <a href = "https://github.com/"> <img :src="require('../assets/github.jpeg')"> </a>
         <a href= "https://gmail.com"><img :src="require('../assets/email.jpeg')"></a>
     </div>
    </div>
</div>    
</template>

<script>
export default {
    data() {
    return{
    name: "Footer",
    footer:  "contact us"
    }
    }
}
</script>

<style scoped>

.right {
    float: right;
    margin-right: 40px;
    display: flex;
    justify-content: space-between;
}

img {
    width: 2.5rem;
}
.footer {
    
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
}

.container {
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
}
</style>