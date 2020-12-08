<template>
  <section class="card-section">
    <!-- <base-button /> -->
    <stream-onboarding />
  </section>
</template>

<script>
// import BaseButton from "../ui/BaseButton";
// import StreamFinder from "../StreamFinder";
import StreamOnboarding from "../StreamOnboarding";

export default {
  name: "StreamContainer",
  components: {
    // BaseButton,
    StreamOnboarding,
  },
  // computed: {
  //   isStreamSelected() {
  //     return "stream-onboarding";
  //   },
  // },
};
</script>

<style lang="stylus" scoped>

.card-section
  position absolute
  bottom 0
  left 50%
  transform translateX(-50%)
  max-width 65rem
  width 100%
  height 50rem;
  background white
  border-top-left-radius 2rem
  border-top-right-radius 2rem
  margin 0 auto
  display flex
  flex-direction column
  align-items: center;
  padding 2rem
</style>
