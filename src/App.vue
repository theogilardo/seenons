<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      defaultLayout: "default",
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || this.defaultLayout) + "-layout";
    },
  },
};
</script>

<style lang="stylus">

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center

html
  font-size: 62.5%; // 1rem = 10px
  font-family Arial, sans-serif

  h1
    font-size: 4rem;

  h2
    font-size: 3.2rem;

  h3
    font-size: 2.4rem;

  p
    font-size: 1.4rem;

*,
*::before,
*::after
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration none

button
  cursor: pointer;
  transition .5s

  &:focus
    outline 0

  &:hover
    transform translateY(-3px)

input:focus
  outline 0

select:focus
  outline-color #8ee2da

.main
  color #37CCBE

// Dropdown

.multiselect__option--highlight
  background #37CCBE !important

  &::after
    background #37CCBE !important

// Toast

.toast
  background linear-gradient(42deg,#46607f,#16a891 80%,#57c595) !important
  border-radius 2rem !important

  & > svg:first-child
    margin-right: 1rem;

// Buttons

.btn
  border none
  width 60%
  background linear-gradient(42deg,#46607f,#16a891 80%,#57c595)
  padding 1.5rem
  border-radius 2rem
  color white
  font-size 2rem
</style>
