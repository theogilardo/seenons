<template>
  <div class="card">
    <img src="../../assets/bin.png" alt="Bin Seenons" class="card__image" />
    <div class="card__size">
      <h3>240L</h3>
    </div>
    <div class="card__info">
      <div>
        <p>Rent</p>
        <p class="card__info__price">2.50€</p>
      </div>
      <div>
        <p>Placement</p>
        <p class="card__info__price">5.50€</p>
      </div>
      <div>
        <p>Emptying</p>
        <p class="card__info__price">5.50€</p>
      </div>
    </div>
    <img
      src="../../assets/logo-background.png"
      alt="Logo Seenons"
      class="card__logo"
    />
  </div>
</template>

<script>
export default {
  name: "ModalStreamCard",
};
</script>

<style lang="stylus" scoped>

.card
  position: relative;
  width 100%
  height 16.5rem
  border 1px solid #E2E2E2
  border-radius 2rem
  padding 1.5rem
  display grid
  align-items: center;
  grid-template-columns 30% 1fr 35%
  box-shadow 0 3px 6px #33333311
  transition .5s
  color #3B3B3B

  &__image
    object-fit cover
    width 100%
    grid-column 1 / 2
    border 1px solid red

  &__size
    grid-column 2 / 3
    width 10rem
    height 10rem
    border 5px solid #8EE2DA
    border-radius 50%
    display flex
    align-items: center
    justify-content: center

  &__info
    display flex
    flex-direction column
    align-items: center
    justify-content: center
    grid-column 3 / 4
    border 1px solid red


    & > *
      width 100%
      display flex
      align-items center
      justify-content space-between

      &:not(:last-child)
        margin-bottom 1rem

    &__price
      background #8E99AF
      color white
      border-radius 2rem
      padding .5rem 1rem

  &__logo
    position: absolute
    bottom 0
    right 27%
    width 16rem
    object-fit cover

  &:not(:last-child)
    margin-bottom 5rem

  &:hover
    transform translateY(-3px)
</style>
