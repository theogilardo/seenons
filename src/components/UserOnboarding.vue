<template>
  <section class="user-onboarding">
    <div class="user-onboarding__container">
      <h3 class="main">What do you feel like recycling today?</h3>
      <img
        class="user-onboarding__container__image"
        src="../assets/recycle.jpg"
        alt="Recycle Illustration"
      />
      <button @click="showModalStream" class="btn">
        Process a waste stream
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserOnboarding",
  created() {
    this.$store.dispatch("getWasteStreams");
  },
  methods: {
    showModalStream() {
      this.$showModal();
    },
  },
};
</script>

<style lang="stylus" scoped>

.user-onboarding
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

  &__container
    flex 1
    width 100%
    display flex
    flex-direction column
    align-items: center;
    justify-content: space-around;

    &__image
      opacity: .8;
      transform translateY(-10px)
      width 100%
      object-fit contain
</style>
