<template>
  <div class="home">
    <img src="../assets/logo.png" class="home__logo" alt="Seenons Logo" />
    <user-onboarding />
  </div>
</template>

<script>
import UserOnboarding from "../components/UserOnboarding";

export default {
  name: "Home",
  components: {
    UserOnboarding,
  },
};
</script>

<style lang="stylus" scoped>
.home
  position: relative
  min-height 100vh
  display flex
  align-items: flex-end;
  justify-content: center;
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
