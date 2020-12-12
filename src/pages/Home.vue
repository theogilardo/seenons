<template>
  <div class="home">
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
</style>
