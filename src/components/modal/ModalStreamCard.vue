<template>
  <div class="layout-3D">
    <img
      src="../../assets/bin.png"
      alt="Bin Seenons"
      class="layout-3D__image"
    />
    <div class="card">
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
        src="../../assets/logo-background2.svg"
        alt="Logo Seenons"
        class="card__logo"
      />
      <div class="card__background">
        <img
          src="../../assets/shape.svg"
          alt="Svg curve shape"
          class="card__background__shape"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalStreamCard",
};
</script>

<style lang="stylus" scoped>

.layout-3D
  width 100%
  height 14rem
  position relative

  &__image
    object-fit cover
    width 100%
    position absolute
    left: -60px
    bottom: -4px
    width: 275px
    z-index: 5

  &:not(:last-child)
    margin-bottom 8rem

.card
  position relative
  overflow hidden
  width 100%
  height 100%
  border 1px solid #E2E2E2
  border-radius 2rem
  padding 1.5rem
  display grid
  align-items: center;
  grid-template-columns 30% 1fr 30%
  box-shadow 0 3px 6px #33333311
  transition .5s
  color #3B3B3B

  &__size
    grid-column 2 / 3
    width 10rem
    height 10rem
    border 6.5px solid #8EE2DA
    border-radius 50%
    display flex
    align-items: center
    justify-content: center
    position: relative;
    transform translateX(-15px)
    z-index: 5;
    background: white;

  &__info
    display flex
    flex-direction column
    align-items: center
    justify-content: center
    grid-column 3 / 4

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
      border-radius 1rem
      padding .5rem 1rem

  &__logo
    position: absolute
    bottom -25px
    right 27%
    width 16rem
    object-fit cover

  &__background
    position: absolute
    bottom -6px
    left 0

    &__shape
      width 80%

  &:hover
    transform translateY(-3px)
</style>
