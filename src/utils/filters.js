import Vue from "vue";

Vue.filter("toFixed", (number) => {
  return number.toFixed(2);
});
