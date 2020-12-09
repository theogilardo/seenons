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
  font-family Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center

html
  font-size: 62.5%; // 1rem = 10px

  h1
    font-size: 4rem;

  h2
    font-size: 3.2rem;

  h3
    font-size: 2.4rem;

  p
    font-size: 1.6rem;

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

.main
  color #37CCBE
</style>
