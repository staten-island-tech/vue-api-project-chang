
<template>
  <div class="container">
    <div class="buttons">
      <div class="test">
        <router-link to="/">
          <button class="button-1"><i class="fa fa-home"></i></button
        ></router-link>
        <router-link to="/births"
          ><button class="button-1">Births</button>
        </router-link>
        <router-link to="/deaths"
          ><button class="button-1">Deaths</button>
        </router-link>
        <router-view />
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      day: null,
      month: null,
    };
  },

  components: {},
};
</script>


<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

body {
  margin: 0 auto;
  background-color: #2a324b;
}

.content {
  background-color: #c7ccdb;
}

.test {
  text-align: center;
  padding: 3rem;
}

.button-1 {
  appearance: none;
  background-color: #e1e5ed;
  border: 2px solid #2a324b;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 30%;
  will-change: transform;
}

.button-1:disabled {
  pointer-events: none;
}

.button-1:hover {
  color: #fff;
  background-color: #1a1a1a;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-1:active {
  box-shadow: none;
  transform: translateY(0);
}
</style>

