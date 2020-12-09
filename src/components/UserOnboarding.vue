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
import ModalStream from "./modal/ModalStream";

export default {
  name: "UserOnboarding",
  created() {
    this.$store.dispatch("getWasteStreams");
    // this.$modal.show(
    //   ModalStream,
    //   { text: "This text is passed as a property" },
    //   { height: "650px", maxHeight: "870px", width: "700px", scrollable: true }
    // );
  },
  methods: {
    showModalStream() {
      this.$modal.show(
        ModalStream,
        { text: "This text is passed as a property" },
        {
          height: "650px",
          width: "700px",
          scrollable: true,
        }
      );
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

.btn
  border none
  width 60%
  background linear-gradient(42deg,#46607f,#16a891 80%,#57c595)
  padding 1.5rem
  border-radius 2rem
  color white
  font-size 2rem
</style>
