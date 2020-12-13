<template>
  <div class="container" :class="{ active: isCardActive }">
    <div
      @click="toggleCard"
      :class="`card-background-${wasteStreamType}`"
      class="card"
    >
      <img :src="streamSizeImage" alt="Bin Seenons" class="card__image" />
      <div class="card__size" :class="`card-circle-${wasteStreamType}`">
        <h4 class="card__size__label">{{ streamSize.size }}L</h4>
      </div>
      <div class="card__info">
        <div v-if="streamSize.unit_price_rent">
          <p class="card__info__label">Rent</p>
          <p class="card__info__price">
            {{ (streamSize.unit_price_rent * quantity) | toFixed }} €
          </p>
        </div>
        <div v-if="streamSize.unit_price_placement">
          <p class="card__info__label">Placement</p>
          <p class="card__info__price">
            {{ (streamSize.unit_price_placement + pricePlacement) | toFixed }} €
          </p>
        </div>
        <div v-if="streamSize.unit_price_pickup">
          <p class="card__info__label">Pickup</p>
          <p class="card__info__price">
            {{ (streamSize.unit_price_pickup * quantity) | toFixed }} €
          </p>
        </div>
      </div>
      <img
        src="../../assets/logo-background.svg"
        alt="Logo Seenons"
        class="card__logo"
      />
      <div class="card__background">
        <img
          src="../../assets/shape.svg"
          alt="Svg curve shape"
          class="card__background__shape"
          :class="`card-shape-${wasteStreamType}`"
        />
      </div>
    </div>
    <div class="slider" :class="{ active: isCardActive }">
      <div class="slider__wrapper">
        <div class="slider__wrapper__quantity">
          <img
            @click="decrementWasteStream"
            src="../../assets/quantity-minus.svg"
            alt="Icon"
            class="slider__wrapper__icon"
            :class="{ disabled: !isQuantityGreaterThanOne }"
          />
          <h4 class="slider__wrapper__value">{{ quantity }}</h4>
          <img
            @click="incrementWasteStream"
            src="../../assets/quantity-plus.svg"
            alt="Icon"
            class="slider__wrapper__icon"
          />
        </div>
        <button @click="addCard" class="slider__wrapper__btn">
          + Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ModalWasteStreamCard",
  props: {
    streamSize: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isCardActive: false,
      quantity: 1,
      pricePlacement: 0,
    };
  },
  computed: {
    ...mapGetters(["wasteStreamType"]),
    streamSizeImage() {
      return this.streamSize.image
        ? this.streamSize.image
        : require("@/assets/bin-icon.svg");
    },
    isQuantityGreaterThanOne() {
      return this.quantity > 1;
    },
  },
  methods: {
    addCard() {
      this.$toastCardAdded();
      this.toggleCard();
      this.resetCard();
    },
    toggleCard() {
      this.isCardActive = !this.isCardActive;
    },
    resetCard() {
      this.quantity = 1;
      this.pricePlacement = 0;
    },
    incrementWasteStream() {
      this.incrementQuantity();
      this.incrementPlacement();
    },
    decrementWasteStream() {
      if (this.isQuantityGreaterThanOne) {
        this.decrementQuantity();
        this.decrementPlacement();
      }
    },
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      this.quantity--;
    },
    incrementPlacement() {
      this.pricePlacement += 8.5;
    },
    decrementPlacement() {
      this.pricePlacement -= 8.5;
    },
  },
};
</script>

<style lang="stylus" scoped>

.container
  width 100%
  height 13rem
  transition .5s
  position relative
  transition .5s
  margin-bottom 3rem

  &.active
    margin-bottom 10rem

  &:hover
    transform translateY(-3px)

.card
  position relative
  overflow hidden
  width 100%
  height 100%
  border-radius 2rem
  padding 1rem 2rem
  display grid
  grid-template-columns 30% 1fr 14.5rem
  box-shadow 0 3px 6px #33333311
  background #19726f
  color #3B3B3B
  z-index 1

  @media only screen and (max-width: 420px)
    padding: 1rem 1.5rem 1rem 0.5rem
    grid-template-columns: 30% 6rem 1fr;

  &__image
    object-fit cover
    width 100%
    width 10rem
    height 10rem
    align-self center
    justify-self center
    z-index: 5

    @media only screen and (max-width: 550px)
      width 8rem
      height 8rem

    @media only screen and (max-width: 420px)
      transform: translate(7px, -12px);

  &__size
    grid-column 2 / 3
    width 8rem
    height 8rem
    color #646b77
    border 6.5px solid #8EE2DA
    background white
    border-radius 50%
    display flex
    align-items: center
    justify-content: center
    align-self center
    justify-self center
    position: relative;
    z-index 5

    @media only screen and (max-width: 550px)
      width 7rem
      height 7rem

    @media only screen and (max-width: 550px)
      width 6rem
      height 6rem

    @media only screen and (max-width: 420px)
      transform: translate(-39px, 15px);

    &__label

      @media only screen and (max-width: 550px)
        font-size 1.5rem

      @media only screen and (max-width: 550px)
        font-size 1.2rem

  &__info
    display flex
    flex-direction column
    align-items: center
    justify-content: center
    grid-column 3 / 4
    position relative
    z-index 5

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

    &__label
      padding-right 2rem

    &__price
      background #8E99AF
      color inherit
      border-radius 1rem
      padding .5rem 1rem
      display: flex;
      align-items: center;
      justify-content: center;
      width max-content

  &__logo
    position: absolute
    bottom -25px
    right 27%
    width 14rem
    opacity .1
    object-fit cover

  &__background
    position: absolute
    bottom -6px
    left 0

    &__shape
      width 33rem
      filter: invert(67%) sepia(64%) saturate(423%) hue-rotate(124deg) brightness(90%) contrast(92%);

      @media only screen and (max-width: 585px)
        width 30rem

      @media only screen and (max-width: 550px)
        width 28rem

      @media only screen and (max-width: 500px)
        display none

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
    transform translateY(6.5rem)

  &__wrapper
    position relative
    width 100%
    height 100%

    &__quantity
      position absolute
      bottom 1.5rem
      left 3rem
      display flex
      align-items center
      justify-content space-around

    &__icon
      width 3.5rem
      height 3.5rem
      object-fit cover
      transition all 0.3s

    &__value
      color #646b77
      margin 0 1.5rem

    &__btn
      position absolute
      bottom 1.5rem
      right 2rem
      border none
      border-radius 1.4rem
      font-size 1.2rem
      padding 1rem 1.5rem
      background #37CCBE
      text-transform uppercase
      color white
      transition .5s

.disabled
  cursor disabled
  opacity .5
</style>
