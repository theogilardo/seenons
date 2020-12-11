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

  h4
    font-size: 2em;

  p
    font-size: 1.2rem;

*,
*::before,
*::after
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration none

button
  cursor: pointer;

  &:focus
    outline 0

input:focus
  outline 0

select:focus
  outline-color #8ee2da

// Modal

.vm--modal
  border-radius 20px !important

// Dropdown

.multiselect__option--highlight
  background #37CCBE !important
  font-size 1.4rem !important

  &::after
    background #37CCBE !important

.multiselect,
.multiselect__input,
.multiselect__single
  font-size 1.4rem !important

// Toast
.toast
  background linear-gradient(42deg,#46607f,#16a891 80%,#57c595) !important
  border-radius 3rem !important

  & > svg:first-child
    margin-right: 1rem;

// Buttons

.btn
  border none
  width 50%
  background linear-gradient(42deg,#46607f,#16a891 80%,#57c595)
  padding 1.25rem
  border-radius 2rem
  color white
  font-size 1.8rem
  transition .5s

  &:hover
    transform translateY(-3px)

// Keyframes

@keyframes float {
  0% {
    transform translateY(0)
  }
  50% {
    transform translateY(-20px)
  }
  100% {
    transform translateY(0)
  }
}
</style>
