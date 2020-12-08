<template>
  <div class="container">
    <h3 class="main">What do you feel like recycling today?</h3>
    <button class="btn">Process a waste stream</button>
    <img
      class="container__image"
      src="../assets/recycle.jpg"
      alt="Recycle Illustration"
    />
  </div>
</template>

<script>
export default {
  name: "StreamOnboarding",
};
</script>

<style lang="stylus" scoped>

.container
  flex 1
  width 100%
  display flex
  flex-direction column
  align-items: center;
  justify-content: space-around;

  &__image
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
