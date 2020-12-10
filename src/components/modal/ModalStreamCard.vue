<template>
  <div class="container" :class="{ active: isCardActive }">
    <div @click="activateCard" class="card">
      <img :src="streamSize.image" alt="Bin Seenons" class="card__image" />
      <div class="card__size">
        <h3>{{ streamSize.size }}L</h3>
      </div>
      <div class="card__info">
        <div v-if="streamSize.unit_price_rent">
          <p>Rent</p>
          <p class="card__info__price">
            {{ streamSize.unit_price_rent | toFixed }} €
          </p>
        </div>
        <div v-if="streamSize.unit_price_placement">
          <p>Placement</p>
          <p class="card__info__price">
            {{ streamSize.unit_price_placement | toFixed }} €
          </p>
        </div>
        <div v-if="streamSize.unit_price_pickup">
          <p>Pickup</p>
          <p class="card__info__price">
            {{ streamSize.unit_price_pickup | toFixed }} €
          </p>
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
    <div class="slider" :class="{ active: isCardActive }">
      <div class="slider__wrapper">
        <div class="slider__wrapper__quantity">
          <img
            src="../../assets/quantity-minus.svg"
            alt="Icon"
            class="slider__wrapper__icon"
          />
          <h3 class="slider__wrapper__value">1</h3>
          <img
            src="../../assets/quantity-plus.svg"
            alt="Icon"
            class="slider__wrapper__icon"
          />
        </div>
        <button class="slider__wrapper__btn">+ Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalStreamCard",
  data() {
    return {
      isCardActive: false,
    };
  },
  props: {
    streamSize: {
      type: Object,
      required: true,
    },
  },
  computed: {
    wasteStreamSelected() {
      return this.$store.getters.wasteStreamSelected;
    },
  },
  methods: {
    activateCard() {
      this.isCardActive = !this.isCardActive;
    },
  },
};
</script>

<style lang="stylus" scoped>

.container
  width 100%
  height 14rem
  transition .5s
  position relative
  transition .5s

  &:not(:last-child)
    margin-bottom 3rem

  &:not(:last-child)&.active
    margin-bottom 12rem

  &:hover
    transform translateY(-3px)

.slider
  position: absolute
  top 0
  left 0
  width 100%
  height 100%
  background #EFEFEF
  opacity .8
  border-radius 2rem
  transition .5s

  &.active
    transform translateY(9rem)
    margin-bottom 9rem

  &__wrapper
    position relative
    width 100%
    height 100%

    &__quantity
      position absolute
      bottom 2rem
      left 3rem
      display flex
      align-items center
      justify-content space-around

    &__icon
      width 5rem
      height 5rem
      object-fit cover

    &__value
      color #8E99AF
      margin 0 1.5rem

    &__btn
      position absolute
      bottom 2rem
      right 2rem
      border none
      border-radius 1.4rem
      font-size 1.4rem
      padding 1.5rem
      background #37CCBE
      // background linear-gradient(42deg,#46607f,#16a891 80%,#57c595)
      text-transform uppercase
      color white
      transition .5s

      &:hover
        transform translateY(-3px)

.card
  position relative
  overflow hidden
  width 100%
  height 100%
  border-radius 2rem
  padding 1.5rem
  display grid
  align-items: center;
  grid-template-columns 30% 1fr 30%
  box-shadow 0 3px 6px #33333311
  color #3B3B3B
  background #19726f
  z-index 1

  // &.active
  //   border 1px solid #8ee2da

  &__image
    object-fit cover
    width 100%
    position absolute
    left 28px
    bottom 15px
    width 275px
    width 11rem
    height 11rem
    z-index: 5

  &__size
    grid-column 2 / 3
    width 10rem
    height 10rem
    color #646b77
    background white
    border 6.5px solid #8EE2DA
    border-radius 50%
    display flex
    align-items: center
    justify-content: center
    position: relative;
    transform translateX(-15px)
    z-index 5

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
      color white

      &:not(:last-child)
        margin-bottom 1rem

      > p
        color inherit

    &__price
      background #8E99AF
      color inherit
      border-radius 1rem
      padding .5rem 1rem
      display: flex;
      align-items: center;
      justify-content: center;

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
</style>
