<template>
  <div class="store">
    <stream-container />
  </div>
</template>

<script>
import StreamContainer from "../components/container/StreamContainer";

export default {
  name: "Store",
  components: {
    StreamContainer,
  },
};
</script>

<style lang="stylus" scoped>
.store
  position: relative
  min-height 100vh
</style>
