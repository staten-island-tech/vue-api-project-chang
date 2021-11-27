<template>
  <div>
    <button class="btn">Next</button>
  </div>
</template>

<script>
export default {
  name: "NextButton",
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    increaseIndex() {
      this.index = this.index++;

      if (this.index > this.index.length) {
        alert("you can't do that");
        return;
      }
    },
  },
};
</script>

<style>
.btn {
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 2rem;
  border: none;
  cursor: pointer;
}
.btn:hover {
  background: #ccc;
}
</style>