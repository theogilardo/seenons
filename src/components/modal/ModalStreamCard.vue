<template>
  <div @click="activateCard" :class="{ active: isCardActive }" class="card">
    <img :src="streamSize.image" alt="Bin Seenons" class="card__image" />
    <div class="card__size">
      <h3>{{ streamSize.size }}L</h3>
    </div>
    <div class="card__info">
      <div v-if="streamSize.unit_price_rent">
        <p>Rent</p>
        <p class="card__info__price">{{ streamSize.unit_price_rent }}€</p>
      </div>
      <div v-if="streamSize.unit_price_placement">
        <p>Placement</p>
        <p class="card__info__price">{{ streamSize.unit_price_placement }}€</p>
      </div>
      <div v-if="streamSize.unit_price_pickup">
        <p>Pickup</p>
        <p class="card__info__price">{{ streamSize.unit_price_pickup }}€</p>
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

.card
  position relative
  overflow hidden
  width 100%
  height 14rem
  border 1px solid #E2E2E2
  border-radius 2rem
  padding 1.5rem
  display grid
  align-items: center;
  grid-template-columns 30% 1fr 30%
  box-shadow 0 3px 6px #33333311
  color #3B3B3B
  transition .5s

  &.active
    border 1px solid #8ee2da

  &:not(:last-child)
    margin-bottom 3rem

  &:hover
    transform translateY(-3px)

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
</style>
