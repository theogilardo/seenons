<template>
  <div class="store">
    <user-onboarding />
  </div>
</template>

<script>
import UserOnboarding from "../components/UserOnboarding";

export default {
  name: "Store",
  components: {
    UserOnboarding,
  },
};
</script>

<style lang="stylus" scoped>
.store
  position: relative
  min-height 100vh
</style>
