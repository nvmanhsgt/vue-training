<template>
    <carousel></carousel>
</template>

<script>
  import Carousel from './Top/Slider'

  export default {
    name: 'Top',
    components: {
      Carousel
    },
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
