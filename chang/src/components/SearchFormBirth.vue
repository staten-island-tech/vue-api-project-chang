<template>
<div class="containthis">
  <div class="search-bar">

    <img :src="require('../assets/logo.png')" alt="Logo Birthday Match">
    <form
      @submit.prevent="
        switchStatement();
        fetchData();
      "
    >
    <div class="inputbars">
      <p> Type in your birthday month in words or numerical format (1-12). Type in your birthday date. </p>
      <input
        id="search"
        type="text"
        placeholder="Enter Month"
        v-model="month"
      />

      <input id="search" 
      type="text" 
      placeholder="Enter Day" 
      v-model="day" />
    </div>
    
      <button type="submit" class="bingbong">
      <i class="fa fa-search"></i>
      </button>

    </form>
    <SearchedBirthData :info="birthData" :arrayIndex="this.index" />
    <div class="prevnext">
    <PreviousButton @click.native="decreaseIndex" v-show="this.index > 0" />
      <NextButton
      @click.native="increaseIndex"
      v-show="this.index < this.apiLength - 1"
    />
    </div>
  </div>
</div>
</template>

<script>
import SearchedBirthData from "@/components/SearchedBirthData.vue";
import NextButton from "@/components/NextButton.vue";
import PreviousButton from "@/components/PreviousButton.vue";

export default {
  name: "SearchForm",
  components: {
    SearchedBirthData,
    NextButton,
    PreviousButton,
  
  },
  data() {
    return {
      index: 0,
      year: ["hi"],
      birthDescription: ["hi"],
      birthData: [],
      day: null,
      month: null,
      isClicked: false,
      apiLength: null,
      value: "",
    };
  },
  methods: {
    fetchData: async function () {
      try {
        const result = await fetch(
          `https://byabbe.se/on-this-day/${this.month}/${this.day}/births.json`
        );
        const apiData = await result.json();
        this.year = apiData.births[this.index].year;
        this.birthDescription = apiData.births[this.index].description;
        this.birthData = apiData;
        this.apiLength = apiData.births.length;
        console.log(apiData);
        console.log(this.birthDescription);
        console.log(this.year);
        console.log(this.index);
        console.log(apiData.births.length);
      } catch (error) {
        alert(
          "Looks like you've done something wrong. Make sure you put a number from 1-12 in the months area and a number from 1-31 depending on the month in the day area."
        );
        return;
      }
    },
    increaseIndex() {
      this.index++;

      if (this.index > this.index.length) {
        alert(
          "you can't do that because there is nothing next, the only way is backwards"
        );
        return;
      }
    },
    decreaseIndex() {
      this.index--;
      if (this.index < 0) {
        alert(
          "you can't do that because there is nothing to go back to, the only way is forward"
        );
        return;
      }
    },
    switchStatement() {
      switch (this.month) {
        case "January":
          this.month = "1";
          break;
        case "january":
          this.month = "1";
          break;
        case "February":
          this.month = "2";
          break;
        case "february":
          this.month = "2";
          break;
        case "March":
          this.month = "3";
          break;
        case "march":
          this.month = "3";
          break;
        case "April":
          this.month = "4";
          break;
        case "april":
          this.month = "4";
          break;
        case "May":
          this.month = "5";
          break;
        case "may":
          this.month = "5";
          break;
        case "June":
          this.month = "6";
          break;
        case "june":
          this.month = "6";
          break;
        case "July":
          this.month = "7";
          break;
        case "july":
          this.month = "7";
          break;
        case "August":
          this.month = "8";
          break;
        case "august":
          this.month = "8";
          break;
        case "September":
          this.month = "9";
          break;
        case "september":
          this.month = "9";
          break;
        case "October":
          this.month = "10";
          break;
        case "october":
          this.month = "10";
          break;
        case "November":
          this.month = "11";
          break;
        case "november":
          this.month = "11";
          break;
        case "December":
          this.month = "12";
          break;
        case "december":
          this.month = "12";
          break;
      }
    },
  },
};
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&family=Raleway:wght@500&family=Source+Sans+Pro&display=swap');
.search-bar p {
  font-size: 1.2rem;
  font-family: 'EB Garamond', sans-serif;
  font-weight: bold;
  color: #8b6d0f;
  width: 32rem;

}
.prevnext {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.search-bar img {
  width: 25rem;
  float: right;
  margin: -1rem 10px;
}
input {
  display: block;
  width: 50%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid  #eee;
  transition: .5s border-color;
  height: 2rem;
  font-size: 1.5rem;

}
::placeholder {
  opacity: 0.5;
}
.inputbars {
  margin: 30px;
}
input:hover {
  border: 2px solid #aaa;
}

input:focus {
  border: 2px solid black;
}
*:focus {
  outline:none;
}

.search-bar {
  margin: 0 auto;
  background-color: #efcf6c;
  width: 50%;
  padding: 4rem;
  border-radius: 3rem;
  text-align: center;
  
}

.containthis {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bingbong{
  padding: 5px 2rem;
  font-size: 1.5rem;
  border-radius: 6px;
  border: none;
}

.bingbong:hover {
  background-color: #d0d0d0;
}
</style>