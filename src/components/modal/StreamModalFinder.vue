<template>
  <section class="container">
    <select name="waste-streams" class="container__select">
      <option selected disabled>Select waste stream</option>
      <option value="Residual Waste">Residual Waste</option>
      <option value="Glass">Glass</option>
      <option value="Cans">Cans</option>
      <option value="Coffee Beans">Coffee Beans</option>
    </select>
  </section>
</template>

<style lang="stylus" scoped>
.container
  margin-bottom 2rem
  width 100%
  height 8rem
  display flex
  align-items: center;
  justify-content: center;

  &__select
    width 100%
    padding 2rem
    border-radius 1rem
    border 1px solid #CBCBCB
</style>
