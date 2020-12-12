<template>
  <div class="container">
    <img src="../assets/logo.png" class="container__logo" alt="Seenons Logo" />
    <slot />
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",
};
</script>

<style lang="stylus" scoped>

.container
  position: relative;
  min-height 100vh
  background linear-gradient(42deg,#46607f,#16a891 80%,#57c595)

  &__logo
    position: absolute
    top: 5rem;
    left 50%
    transform translatex(-50%)
    width 50rem

    @media only screen and (max-width: 500px)
      width 35rem
</style>
