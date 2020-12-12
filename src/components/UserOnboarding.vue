<template>
  <section class="user-onboarding">
    <div class="user-onboarding__container">
      <button @click="showModalStream" class="btn">
        Process a waste stream
      </button>
      <img
        class="user-onboarding__container__image"
        src="../assets/recycle.jpg"
        alt="Recycle Illustration"
      />
      <h4 class="user-onboarding__container__title">
        What do you feel like recycling today?
      </h4>
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
  max-width 55rem
  width 100%
  height 40rem;
  background white
  border-top-left-radius 2rem
  border-top-right-radius 2rem
  display flex
  flex-direction column
  align-items: center;
  padding 2rem
  margin 0 3rem

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

    &__title
      color #37CCBE
      overflow-wrap: break-word;

      @media only screen and (max-width: 500px)
          font-size: 1.8rem
</style>
