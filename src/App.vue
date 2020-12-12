<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      defaultLayout: "default",
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || this.defaultLayout) + "-layout";
    },
  },
};
</script>

<style lang="stylus">

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  overflow-x hidden

html
  font-size: 62.5%; // 1rem = 10px
  font-family Arial, sans-serif

  h1
    font-size: 4rem;

  h2
    font-size: 3.2rem;

  h3
    font-size: 2.4rem;

  h4
    font-size: 2em;

  p
    font-size: 1.2rem;

*,
*::before,
*::after
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration none

button
  cursor: pointer;

  &:focus
    outline 0

input:focus
  outline 0

select:focus
  outline-color #8ee2da

// Modal

.vm--modal
  background #ff000000 !important
  box-shadow 0 0 0 !important

// Dropdown

.multiselect__option--highlight
  background #37CCBE !important
  font-size 1.4rem !important

  &::after
    background #37CCBE !important

.multiselect,
.multiselect__input,
.multiselect__single
  font-size 1.4rem !important

// Toast
.toast
  background linear-gradient(42deg,#46607f,#16a891 80%,#57c595) !important
  border-radius 3rem !important

  & > svg:first-child
    margin-right: 1rem;

// Buttons

.btn
  border none
  width max-content
  background linear-gradient(42deg,#46607f,#16a891 80%,#57c595)
  padding 1.25rem
  border-radius 2rem
  color white
  font-size 1.8rem
  transition .5s

  @media only screen and (max-width: 560px)
      font-size: 1.5rem


  &:hover
    transform translateY(-3px)

// Keyframes

@keyframes float {
  0% {
    transform translateY(0)
  }
  50% {
    transform translateY(-20px)
  }
  100% {
    transform translateY(0)
  }
}

// Design Cards

.card-background-brood
  background #733e06 !important

.card-circle-brood
  border 6.5px solid #cccccc !important

.card-shape-brood
  filter: invert(97%) sepia(4%) saturate(7%) hue-rotate(55deg) brightness(110%) contrast(87%) !important

.card-background-pmd
  background #f65e1c !important

.card-circle-pmd
  border 6.5px solid #cccccc !important

.card-shape-pmd
  filter: invert(97%) sepia(4%) saturate(7%) hue-rotate(55deg) brightness(110%) contrast(87%) !important

.card-background-piepschuim
  background #f65e1c !important

.card-circle-piepschuim
  border 6.5px solid #cccccc !important

.card-shape-piepschuim
  filter: invert(97%) sepia(4%) saturate(7%) hue-rotate(55deg) brightness(110%) contrast(87%) !important

.card-background-papier-karton
  background #121085 !important

.card-circle-papier-karton
  border 6.5px solid #B7D4FF !important

.card-shape-papier-karton
  filter: invert(97%) sepia(4%) saturate(7%) hue-rotate(55deg) brightness(110%) contrast(87%) !important

.card-background-pet
  background #f65e1c !important

.card-circle-pet
  border 6.5px solid #cccccc !important

.card-shape-pet
  filter: invert(97%) sepia(4%) saturate(7%) hue-rotate(55deg) brightness(110%) contrast(87%) !important

.card-background-koffiedrab
  background #733e06 !important

.card-circle-koffiedrab
  border 6.5px solid #cccccc !important

.card-shape-koffiedrab
  filter: invert(97%) sepia(4%) saturate(7%) hue-rotate(55deg) brightness(110%) contrast(87%) !important

.card-background-sinaasappelschillen
  background #009681 !important

.card-circle-sinaasappelschillen
  border 6.5px solid #a3d4cb !important

.card-shape-sinaasappelschillen
  filter: invert(82%) sepia(85%) saturate(4947%) hue-rotate(18deg) brightness(103%) contrast(105%) !important

.card-background-glass
  background #FFD600 !important

.card-circle-glass
  border 6.5px solid #F4EDB2 !important

.card-shape-glass
  filter: invert(97%) sepia(4%) saturate(7%) hue-rotate(55deg) brightness(110%) contrast(87%) !important

.card-background-pet-emmers
  background #e7ea05 !important

.card-circle-pet-emmers
  border 6.5px solid #F4EDB2 !important

.card-shape-pet-emmers
  filter: invert(97%) sepia(4%) saturate(7%) hue-rotate(55deg) brightness(110%) contrast(87%) !important

.card-background-etensresten
  background #117243 !important

.card-circle-etensresten
  border 6.5px solid #cccccc !important

.card-shape-etensresten
  filter: invert(97%) sepia(4%) saturate(7%) hue-rotate(55deg) brightness(110%) contrast(87%) !important
</style>
